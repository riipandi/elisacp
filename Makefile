APP_NAME := lisacp-ui
CLI_NAME := lisacp
BASEPATH := $(shell pwd)
PACKAGE := github.com/riipandi/lisacp/version
REVISION := $(shell git rev-parse --short HEAD)
BRANCH := $(shell git rev-parse --abbrev-ref HEAD | tr -d '\040\011\012\015\n')
LDFLAGS := "-X $(PACKAGE).GitRevision=$(REVISION) -X $(PACKAGE).GitBranch=$(BRANCH)"

all: clean_all build_backend build_cli compile

build_cli:
	cd cmd/cli && go build -ldflags $(LDFLAGS) -i -o $(BASEPATH)/target/build/$(CLI_NAME)

build_backend: build_frontend
	cd cmd/app && go build -ldflags $(LDFLAGS) -i -o $(BASEPATH)/target/build/$(APP_NAME)

build_frontend: clean
	cd ./web && npm run build && cp -r build/* ../cmd/app/static/public/ && cd -

build_website:
	cd ./website && npm run build && cd -

clean:
	rm -fr cmd/app/static/public/*
	touch cmd/app/static/public/.gitkeep

clean_all: clean
	rm -fr $(BASEPATH)/target/*

compile_cli:
	cd cmd/cli && GOOS=linux GOARCH=amd64 go build -ldflags $(LDFLAGS) -i -o $(BASEPATH)/target/release/$(CLI_NAME)-x64

compile_app:
	cd cmd/app && GOOS=linux GOARCH=amd64 go build -ldflags $(LDFLAGS) -i -o $(BASEPATH)/target/release/$(APP_NAME)-x64

compile: compile_cli compile_app

dev_frontend:
	cd ./web && npm run start

dev_website:
	cd ./website && npm run dev

rundev: build_frontend
	go run cmd/app/main.go

runprod:
	./target/build/$(APP_NAME)
