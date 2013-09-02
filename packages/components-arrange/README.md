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
* `Arrange--middle` - The modifier class for middle-aligned cells
* `Arrange--bottom` - The modifier class for bottom-aligned cells
* `Arrange--equal` - The modifier class for equal-width cells
* `Arrange--withGutter` - The modifier class for a 10px inter-cell gutter
* `Arrange-sizeFit` - The child class for cells to snap to fit their content
* `Arrange-sizeFill` - the child class for cells to expand to fill the remaining space

## Usage

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
        <button class="Button Button--full">Reply</button>
    </li>
    <li class="Arrange-sizeFill">
        <button class="Button Button--full">Like</button>
    </li>
    <li class="Arrange-sizeFill">
        <button class="Button Button--full">Save</button>
    </li>
    <li class="Arrange-sizeFill">
        <button class="Button Button--full">Remove</button>
    </li>
</ul>
```

If you want to change the default gutter associated with the
`Arrange--withGutter` modifier, you can do so in your application-level
stylesheet:

```css
.Arrange--withGutter > .Arrange-sizeFill,
.Arrange--withGutter > .Arrange-sizeFit {
    padding-left: 20px; /* increase padding */
}
```

For complete examples of the markup needed to create various layouts, please
refer to the `test.html` file.

N.B. This component affects the width of images in cells.

## Testing

Install [Node](http://nodejs.org) (comes with npm) and Bower.

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
