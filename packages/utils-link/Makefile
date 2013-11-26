.PHONY: install test

all: install test

install:
	npm install
	./node_modules/.bin/component install --dev

test:
	npm test
	./node_modules/.bin/component build --dev
