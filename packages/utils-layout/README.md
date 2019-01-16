# SUIT CSS utilities: layout

[![Build Status](https://travis-ci.org/suitcss/utils-layout.svg?branch=master)](https://travis-ci.org/suitcss/utils-layout)

A SUIT CSS collection of utility classes for low-level CSS layout traits.

Read more about [SUIT CSS's design principles](https://github.com/suitcss/suit/).

## Installation

* [npm](http://npmjs.org/): `npm install suitcss-utils-layout`
* Download: [zip](https://github.com/suitcss/utils-layout/releases/latest)

## Available classes

* `u-cf` - Contain floats (micro clearfix).
* `u-nbfc` - Create a new block formatting context.
* `u-nbfcAlt` - Create a new block formatting context (alternative technique).
* `u-floatLeft` - Float left.
* `u-floatRight` - Float right.

## Usage

Please refer to the README for [SUIT CSS utils](https://github.com/suitcss/utils/)

## Testing

Install [Node](http://nodejs.org) (comes with npm).

```
npm install
```

To generate a build:

```
npm run build
```

To lint code with [postcss-bem-linter](https://github.com/postcss/postcss-bem-linter) and [stylelint](http://stylelint.io/)

```
npm run lint
```

To generate the testing build.

```
npm run build-test
```

To watch the files for making changes to test:

```
npm run watch
```

Basic visual tests are in `test/index.html`.

## Browser support

* Google Chrome (latest)
* Opera (latest)
* Firefox 4+
* Safari 5+
* Internet Explorer 8+
