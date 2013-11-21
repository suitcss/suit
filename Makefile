install:
	npm install
	./node_modules/component/bin/component install --dev

test:
	./node_modules/component/bin/component build --dev

.PHONY: install
