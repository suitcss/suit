# SUIT design principles

CSS for building self-contained, composable, configurable UI components.

SUIT's conventions and approach are an attempt statisfy the following system
design characteristics:

1. [Single responsibility principle](#single-responsibility-principle)
2. [Extension over direct modification](#extension)
3. [Composition over inheritance](#composition)
4. [Low coupling](#low-coupling)
5. [Soft encapsulation](#encapsulation)
6. [Documentation](#documentation)

<a name="single-responsibility-principle"></a>
## Single responsibility principle

Each component should have a single responsibility. It should provide HTML,
CSS, JavaScript, and associated assets without making assumptions about the
outer rendering context.

<a name="extension"></a>
## Extension over direct modification

Extending a component's presentation – which additional classes – is preferred
to making direct modifications to selectors that it has defined for itself.
This helps limit local complexity.

Limit the total visual variation within a component. Modifier classes should
not radically change the component or require the consumer of the component to
change their expectations of how it will function.

<a name="composition"></a>
## Composition over inheritance

Composability is concerned with the inter-relationships of components.
Composable systems have components that can be assembled in various
combinations, as required.

<a name="coupling"></a>
## Low coupling

In general, look to apply classes directly
to the elements you want to style.

Don't couple your styles to particular DOM elements or to a particular DOM
structure (i.e., specific siblings, or a reliance on a node always being a
child of a component). Directly apply styles to elements using styles whenever
possible.

<a name="encapsulation"></a>
## Soft encapsulation

Complexity is a significant problem for large, adaptive applications. The more
you can reduce the entanglement of your components, the easier it is to reason
about the system.

Therefore, you should strongly avoid attempting to reuse too much code across
components. Prefer isolation over avoiding repetition of low-level
presentation.

Components should not have to know about the existence or appearance of their
children (that aren't explicit dependencies of the components, and considered
part of their implementation).

Strongly avoid leaking styles downstream into nested components.

<a name="documentation"></a>
## Documentation

Write small, independent components that are heavily commented to describe how
the components should be used, and why specific CSS properties are needed in
the implementation. Do not assume that CSS is self-documenting.

## Related reading

* [About HTML semantics and front-end architecture](http://nicolasgallagher.com/about-html-semantics-front-end-architecture/)
* [SOLID CSS](http://blog.millermedeiros.com/solid-css/)
