# SUIT base

Base styles for web applications. Provides a thin layer on top of
[Normalize.css](https://github.com/necolas/normalize.css). Removes default
margins and exposes variables for theming.

Read more about how to use [SUIT](https://github.com/suitcss/suit/).

## Installation

* [Component(1)](http://github.com/component/component): `component install suitcss/base`
* [Bower](http://bower.io/): `bower install suit-base`
* [npm](http://npmjs.org/): `npm install suitcss-base`
* [Download](https://github.com/suitcss/base/releases)

## Configurable variables

* `var-background-base`: the application background style.
* `var-color-base`: the root text color.
* `var-font-base`: the root font style.
* `var-link-color-base`: the root link color.
* `var-link-color-hover-base`: the root link interaction (`:hover`, `:focus`,
  `:active`) color.

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

* Google Chrome
* Firefox
* Safari
* Opera
* Internet Explorer 8+
