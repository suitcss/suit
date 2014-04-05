# SUIT test

[![Build Status](https://secure.travis-ci.org/suitcss/components-test.png?branch=master)](http://travis-ci.org/suitcss/components-test)

SUIT CSS for a presentational test structure for visually testing other
components.

Read more about [SUIT's design principles](https://github.com/suitcss/suit/).

## Installation

* [Component(1)](http://component.io/): `component install suitcss/test`
* [npm](https://www.npmjs.org/package/suitcss-components-test): `npm install suitcss-components-test`
* [Bower](http://bower.io/): `bower install suit-components-test`
* Download: [zip](https://github.com/suitcss/test/zipball/master)

## Available classes

* `Test` - The core component class
* `Test-title` - The test title
* `Test-describe` - Describes a component configuration
* `Test-it` - Describes an expected outcome of a configuration
* `Test-run` - A specific context within which the component is tested

## Usage

This is an example of an idiomatic SUIT CSS test file:

```html
<!DOCTYPE html>
<meta charset="utf-8">
<title>ComponentName [component] - SUIT</title>
<link rel="stylesheet" href="build/build.css">
<style>
  #textWrapping {
    width: 300px;
  }

  #modifier-textWrapping {
    width: 300px;
  }
</style>

<div class="Test">
  <h1 class="Test-title">SUIT CSS: <a href="https://github.com/repo/component-name">ComponentName</a> component tests</h1>

  <h2 class="Test-describe">.ComponentName</h2>
  <h3 class="Test-it">renders</h3>
  <div class="Test-run" id="renders">
    <!-- component configuration 1 -->
  </div>
  <h3 class="Test-it">prevents text wrapping</h3>
  <div class="Test-run" id="textWrapping">
    <!-- component configuration 1 -->
  </div>

  <h2 class="Test-describe">.ComponentName--modifier</h2>
  <h3 class="Test-it">renders larger</h3>
  <div class="Test-run" id="modifier-larger">
    <!-- component configuration 2 -->
  </div>

  <h3 class="Test-it">allows text wrapping</h3>
  <div class="Test-run" id="modifier-textWrapping">
    <!-- component configuration 2 -->
  </div>
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
