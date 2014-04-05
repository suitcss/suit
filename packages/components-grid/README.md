# SUIT grid

[![Build Status](https://secure.travis-ci.org/suitcss/grid.png?branch=master)](http://travis-ci.org/suitcss/grid)

A SUIT component for a CSS grid. The grid makes use of `inline-block` and
`box-sizing` to provide features that float-based layouts cannot.

N.B. This component relies on particular dimensions being applied to cells in
the grid via other classes. For example, [SUIT
dimensions](https://github.com/suitcss/utils-dimensions/) or the [SUIT
Grid Layouts](https://github.com/suitcss/grid-layouts/) extension.

Read more about [SUIT](https://github.com/suitcss/suit/).

## Installation

* [Bower](http://bower.io/): `bower install --save suit-grid`
* [Component(1)](http://component.io/): `component install suitcss/grid`
* Download: [zip](https://github.com/suitcss/grid/zipball/master)
* Git: `git clone https://github.com/suitcss/grid`

## Features

* Fluid layout.
* Intelligent cell wrapping.
* Horizontal centering of cells.
* Custom vertical alignment of cells (top, bottom, or middle).
* Cell width is controlled independently of grid gutter.
* Infinite nesting.
* Built-in redundancy.

## Available classes

* `Grid`: core component
* `Grid--alignCenter`: center-align all child `Grid-cell`
* `Grid--alignRight`: right-align all child `Grid-cell`
* `Grid--alignMiddle`: middle-align all child `Grid-cell`
* `Grid--alignBottom`: bottom-align all child `Grid-cell`
* `Grid-cell`: a child cell of `Grid` that wraps grid content
* `Grid-cell--center`: center an individual `Grid-cell`

## Use

A simple grid is easy to create. A grid container can have any number of child
cells.

```html
<div class="Grid [Grid--alignCenter|Grid--alignRight|Grid--alignMiddle|Grid--alignBottom]">
    <div class="Grid-cell u-size1of2 v3-u-size6of12"></div>
    <div class="Grid-cell u-size1of2 v3-u-size4of12"></div>
    <div class="Grid-cell u-size1of3 v3-u-size2of12"></div>
    <div class="Grid-cell u-size1of3"></div>
</div>
```

### Adding gutters

The grid component includes no gutters by default. In your app's CSS, the
component can be extended with modifier classes for your gutter sizes.

```css
/**
 * @requires suit-grid
 * ui/grid/grid.css
 */

/**
 * Grid gutters: 20px
 * NOTE: this can trigger a horizontal scrollbar if the component is as wide as
 * the viewport. Use padding on a container, or `overflow-x:hidden` to protect
 * against it.
 */

.Grid--withGutter {
    margin: 0 -10px;
}

.Grid--withGutter > .Grid-cell {
    padding: 0 10px;
}
```

### Widths and offsets

Cell widths and offsets can be controlled using the [responsive dimension
utilities](https://github.com/suitcss/utils-dimension) and [responsive offset
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
utilities, but keep in mind that the the dimensions will be relative to the
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
* Internet Explorer 9+
