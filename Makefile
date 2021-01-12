APP_NAME := elisacp
CLI_NAME := elisa
BASEPATH := $(shell pwd)
PACKAGE := github.com/riipandi/elisacp/version
REVISION := $(shell git rev-parse --short HEAD)
BRANCH := $(shell git rev-parse --abbrev-ref HEAD | tr -d '\040\011\012\015\n')
LDFLAGS := "-X $(PACKAGE).GitRevision=$(REVISION) -X $(PACKAGE).GitBranch=$(BRANCH)"

all: clean_all build_backend build_cli compile

build_cli:
	cd cmd/elisa && go build -ldflags $(LDFLAGS) -i -o $(BASEPATH)/target/build/$(CLI_NAME)

build_backend: build_frontend
	cd cmd/elisacp && go build -ldflags $(LDFLAGS) -i -o $(BASEPATH)/target/build/$(APP_NAME)

build_frontend: clean
	cd ./web && npm run build && cp -r build/* ../cmd/elisacp/static/public/ && cd -

build_website:
	cd ./website && npm run build && cd -

clean:
	rm -fr cmd/elisacp/static/public/*
	touch cmd/elisacp/static/public/.gitkeep

clean_all: clean
	rm -fr $(BASEPATH)/target/*

compile_cli:
	cd cmd/elisa && GOOS=linux GOARCH=amd64 go build -ldflags $(LDFLAGS) -i -o $(BASEPATH)/target/release/$(CLI_NAME)-x64

compile_app:
	cd cmd/elisacp && GOOS=linux GOARCH=amd64 go build -ldflags $(LDFLAGS) -i -o $(BASEPATH)/target/release/$(APP_NAME)-x64

compile: compile_cli compile_app

dev_frontend:
	cd ./web && npm run start

dev_website:
	cd ./website && npm run dev

install_app: build_backend
	cd cmd/elisacp && go install

install_cli: build_cli
	cd cmd/elisa && go install

install: install_cli install_app

rundev: build_frontend
	go run cmd/elisacp/main.go

runsite:
	cd website && npm run dev

runprod:
	./target/build/$(APP_NAME)
