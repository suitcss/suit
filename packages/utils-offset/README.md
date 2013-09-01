# SUIT utilities: offset

[![Build Status](https://secure.travis-ci.org/suitcss/utils-offset.png?branch=master)](http://travis-ci.org/suitcss/utils-offset)

A SUIT collection of utility classes for low-level CSS offset traits.

Read more about [SUIT's design principles](https://github.com/suitcss/suit/).

## Installation

* [Bower](http://bower.io/): `bower install --save suit-utils-offset`
* [Component(1)](http://component.io/): `component install suitcss/utils-offset`
* Download: [zip](https://github.com/suitcss/utils-offset/zipball/master)
* Git: `git clone https://github.com/suitcss/utils-offset.git`

## Available classes

* `u-beforeXofY` (numerous) - Specify the proportional offset before an object.
* `u-afterXofY` (numerous) - Specify the proportional offset after an object.

`X` must be an integer less than `Y`.

`Y` can be any of the following numbers: 2, 3, 4, 5, 6, 8, 10, 12.

## Usage

Please refer to the README for [SUIT utils](https://github.com/suitcss/utils/)

## Testing

Install [Node](http://nodejs.org) (comes with npm) and Bower.

From the repo root, install the project's development dependencies:

```
npm install
bower install
```

To run the CSS Lint tests:

```
npm test
```

Open `test.html` in a browser to ensure each visual test is passing.

## Browser support

* Google Chrome (latest)
* Opera (latest)
* Firefox 4+
* Safari 5+
* Internet Explorer 8+
