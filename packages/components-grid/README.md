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

## Use

A simple grid is easy to create. A grid container can have any number of cells.
Each cell can be directly or indirectly styled to control their width and
alignment.

```html
<div class="Grid">
    <div class="Grid-cell u-size1of2"></div>
    <div class="Grid-cell u-size1of2"></div>
    <div class="Grid-cell u-size1of3"></div>
    <div class="Grid-cell u-size1of3"></div>
</div>
```

All cells within a grid can be centered by adding the `Grid--center` class to
the grid container:

```html
<div class="Grid Grid--center">
    <div class="Grid-cell u-size1of3"></div>
    <div class="Grid-cell u-size1of3"></div>
</div>
```

Or individual cells can be centered on their own line by adding the
`Grid-cell--center` class to a cell:

```html
<div class="Grid">
    <div class="Grid-cell u-size1of2"></div>
    <div class="Grid-cell u-size1of2"></div>
    <div class="Grid-cell Grid-cell--center u-size3of4"></div>
</div>
```

The core grid component includes no gutters by default.

You may want to create a modifier class, or use a skin that adds gutters to the
grid. This is one technique to create gutters:

```css
/* Grid gutters: 10px */

.Grid {
    margin: 0 0 0 -10px;
}

.Grid-cell {
    padding: 0 0 0 10px;
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
* Internet Explorer 8+
