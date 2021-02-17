CLI_NAME := elisa
APP_NAME := elisacp
BASEPATH := $(shell pwd)
PACKAGE := github.com/riipandi/elisacp/version
REVISION := $(shell git rev-parse --short HEAD)
BRANCH := $(shell git rev-parse --abbrev-ref HEAD | tr -d '\040\011\012\015\n')

RELEASE_PATH = $(BASEPATH)/target/release
BUILD_PATH = $(BASEPATH)/target/debug

LDFLAG_INFO = -X $(PACKAGE).GitRevision=$(REVISION) -X $(PACKAGE).GitBranch=$(BRANCH)
BUILD_CMD = go build -ldflags "-s -w $(LDFLAG_INFO)"
BUILD_ENV = GOOS=linux GOARCH=amd64

all: clean build_cli build_elcp compile

release: compile_cli compile_elcp

clean:
	@rm -fr cmd/elcp/static/public/*
	@touch cmd/elcp/static/public/.gitkeep
	@rm -fr $(BASEPATH)/target/*

# ------------------------------------------------------------------------------
# ElisaCP cli app
# ------------------------------------------------------------------------------
build_cli:
	@cd cmd/eli && $(BUILD_CMD) -i -o $(BUILD_PATH)/$(CLI_NAME)
	@cd cmd/eli && go install
	@echo "Elisa CLI (dev) has been compiled and installed."

compile_cli:
	@cd cmd/eli && $(BUILD_ENV) $(BUILD_CMD) -i -o $(RELEASE_PATH)/$(CLI_NAME)-$(REVISION)-x64
	@ls -lh target/release && echo "Elisa CLI compiled with production environment."

# --------------------------------------------------------------------------------
# ElisaCP control panel
# --------------------------------------------------------------------------------
build_elcp: build_frontend
	@cd cmd/elcp && $(BUILD_CMD) -i -o $(BUILD_PATH)/$(APP_NAME)
	@cd cmd/elcp && go install
	@echo "ElisaCP (dev) has been compiled and installed."

build_frontend: clean
	@cd web ; npm install --silent && npm run build
	@cp -r web/dist/* cmd/elcp/static/public/

compile_elcp:
	@cd cmd/elcp && $(BUILD_ENV) $(BUILD_CMD) -i -o $(RELEASE_PATH)/$(APP_NAME)-$(REVISION)-x64
	@ls -lh target/release && echo "ElisaCP compiled with production environment."

runweb:
	@cd web && npm install --silent && npm run dev

rundev: build_frontend
	@go run cmd/elcp/main.go

# --------------------------------------------------------------------------------
# ElisaCP website
# --------------------------------------------------------------------------------
build_website:
	@cd website && npm install --silent && npm run build

runsite:
	@cd website && npm run dev
