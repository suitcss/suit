# SUIT utilities: dimension

[![Build Status](https://secure.travis-ci.org/suitcss/utils-dimension.png?branch=master)](http://travis-ci.org/suitcss/utils-dimension)

A SUIT collection of utility classes for low-level CSS dimension traits.

Read more about [SUIT's design principles](https://github.com/suitcss/suit/).

## Installation

* [Bower](http://bower.io/): `bower install --save suit-utils-dimension`
* [Component(1)](http://component.io/): `component install suitcss/utils-dimension`
* Download: [zip](https://github.com/suitcss/utils-dimension/zipball/master)
* Git: `git clone https://github.com/suitcss/utils-dimension.git`

## Available classes

* `u-sizeFit` - Make an element shrink wrap its content by floating left.
* `u-sizeFitAlt` - Make an element shrink wrap its content by floating right.
* `u-sizeFill` - Make an element fill the remaining space.
* `u-sizeFillAlt` - An alternative method to make an element fill the remaining space.
* `u-sizeFull` - Make an element the width of its parent.
* `u-sizeXofY` (numerous) - Specify the proportional width of an object.

`X` must be an integer less than `Y`.

`Y` can be any of the following numbers: 2, 3, 4, 5, 6, 8, 10, 12.

### Plugins

Utilities that can be limited to specific Media Query breakpoints.

* `v1-u-sizeXofY` - To use at the first Media Query breakpoint.
* `v2-u-sizeXofY` - To use at the second Media Query breakpoint.
* `v3-u-sizeXofY` - To use at the third Media Query breakpoint.
* etc.

## Usage

Please refer to the README for [SUIT utils](https://github.com/suitcss/utils/)

### Using the responsive plugins

During development, you can include the utilities in your CSS using the
`@import` directive in your main stylesheet. Include your custom Media Query
breakpoints here too. Your build step should take care of inlining these
imports for IE 8 testing and production.

It's suggested that you use mutually exclusive breakpoints to avoid different
responsive utilities from taking effect at the same time.

Example:

```
@import "/bower_components/suit-utils-dimension/dimension.css";
@import "/bower_components/suit-utils-dimension/dimension-v1.css" (max-width: 25em);
@import "/bower_components/suit-utils-dimension/dimension-v2.css" (min-width: 25em) and (max-width: 50em);
@import "/bower_components/suit-utils-dimension/dimension-v3.css" (min-width: 50em);
```

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
