# SUIT CSS utilities: text

[![Build Status](https://travis-ci.org/suitcss/utils-text.svg?branch=master)](http://travis-ci.org/suitcss/utils-text)

SUIT CSS text utilities.

Read more about [SUIT CSS's design principles](https://github.com/suitcss/suit/).

## Installation

* [npm](http://npmjs.org/): `npm install suitcss-utils-text`
* Download: [zip](https://github.com/suitcss/utils-text/releases/latest)

## Available classes

* `u-textBreak` - Break strings when their length exceeds the width of their container.
* `u-textCenter` - Center-align text.
* `u-textLeft` - Left-align text.
* `u-textRight` - Right-align text.
* `u-textInheritColor` - Inherit the ancestor's text color.
* `u-textKern` - Enable kerning in supporting browsers.
* `u-textNoWrap` - Prevent wrapping at whitespace.
* `u-textTruncate` - Truncate a single line of text, with ellipsis.

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
* Firefox (latest)
* Safari 5+
* Internet Explorer 8+
