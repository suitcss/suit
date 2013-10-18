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
* `Grid-cell`: a child cell of `Grid` that wraps grid content
* `Grid--alignCenter`: center align all child `Grid-cell`
* `Grid--alignRight`: right align all child `Grid-cell`
* `Grid-cell--Center`: center an individual `Grid-cell`

## Use

A simple grid is easy to create. A grid container can have any number of child
cells. A cell can be styled to control its width and alignment at various
breakpoints. The [responsive dimension
utilities](https://github.com/suitcss/utils-dimension) are suggested.

```html
<div class="Grid [Grid--alignCenter|Grid--alignRight]">
    <div class="Grid-cell u-size1of2 v3-u-size6of12"></div>
    <div class="Grid-cell u-size1of2 v3-u-size4of12"></div>
    <div class="Grid-cell u-size1of3 v3-u-size2of12"></div>
    <div class="Grid-cell u-size1of3"></div>
</div>
```

The grid component includes no gutters by default. In your app's CSS, the
component can be extended with modifier classes for your gutter sizes and
alternative vertical alignments.

```css
/**
 * @requires suit-grid
 * ui/grid/grid.css
 */

/* Grid gutters: 20px */

.Grid--withGutter {
    margin: 0 -10px;
}

.Grid--withGutter > .Grid-cell {
    padding: 0 10px;
}

/* Middle align cells on the same row */

.Grid--alignMiddle .Grid-cell {
    vertical-align: middle;
}

/* Bottom align cells on the same row */

.Grid--alignBottom .Grid-cell {
    vertical-align: bottom;
}
```

## Testing

Install [Node](http://nodejs.org) (comes with npm).

From the repo root, install the project's development dependencies:

```
bower install
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
* Internet Explorer 9+
