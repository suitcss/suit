# SUIT arrange

[![Build Status](https://secure.travis-ci.org/suitcss/arrange.png?branch=master)](http://travis-ci.org/suitcss/arrange)

A SUIT component for horizontally and vertically arranging a single row of
cells. Includes modifier classes for equal-width cells and gutter-separated
cells. Makes use of CSS table layout.

Read more about [SUIT's design principles](https://github.com/suitcss/suit/).

[Live test rendering](http://suitcss.github.io/arrange/test.html)

## Installation

* [Bower](http://bower.io/): `bower install --save suit-arrange`
* [Component(1)](http://component.io/): `component install suitcss/arrange`
* Download: [zip](https://github.com/suitcss/arrange/zipball/master)
* Git: `git clone https://github.com/suitcss/arrange.git`

## Available classes

* `Arrange` - The core component class
* `Arrange-sizeFit` - The child class for cells to snap to fit their content
* `Arrange-sizeFill` - The child class for cells to expand to fill the remaining space
* `Arrange--middle` - The modifier class for middle-aligned cells
* `Arrange--bottom` - The modifier class for bottom-aligned cells
* `Arrange--equal` - The modifier class for equal-width cells

## Usage

N.B. This component affects the width of images in cells.

Like many SUIT components, suit-arrange relies on a core component class
that is extended by additional modifier classes. This component works best for
small-scale UI layout, for example, image-content pairs:

```html
<div class="Arrange">
    <div class="Arrange-sizeFit">
        <img src="img.png" alt="">
    </div>
    <div class="Arrange-sizeFill">
        Nicolas Gallagher @necolas
        …
    </div>
</div>
```

Or for an equally spaced row of buttons or icons, etc.

```html
<ul class="Arrange Arrange--equal">
    <li class="Arrange-sizeFill">
        <button class="Button">Reply</button>
    </li>
    <li class="Arrange-sizeFill">
        <button class="Button">Like</button>
    </li>
    <li class="Arrange-sizeFill">
        <button class="Button">Save</button>
    </li>
    <li class="Arrange-sizeFill">
        <button class="Button">Remove</button>
    </li>
</ul>
```

### Adding gutters

The grid component includes no gutters by default. In your app's CSS, the
component can be extended with modifier classes for your gutter sizes.

```css
/**
 * @requires suit-arrange
 */

/**
 * Arrange gutters: 20px
 * NOTE: this can trigger a horizontal scrollbar if the component is as wide as
 * the viewport. Use padding on a container, or `overflow-x:hidden` to protect
 * against it.
 */

.Arrange--withGutter {
    margin: 0 -10px;
}

.Arrange--withGutter > .Arrange-sizeFit,
.Arrange--withGutter > .Arrange-sizeFill {
    padding: 0 10px;
}
```

## Testing

Install [Node](http://nodejs.org) (comes with npm). It's recommended that you
also globally install [Component(1)](http://component.io): `npm install -g
component`.

From the repo root, install the project's development dependencies:

```
make
```

To run the CSS Lint tests and build the front-end development bundle:

```
make test
```

Visual tests are in `test.html`.

## Browser support

* Google Chrome (latest)
* Opera (latest)
* Firefox 4+
* Safari 5+
* Internet Explorer 8+
