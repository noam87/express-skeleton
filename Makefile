test:
	NODE_ENV=test ./node_modules/.bin/mocha $(testfiles)

build:
	./scripts/build.sh

run:
	make build && node app;

.PHONY: test
.PHONY: build
.PHONY: run
