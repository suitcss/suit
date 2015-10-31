# SUIT CSS utilities: display

[![Build Status](https://secure.travis-ci.org/suitcss/utils-display.png?branch=master)](http://travis-ci.org/suitcss/utils-display)

SUIT CSS display utilities.

Read more about [SUIT CSS's design principles](https://github.com/suitcss/suit/).

## Installation

* [npm](http://npmjs.org/): `npm install suitcss-utils-display`
* Download: [zip](https://github.com/suitcss/utils-display/zipball/master)

## Available classes

* `u-block` - Display `block`.
* `u-hidden` - Display `none`.
* `u-flex` - Display `flex`.
* `u-hiddenVisually` - Visually hidden but available to screenreaders.
* `u-inline` - Display `inline`.
* `u-inlineBlock` - Display `inline-block`.
* `u-table` - Display `table`.
* `u-tableCell` - Display `table-cell`.
* `u-tableRow` - Display `table-row`.

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
* Firefox 4+ (28+ for `flex`)
* Safari 5+ (6.1+ for `flex`)
* Internet Explorer 9+ (10+ for `flex`)

Refer to the [caniuse](http://caniuse.com/) page for [flexbox](http://caniuse.com/#feat=flexbox)
