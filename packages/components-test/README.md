# SUIT CSS components-test

[![Build Status](https://travis-ci.org/suitcss/components-test.svg?branch=master)](https://travis-ci.org/suitcss/components-test)

CSS to help test the visual presentation of components.

Read more about [SUIT CSS](https://github.com/suitcss/suit/).

## Installation

* [npm](https://www.npmjs.org/package/suitcss-components-test): `npm install suitcss-components-test`
* Download: [zip](https://github.com/suitcss/components-test/releases/latest)

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
<title>ComponentName [component] - SUIT CSS</title>
<meta name="viewport" content="initial-scale=1,width=device-width">
<link rel="stylesheet" href="../build/test.css">
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

To generate a build:

```
npm run build
```

To lint code with [postcss-bem-linter](https://github.com/postcss/postcss-bem-linter) and [stylelint](http://stylelint.io/)

```
npm run lint
```

To generate the testing build.

```
npm run build-test
```

To watch the files for making changes to test:

```
npm run watch
```

Basic visual tests are in `test/index.html`.

## Browser support

* Google Chrome (latest)
* Opera (latest)
* Firefox 4+
* Safari 5+
* Internet Explorer 8+
