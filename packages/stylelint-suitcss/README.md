# stylelint-suitcss

[![Build Status](https://travis-ci.org/suitcss/stylelint-suitcss.svg?branch=master)](https://travis-ci.org/suitcss/stylelint-suitcss)

A collection of [stylelint](https://stylelint.io/) plugins for SUIT CSS.

## Installation

```
npm install stylelint-suitcss --save-dev

# or

yarn add stylelint-suitcss --dev
```

## Usage

Add `stylelint-suitcss` to your stylelint config plugins array, then add rules
you need to the `rules` object.

```js
// .stylelintrc
{
  "plugins": [
    "stylelint-suitcss"
  ],
  "rules": {
    "suitcss/custom-property-no-outside-root": true,
    "suitcss/root-no-standard-properties": true,
    "suitcss/selector-root-no-composition": true
  }
}
```

## Available rules

* [`custom-property-no-outside-root`](./rules/custom-property-no-outside-root/README.md) - Disallow custom properties outside of `:root` rules.
* [`root-no-standard-properties`](./rules/root-no-standard-properties/README.md) - Disallow standard properties inside `:root` rules.
* [`selector-root-no-composition`](./rules/selector-root-no-composition/README.md) - Disallow the composition of `:root` in selectors.
