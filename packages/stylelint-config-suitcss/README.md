# stylelint-config-suitcss
[![NPM version](http://img.shields.io/npm/v/stylelint-config-suitcss.svg)](https://www.npmjs.org/package/stylelint-config-suitcss) [![Build Status](https://travis-ci.org/suitcss/stylelint-config-suitcss.svg?branch=master)](https://travis-ci.org/suitcss/stylelint-config-suitcss) [![AppVeyor Build Status](https://ci.appveyor.com/api/projects/status/ksa449q3tbql0bx8?svg=true)](https://ci.appveyor.com/project/simonsmith/stylelint-config-suitcss)

> SUIT CSS shareable config for stylelint.

Configuration rules to ensure your CSS code is compliant with [SUIT CSS's code style](https://github.com/suitcss/suit/blob/master/doc/STYLE.md).

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
    "indentation": "tab",
    "number-leading-zero": null
  }
}
```

## [Changelog](CHANGELOG.md)

## [License](LICENSE)
