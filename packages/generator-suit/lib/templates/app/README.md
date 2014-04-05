# SUIT <%= _.classify(moduleName) %>

[![Build Status](https://secure.travis-ci.org/suitcss/<%= modulePackageName %>.png?branch=master)](http://travis-ci.org/suitcss/<%= modulePackageName %>)

A SUIT component for...

Read more about [SUIT's design principles](https://github.com/suitcss/suit/).

## Installation

* [Component(1)](http://component.io/): `component install suitcss/<%= modulePackageName %>`
* [npm](https://npmjs.org/): `npm install suitcss-<%= modulePackageName %>`
* [Bower](http://bower.io/): `bower install suit-<%= modulePackageName %>`
* Download: [zip](https://github.com/suitcss/<%= modulePackageName %>/zipball/master)

## Available classes

* `<%= _.classify(moduleName) %>` - The core component class

## Configurable variables

* ...

## Usage

```html
<div class="<%= _.classify(moduleName) %>">

</div>
```

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

* Google Chrome (latest)
* Opera (latest)
* Firefox 4+
* Safari 5+
* Internet Explorer 8+
