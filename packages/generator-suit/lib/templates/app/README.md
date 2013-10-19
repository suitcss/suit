# SUIT <%= moduleName %>

[![Build Status](https://secure.travis-ci.org/user/<%= modulePackageName %>.png?branch=master)](http://travis-ci.org/user/<%= modulePackageName %>)

A SUIT component for...

Read more about [SUIT's design principles](https://github.com/suitcss/suit/).

## Installation

* [Bower](http://bower.io/): `bower install --save <%= modulePackageName %>`
* [Component(1)](http://component.io/): `component install user/<%= modulePackageName %>`
* Download: [zip](https://github.com/user/<%= modulePackageName %>/zipball/master)
* Git: `git clone https://github.com/user/<%= modulePackageName %>.git`


## Available classes

* `<%= _.classify(moduleName) %>` - The core component class

## Usage

```html
<div class="<%= _.classify(moduleName) %>">

</div>
```

## Testing

Install [Node](http://nodejs.org) (comes with npm) and Bower.

From the repo root, install the project's development dependencies:

```
npm install
bower install
```

To run the CSS Lint tests:

```
npm test
```

Open `test.html` in a browser to ensure each visual test is passing.

## Browser support

* Google Chrome (latest)
* Opera (latest)
* Firefox 4+
* Safari 5+
* Internet Explorer 8+
