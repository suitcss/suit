# stylelint-config-suitcss
[![NPM version](http://img.shields.io/npm/v/stylelint-config-suitcss.svg)](https://www.npmjs.org/package/stylelint-config-suitcss) [![Travis Build Status](https://img.shields.io/travis/stylelint/stylelint-config-suitcss/master.svg?label=unix%20build)](https://travis-ci.org/stylelint/stylelint-config-suitcss) [![AppVeyor Build Status](https://img.shields.io/appveyor/ci/jeddy3/stylelint-config-suitcss/master.svg?label=windows%20build)](https://ci.appveyor.com/project/jeddy3/stylelint-config-suitcss)

> SuitCSS shareable config for stylelint.

Configuration rules to ensure your CSS code is compliant with [SuitCSS's code style](https://github.com/suitcss/suit/blob/master/doc/STYLE.md).

## Installation

```console
$ npm install stylelint-config-suitcss
```

## Usage

Set your stylelint config to:

```json
{
  "extends": "stylelint-config-suitcss"
}
```

### Extending the config

Simply add a `"rules"` key to your config and add your overrides there.

For example, to change the `indentation` to tabs and turn off the `number-leading-zero` rule:


```json
{
  "extends": "stylelint-config-suitcss",
  "rules": {
    "indentation": [2, "tab"],
    "number-leading-zero": 0
  }
}
```

## [Changelog](CHANGELOG.md)

## [License](LICENSE)
