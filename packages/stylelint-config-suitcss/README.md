# stylelint-config-suitcss
[![NPM version](http://img.shields.io/npm/v/stylelint-config-suitcss.svg)](https://www.npmjs.org/package/stylelint-config-suitcss) [![Travis Build Status](https://img.shields.io/travis/stylelint/stylelint-config-suitcss/master.svg?label=unix%20build)](https://travis-ci.org/stylelint/stylelint-config-suitcss) [![AppVeyor Build Status](https://img.shields.io/appveyor/ci/jeddy3/stylelint-config-suitcss/master.svg?label=windows%20build)](https://ci.appveyor.com/project/jeddy3/stylelint-config-suitcss)

> SuitCSS shareable config for stylelint.

Configuration rules to ensure your CSS code is compliant with [SuitCSS's code style](https://github.com/suitcss/suit/blob/master/doc/STYLE.md).

## Installation

```console
$ npm install stylelint-config-suitcss
```

## Usage

Require the config and use it for stylelint's option. For example, using the node API appraoch:

```js
var fs = require("fs")
var postcss = require("postcss")
var stylelint = require("stylelint")
var stylelintConfigSuitcss = require("stylelint-config-suitcss")
var reporter = require("postcss-reporter")

// css to be processed
var css = fs.readFileSync("input.css", "utf8")

  postcss([
    stylelint(stylelintConfigSuitcss),
    reporter(),
   ])
  .process(css, { from: file })
  .then()
  .catch(err => console.error(err.stack))
```

## [Changelog](CHANGELOG.md)

## [License](LICENSE)
