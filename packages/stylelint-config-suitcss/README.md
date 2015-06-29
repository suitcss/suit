# stylelint-config-suitcss
[![NPM version](http://img.shields.io/npm/v/stylelint-config-suitcss.svg)](https://www.npmjs.org/package/stylelint-config-suitcss) [![Travis Build Status](https://img.shields.io/travis/stylelint/stylelint-config-suitcss/master.svg?label=unix%20build)](https://travis-ci.org/stylelint/stylelint-config-suitcss) [![AppVeyor Build Status](https://img.shields.io/appveyor/ci/jeddy3/stylelint-config-suitcss/master.svg?label=windows%20build)](https://ci.appveyor.com/project/jeddy3/stylelint-config-suitcss)

> SuitCSS shareable config for stylelint.

Configuration rules to ensure your CSS code is compliant with [SuitCSS's code style](https://github.com/suitcss/suit/blob/master/doc/STYLE.md).

## Installation

```console
$ npm install stylelint-config-suitcss
```

## Usage

Require the config and use it for stylelint's option. For example, using the node API approach:

```js
var fs = require("fs")
var postcss = require("postcss")
var reporter = require("postcss-reporter")
var stylelint = require("stylelint")
var configSuitcss = require("stylelint-config-suitcss")

// css to be processed
var css = fs.readFileSync("input.css", "utf8")

postcss([
  stylelint(configSuitcss), // use stylelint-config-suitcss
  reporter(),
 ])
.process(css, { from: "input.css" })
.then()
```

### Extending the config

Use lodash's `assign` e.g.:

```js
var assign = require("lodash.assign")
var configSuitcss = require("stylelint-config-suitcss")

// change indentation to tabs and disable the number-leading-zero rule
var myConfig = {
  "rules": {
    "indentation": [2, "tab"],
    "number-leading-zero": 0,
  }
}

var config = {
  rules: assign(configSuitcss.rules, myConfig.rules)
}

```

## [Changelog](CHANGELOG.md)

## [License](LICENSE)
