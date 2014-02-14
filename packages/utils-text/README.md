# SUIT utilities: text

[![Build Status](https://secure.travis-ci.org/suitcss/utils-text.png?branch=master)](http://travis-ci.org/suitcss/utils-text)

A SUIT collection of utility classes for low-level CSS text traits.

Read more about [SUIT's design principles](https://github.com/suitcss/suit/).

## Installation

* [Bower](http://bower.io/): `bower install --save suit-utils-text`
* [Component(1)](http://component.io/): `component install suitcss/utils-text`
* Download: [zip](https://github.com/suitcss/utils-text/zipball/master)

## Available classes

* `u-textBreak` - Break strings when their length exceeds the width of their container.
* `u-textCenter` - Center-align text.
* `u-textLeft` - Left-align text.
* `u-textRight` - Right-align text.
* `u-textInheritColor` - Inherit the ancestor's text color.
* `u-textTruncate` - Truncate a single line of text, with ellipsis.

## Usage

Please refer to the README for [SUIT utils](https://github.com/suitcss/utils/)

## Testing

Install [Node](http://nodejs.org) (comes with npm).

```
npm install
```

To generate an un-preprocessed build (i.e., you want to use your own tooling and configure variables).

```
npm run build
```

To generate a standalone, preprocessed build.

```
npm run build-standalone
```

To generate the testing build.

```
npm run build-test
```

Basic visual tests are in `test.html`.

## Browser support

* Google Chrome (latest)
* Opera (latest)
* Firefox 4+
* Safari 5+
* Internet Explorer 8+
