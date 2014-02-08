# SUIT <%= _.classify(moduleName) %>

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

Install [Node](http://nodejs.org) (comes with npm).

```
npm install
```

To generate an un-preprocessed build (i.e., you want to use your own tooling and configure variables).

```
npm run build
```

To generate a standalone, preprocessed build.

```
npm run build-standalone
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
