# SUIT: Small HTML/CSS tools

SUIT is a collection of modular, combinable, and theme-agnostic HTML/CSS
packages. Each package is stand-alone and written to follow a common set of
naming conventions and authoring practices. Dependencies between HTML/CSS are
managed by [Bower](http://bower.io/) – a package manager for
the web – but packages can be manually combined.

SUIT is an approach to authoring HTML/CSS for large web applications. It is not
a monolithic or centralized HTML/CSS framework. You can build your own toolkit
on top of a curated set of SUIT packages.

SUIT splits CSS into 2 main layers: low-level utilities and higher-level
components. This distinction is made explicit by class name conventions.

**[Documentation](doc)**.

## Installation

Install [Bower](http://bower.io/), then run:

```
bower install --save suit
```

## Packages

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


## Why?

* Monolithic UI frameworks don't make it easy to use, share, and version
  specific UI traits and components.
* Complex applications need to loosely couple content, document semantics, and
  presentational structure to make it easier to change any layer with minimal
  impact on the others.
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


## Related resources

* [About HTML semantics and front-end architecture](http://nicolasgallagher.com/about-html-semantics-front-end-architecture/)
* [SOLID CSS](http://blog.millermedeiros.com/solid-css/)
* [Idiomatic CSS](https://github.com/necolas/idiomatic-css/)
* [Idiomatic HTML](https://github.com/necolas/idiomatic-html/)
