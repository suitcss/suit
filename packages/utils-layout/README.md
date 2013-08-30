# SUIT utilities: layout

[![Build Status](https://secure.travis-ci.org/suitcss/utils-layout.png?branch=master)](http://travis-ci.org/suitcss/utils-layout)

A SUIT collection of utility classes for low-level CSS layout traits.

Read more about [SUIT's design principles](https://github.com/suitcss/suit/).

## Installation

* [Bower](http://bower.io/): `bower install --save suit-utils-layout`
* [Component(1)](http://component.io/): `component install suitcss/utils-layout`
* Download: [zip](https://github.com/suitcss/utils-layout/zipball/master)
* Git: `git clone https://github.com/suitcss/utils-layout.git`

## Available classes

* `u-cf` - Contain floats (micro clearfix).
* `u-nbfc` - Create a new block formatting context.
* `u-nbfcAlt` - Create a new block formatting context (alternative technique).
* `u-pullLeft` - Float left.
* `u-pullRight` - Float right.
* `u-objLeft` - The same as `u-pullLeft` but with `10px` of opposite margin, and child image normalization.
* `u-objRight` - The same as `u-pullRight` but with `10px` of opposite margin, and child image normalization.
* `u-alignTop` - Vertically align to top.
* `u-alignMiddle` - Vertically align to middle.
* `u-alignBaseline` -Vertically align to baseline.
* `u-alignBottom` - Vertically align to bottom.

## Usage

Please refer to the README for [SUIT utils](https://github.com/suitcss/utils/)

## Testing

Install [Node](http://nodejs.org) (comes with npm).

From the repo root, install the project's development dependencies:

```
npm install
```

To run the CSS Lint tests:

```
npm test
```

## Browser support

* Google Chrome (latest)
* Opera (latest)
* Firefox 4+
* Safari 5+
* Internet Explorer 8+
