# SUIT base

A thin layer on top of normalize.css that removes space from typographic and
form elements. This provides a more practical base for web applications.

Read more about [SUIT's design principles](https://github.com/suitcss/suit/).

## Installation

* [Bower](http://bower.io/): `bower install --save suit-base`
* [Component(1)](http://component.io/): `component install suitcss/base`
* Download: [zip](https://github.com/suitcss/suit-base/zipball/master)
* Git: `git clone https://github.com/suitcss/suit-base.git`

## Usage

Apply after `normalize.css` and before other CSS.


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
