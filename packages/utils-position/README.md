# SUIT CSS utilities: position

[![Build Status](https://travis-ci.org/suitcss/utils-position.svg?branch=master)](https://travis-ci.org/suitcss/utils-position)

SUIT CSS utility classes for positioning.

Read more about [SUIT CSS's design principles](https://github.com/suitcss/suit/).

## Installation

* [npm](http://npmjs.org/): `npm install suitcss-utils-position`
* Download: [zip](https://github.com/suitcss/utils-position/releases/latest)

## Available classes

* `u-posAbsolute` - Absolutely position an element.
* `u-posAbsoluteCenter` - Absolutely position and centre an element.
* `u-posFit` - Fit an element to the dimensions of its parent
* `u-posFullScreen` - Fixes an element over the viewport
* `u-posFixed` - Fixed position an element.
* `u-posFixedCenter` - Fix an element in the centre of the viewport
* `u-posRelative` - Relatively position an element.
* `u-posStatic` - Static position an element.

## Usage

### Creating a dialog overlay

``` html
<div role="dialog" class="Dialog u-posFixedCenter">
  <img src="{src}" alt="" />
</div>
<div class="Cover u-posFullScreen"></div>
```

[Demo](http://codepen.io/simonsmith/pen/qbGaPK)

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
* Internet Explorer 9+
* Android 2.3+
* iOS 5.1+
* Windows Phone 8.1
