# SUIT utilities: before

[![Build Status](https://secure.travis-ci.org/suitcss/utils-before.png?branch=master)](http://travis-ci.org/suitcss/utils-before)

A SUIT collection of utility classes for offsetting elements.

Read more about [SUIT's design principles](https://github.com/suitcss/suit/).

## Installation

* [Component(1)](http://component.io/): `component install suitcss/utils-before`
* [Bower](http://bower.io/): `bower install --save suitcss/utils-before`
* Download: [zip](https://github.com/suitcss/utils-before/zipball/master)

## Available classes

* `u-beforeXofY` (numerous) - Specify the proportional offset before an object.

`X` must be an integer less than `Y`.

`Y` can be any of the following numbers: 2, 3, 4, 5, 6, 8, 10, 12.

### Plugins

Utilities that can be limited to specific Media Query breakpoints.

* `u-sm-beforeXofY` - To use at the small Media Query breakpoint.
* `u-md-beforeXofY` - To use at the medium Media Query breakpoint.
* `u-lg-beforeXofY` - To use at the large Media Query breakpoint.

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
