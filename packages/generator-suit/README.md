# SUIT package generator

[![Build Status](https://secure.travis-ci.org/suitcss/generator-suit.png?branch=master)](http://travis-ci.org/suitcss/generator-suit)

A [Yeoman](http://yeoman.io/) generator for
[SUIT](https://github.com/suitcss/suit) packages.


## Installation

Install [Node.js](http://nodejs.org/) (which comes with npm).

Then globally install this generator.

```
npm install -g generator-suit
```

Make a new directory, and `cd` into it:

```
mkdir suit-my-component && cd $_
```

Now scaffold out a SUIT package using the `yo` command (and optionally passing
a name for your module):

```
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
├── .travis.yml
├── CHANGELOG.md
├── LICENSE.md
├── README.md
├── bower.json
├── component.json
├── package.json
├── my-component.css
└── test.html
```
