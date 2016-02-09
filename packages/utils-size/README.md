# SUIT CSS utilities: size

[![Build Status](https://travis-ci.org/suitcss/utils-size.svg?branch=master)](https://travis-ci.org/suitcss/utils-size)

SUIT CSS sizing utilities. Sets `width` and `flex-basis`.

Read more about [SUIT CSS's design principles](https://github.com/suitcss/suit/).

## Installation

* [npm](http://npmjs.org/): `npm install suitcss-utils-size`
* Download: [zip](https://github.com/suitcss/utils-size/releases/latest)

## Available classes

* `u-sizeFull` - Make an element the width of its parent.
* `u-sizeFill` - Make an element fill the remaining space. Distribute space evenly on multiple elements.
* `u-sizeFillAlt` - An alternative method to make an element fill the remaining space. Distribute space based on element width.
* `u-sizeXofY` (numerous) - Specify the proportional width of an object.

`X` must be an integer less than `Y`.

`Y` can be any of the following numbers: 2, 3, 4, 5, 6, 8, 10, 12.

### Plugins

Utilities that can be limited to specific Media Query breakpoints.

* `u-sm-sizeXofY` - To use at the smallest Media Query breakpoint.
* `u-md-sizeXofY` - To use at the medium Media Query breakpoint.
* `u-lg-sizeXofY` - To use at the largest Media Query breakpoint.

### Configuration

There are 3 Media Query breakpoints:

* `--sm-viewport`
* `--md-viewport`
* `--lg-viewport`

When using [postcss-custom-media](https://github.com/postcss/postcss-custom-media),
breakpoints can be configured using `@custom-media`. For example:

```css
@custom-media --sm-viewport (min-width:320px) and (max-width:640px);
@custom-media --md-viewport (min-width:640px) and (max-width:960px);
@custom-media --lg-viewport (min-width:960px);
```

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

To lint code with [postcss-bem-linter](https://github.com/postcss/postcss-bem-linter) and [stylelint](http://stylelint.io/)

```
npm run lint
```

To watch the files for making changes to test:

```
npm run watch
```

Basic visual tests are in `test/index.html`.

## Browser support

Refer to the [caniuse](http://caniuse.com/) page for [flexbox](http://caniuse.com/#feat=flexbox).
This package can still be used in older browsers if `width` is required

* Google Chrome (latest)
* Opera (latest)
* Firefox 28+
* Safari 6.1+
* Internet Explorer 10+
