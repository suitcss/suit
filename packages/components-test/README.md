# SUIT test

[![Build Status](https://secure.travis-ci.org/suitcss/test.png?branch=master)](http://travis-ci.org/suitcss/test)

A SUIT component that provides a test structure for visually testing other
components.

Read more about [SUIT's design principles](https://github.com/suitcss/suit/).

## Installation

* [Bower](http://bower.io/): `bower install --save suit-test`
* [Component(1)](http://component.io/): `component install suitcss/test`
* Download: [zip](https://github.com/suitcss/test/zipball/master)
* Git: `git clone https://github.com/suitcss/test.git`


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
<link rel="stylesheet" href="bower_components/suit-test/test.css">
<link rel="stylesheet" href="component-name.css">
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
