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

### Plugins

Utilities that can be limited to specific Media Query breakpoints.

* `v1-u-afterXofY` - To use at the first Media Query breakpoint.
* `v2-u-afterXofY` - To use at the second Media Query breakpoint.
* `v3-u-afterXofY` - To use at the third Media Query breakpoint.

## Usage

Please refer to the README for [SUIT utils](https://github.com/suitcss/utils/)

### Using the responsive plugins

During development, you can include the utilities in your CSS using the
`@import` directive in your main stylesheet. Include your custom Media Query
breakpoints here too. Your build step should take care of inlining these
imports for IE 8 testing and production.

Example:

```
@import "/bower_components/suit-utils-offset/offset.css";
@import "/bower_components/suit-utils-offset/offset-v1.css" (max-width: 25em);
@import "/bower_components/suit-utils-offset/offset-v2.css" (min-width: 25em) and (max-width: 50em);
@import "/bower_components/suit-utils-offset/offset-v3.css" (min-width: 50em);
```

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
