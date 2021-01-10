APP_NAME := lisacp-ui
CLI_NAME := lisacp
BASEPATH := $(shell pwd)
PACKAGE := github.com/riipandi/lisacp/version
REVISION := $(shell git rev-parse --short HEAD)
BRANCH := $(shell git rev-parse --abbrev-ref HEAD | tr -d '\040\011\012\015\n')
LDFLAGS := "-X $(PACKAGE).GitRevision=$(REVISION) -X $(PACKAGE).GitBranch=$(BRANCH)"

all: clean_all build_backend build_cli

build_cli:
	cd cmd/cli && go build -ldflags $(LDFLAGS) -i -o $(BASEPATH)/target/release/$(CLI_NAME)

build_backend: build_frontend
	cd cmd/app && go build -ldflags $(LDFLAGS) -i -o $(BASEPATH)/target/release/$(APP_NAME)

build_frontend: clean
	cd ./web && npm run build && cp -r build/* ../cmd/app/static/public/ && cd -

build_website:
	cd ./website && npm run build && cd -

clean:
	rm -fr cmd/app/static/public/*
	touch cmd/app/static/public/.gitkeep

clean_all: clean
	rm -fr target/*

compile:
	GOARCH=amd64 GOOS=darwin go build -i -o target/release/$(APP_NAME)-darwin-x64
	GOARCH=amd64 GOOS=linux go build -i -o target/release/$(APP_NAME)-linux-x64

dev_frontend:
	cd ./web && npm run start

dev_website:
	cd ./website && npm run dev

rundev: build_frontend
	go run cmd/app/main.go

runprod:
	./target/release/$(APP_NAME)
