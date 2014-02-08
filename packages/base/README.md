# SUIT base

Base styles for web applications. Provides a thin layer on top of
[Normalize.css](https://github.com/necolas/normalize.css). Removes default
margins and exposes variables for theming.

Read more about [SUIT's design principles](https://github.com/suitcss/suit/).

## Installation

* [Component(1)](http://component.io/): `component install suitcss/base`
* [Bower](http://bower.io/): `bower install --save suit-base`
* [Download](https://github.com/suitcss/base/releases): `suit-base.css`

## Configurable variables

* `var-base-background`: the application background style.
* `var-base-color`: the root text color.
* `var-base-font`: the root font style.
* `var-base-link-color`: the root link color.
* `var-base-link-hover-color`: the root link interaction (`:hover`, `:focus`,
  `:active`) color.

## Testing

Install [Node](http://nodejs.org) (comes with npm).

From the repo root, install the project's development dependencies:

```
make
```

To run the CSS Lint tests and build the front-end development bundle:

```
make test
```

Basic visual tests are in `test.html`.

## Browser support

* Google Chrome (latest)
* Opera (latest)
* Firefox 4+
* Safari 5+
* Internet Explorer 8+
