# SUIT design principles

SUIT aims to loosely couple document semantics, presentation, and behaviour so
as to be able to modify any one of them with minimal impact on the others. SUIT
is a framework that is philosophically opposed to the creation of a monolithic
library or toolkit.

SUIT's conventions and approach are an attempt to meet the following design goals:

1. [Single responsibility principle](#single-responsibility-principle)
2. [Extension over direct modification](#extension)
3. [Composition over inheritance](#composition)
4. [Low coupling](#low-coupling)
5. [Encapsulation](#encapsulation)
6. [Documentation](#documentation)

The implementation is supported by the use of contemporary web development
tools: templating engines, build tools, and the [Bower](http://bower.io/)
package manager.


<a name="single-responsibility-principle"></a>
## Single responsibility principle

Each module should have only a single responsibility that it encapsulates.
Avoid coupling structural (e.g., `position`) and thematic (e.g., `color`)
properties in a single rule. CSS rules should have a high cohesion.


<a name="extension"></a>
## Extension over direct modification

Use additional classes (applied directly to the element that is an instance of
the base component) to extend or overwrite the base styles of a module. Avoid
directly modifying the base classes unless it is to fix a bug.

Limit the total visual variation within a component. Modifier classes should
not radically change the component or require the consumer of the component to
change their expectations of how it will function.


<a name="composition"></a>
## Composition over inheritance

Solve specific problems in isolation and compose them into more a complete UI
feature.

CSS should work more like a design pattern library in code. If you have to
write new CSS to do something similar to what has already been done in several
places, then you're having to reimplement that pattern each time. This leads to
excess code and divergent implementations of the same pattern.

Composition takes place in the HTML. In general, look to apply classes directly
to the elements you want to style.


<a name="coupling"></a>
## Low coupling

Prefer multiple, specific modules over a single, generic one. This helps to
avoid tight coupling between unrelated modules, making it easier to make
changes without inadvertantly affecting other modules.

Avoid creating components that attempt to do too much. Smaller, more specific
components are preferred.

Don't couple your styles to particular DOM elements or to a particular DOM
structure (i.e., specific siblings, or a reliance on a node always being a
child of a component).


<a name="encapsulation"></a>
## Encapsulation

The UI of complex applications becomes increasingly difficult to reason about
when there is no effort made to keep components independent of one-another.

Strongly avoid reaching into components from their ancestral or sibling
context. Strongly avoid leaking styles downstream into nested components.

Components should not have to know about the existence or appearance of their
descendent components, as long as they don't break the layout of the parent
component.


<a name="documentation"></a>
## Documentation

Write small, independent modules that are heavily commented to describe how the
module should be used, and why specific CSS properties are needed in the
implementation. Do not assume that CSS is self-documenting.


## Related reading

* [About HTML semantics and front-end architecture](http://nicolasgallagher.com/about-html-semantics-front-end-architecture/)
* [SOLID CSS](http://blog.millermedeiros.com/solid-css/)
