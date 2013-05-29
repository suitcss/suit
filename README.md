# Suit

A collection of small, adaptive, structural CSS modules for building web UIs and custom toolkits.


## Installation

Recommended: install [Bower](http://bower.io/), then run this command in your project directory:

```
bower install --save suit
```

Alternative: (a download bundle will be available at some point)


## Official packages

Each package is stand-alone, contains its own documentation and tests, and is written to follow a common set of
[naming conventions and authoring practices](doc/overview.md). Dependencies are best
managed using [Bower](http://bower.io/) – a package manager for
the web.

**Utilities**:

* [All](https://github.com/necolas/suit-utils/)
* [Dimension](https://github.com/necolas/suit-utils-dimension/)
* [Display](https://github.com/necolas/suit-utils-display/)
* [Layout](https://github.com/necolas/suit-utils-layout/)
* [Link](https://github.com/necolas/suit-utils-link/)
* [Space](https://github.com/necolas/suit-utils-space/)
* [State](https://github.com/necolas/suit-utils-state/)
* [Text](https://github.com/necolas/suit-utils-text/)

**Components**:

* [Arrange](https://github.com/necolas/suit-arrange/)
* [Button](https://github.com/necolas/suit-button/)
* [Button group](https://github.com/necolas/suit-button-group/)
* [Flexible embeds](https://github.com/necolas/suit-flex-embed/)
* [Grid](https://github.com/necolas/suit-grid/)
* [Grid Layouts](https://github.com/necolas/suit-grid-layouts/)

**Themes**:

* (soon)


## Features

**[Read about the design decisions and authoring principles of Suit](doc)**.

* Highly modular; each module is individually versioned.
* Provides common, low-level utility classes.
* Provides common structural UI patterns.
* Responsive grid.
* Consistent class name conventions.
* Work more with HTML than CSS.
* Theme-independence.
* Designed for large web sites and applications.
* Easy to build your application's custom toolkit on top of Suit.
* Very small footprint.


## Why?

* Monolithic UI frameworks don't make it easy to use, share, and version
  specific UI traits and components.
* Complex applications need to loosely couple content, document semantics, and
  presentational structure to make it easier to change any layer while minimizing the
  impact on other layers.
* Complex applications need to clearly surface and scope the relationship
  between all HTML classes (and their attached styles and behaviour).
* Complex applications can accumulate technical debt when components are not
  kept independent of one-another, or the dependencies aren't clear.


## How?

* Build progressive enhancement into the UI layers themselves. Use low-level
  utilities to build up a skeleton UI.
* Codify the separation of responsibilities by using structured class names
  that reflect different purposes and relationships.
* Provide clear, constrained, and explicit authoring principles.
* Use multiple classes in HTML templates to combine styles.
* Organize discrete UI features into small, standalone packages / files.


## Browser support

* Google Chrome (latest)
* Opera (latest)
* Firefox 4+
* Safari 5+
* Internet Explorer 8+
