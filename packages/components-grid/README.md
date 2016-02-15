# SUIT CSS components-grid

[![Build Status](https://travis-ci.org/suitcss/components-grid.svg?branch=master)](https://travis-ci.org/suitcss/components-grid)

A CSS grid component. The grid makes use of `flexbox` and `box-sizing` to
provide features that float-based layouts cannot.

N.B. This component relies on particular dimensions being applied to cells in
the grid via other classes. For example,
[suitcss-utils-size](https://github.com/suitcss/utils-size/).

Read more about [SUIT CSS](https://github.com/suitcss/suit/).

## Installation

* [npm](https://www.npmjs.org/package/suitcss-components-grid): `npm install suitcss-components-grid`
* Download: [zip](https://github.com/suitcss/components-grid/releases/latest)

## Features

* Fluid layout.
* Intelligent cell wrapping.
* Evenly fit cell spacing
* Equal height columns
* Horizontal centering of cells.
* Custom vertical alignment of cells (top, bottom, or middle).
* Cell width is controlled independently of grid gutter.
* Infinite nesting.

## Available classes

* `Grid`: core component
* `Grid--alignCenter`: center-align all child `Grid-cell`
* `Grid--alignRight`: right-align all child `Grid-cell`
* `Grid--alignMiddle`: middle-align all child `Grid-cell`
* `Grid--alignBottom`: bottom-align all child `Grid-cell`
* `Grid--fit`: evenly distribute space amongst all child `Grid-cell`
* `Grid--equalHeight`: all child `Grid-cell` match height of the tallest
* `Grid--withGutter`: adds a gutter between cells
* `Grid-cell`: a child cell of `Grid` that wraps grid content
* `Grid-cell--center`: center an individual `Grid-cell`

## Configurable variables

* `--Grid-gutter-size`: the width of the gutter applied by the `Grid--withGutter` modifier class.

## Use

A simple grid is easy to create. A grid container can have any number of child
cells. When used with `Grid--fit` space is evenly distributed without need for
sizing utilities.

```html
<div class="Grid Grid--fit Grid--withGutter">
  <div class="Grid-cell"></div>
  <div class="Grid-cell"></div>
  <div class="Grid-cell"></div>
  <div class="Grid-cell"></div>
</div>
```

For more granular control over layout make use of modifiers and sizing utilities.

```html
<div class="Grid [Grid--alignCenter|Grid--alignRight|Grid--alignMiddle|Grid--alignBottom|Grid--fit|Grid--equalHeight]">
  <div class="Grid-cell u-size1of2 u-lg-size6of12"></div>
  <div class="Grid-cell u-size1of2 u-lg-size4of12"></div>
  <div class="Grid-cell u-size1of3 u-lg-size2of12"></div>
  <div class="Grid-cell u-size1of3"></div>
</div>
```

### Widths and offsets

Cell widths and offsets can be controlled using the [responsive sizing
utilities](https://github.com/suitcss/utils-size) and [responsive offset
utilities](https://github.com/suitcss/utils-offset), respectively.

One limitation of creating grid gutters in the manner shown above is that it
prevents any offset utilities applied directly to the `Grid` component from
functioning as expected.

GOOD:

```html
<div class="Grid Grid--withGutter">
  <div class="Grid-cell u-size1of2 u-before1of4 u-after1of4">
    {{>partial}}
  </div>
</div>
```

BAD:

```html
<div class="Grid Grid--withGutter u-before1of4 u-after1of4">
  <div class="Grid-cell">
    {{>partial}}
  </div>
</div>
```

You can nest grids in any context, including one that uses dimension or offset
utilities, but keep in mind that the dimensions will be relative to the
grid's width, and not the width of the whole application.

```html
<div class="u-before1of4 u-after1of4">
  <div class="Grid Grid--withGutter">
    <div class="Grid-cell u-size1of2"> <!-- 50% of the width of the Grid -->
      {{>partial}}
    </div>
  </div>
</div>
```

## Testing

Install [Node](http://nodejs.org) (comes with npm).

```
npm install
```

To generate a build:

```
npm run build
```

To generate the testing build:

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
* Firefox 28+
* Safari 6.1+
* Internet Explorer 10+

Refer to the [caniuse](http://caniuse.com/) page for [flexbox](http://caniuse.com/#feat=flexbox)
