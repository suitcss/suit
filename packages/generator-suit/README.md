# generator-suit [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> SUIT package generator

A [Yeoman](http://yeoman.io/) generator for
[SUIT](https://github.com/suitcss/suit) packages.

## Installation

First, install [Yeoman](http://yeoman.io) and generator-suit using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-suit
```

Make a new directory, and `cd` into it:

```
mkdir suit-my-component && cd $_
```

Now scaffold out a SUIT package using the `yo` command (and optionally passing
a name for your module):

```bash
yo suit my-component
```

## Generator

Generates the boilerplate you need for a simple SUIT component.

Example:

```
yo suit my-component
```

Produces:

```
.
├── .gitignore
├── .stylelintrc
├── .travis.yml
├── CHANGELOG.md
├── index.css
├── LICENSE.md
├── package.json
├── README.md
├── lib/my-component.css
├── test/config.json
├── test/index.html
└── test/test.css
```

## License

MIT


[npm-image]: https://badge.fury.io/js/generator-suit.svg
[npm-url]: https://npmjs.org/package/generator-suit
[travis-image]: https://travis-ci.org/suitcss/generator-suit.svg?branch=master
[travis-url]: https://travis-ci.org/suitcss/generator-suit
[daviddm-image]: https://david-dm.org/suitcss/generator-suit.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/suitcss/generator-suit
