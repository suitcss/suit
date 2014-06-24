# SUIT CSS design principles

SUIT CSS is a methodology focused on making CSS better to work within
component-based development.

A component-based system allows for the implementation and composition of
loosely coupled, independent units into well-defined composite objects.
Components are encapsulated but are able to interoperate via interfaces/events.

1. [Modularity](#modularity)
2. [Cohesion](#cohesion)
3. [Composition and configuration](#composition)
4. [Loose coupling](#coupling)
5. [Soft encapsulation](#encapsulation)
6. [Documentation](#documentation)

<a name="modularity"></a>
## Modularity

Each component should have a single focus and contain everything necessary to
realise a specific part of the UI. Components may contain HTML,
CSS, JavaScript, and associated assets without making assumptions about the
outer rendering context.

<a name="cohesion"></a>
## Cohesion

All the functionalities and presentations inside each component are semantically
related. Components do not have direct influence over each other.

<a name="composition"></a>
## Composable and configurable

Composability is concerned with the inter-relationships of components.
Composable systems have components that can be assembled in various
combinations, as required.

Configuration is done via interfaces that are provided and used by components.

<a name="coupling"></a>
## Loose coupling

Components should not directly modify the presentation or behaviour of their
dependencies. Relying on interfaces and events for inter-component
communication results in a loose coupling.

Attempting to reuse too much code across components can increase their
coupling. Isolation is more important than avoiding the repetition of
superficially similar code.

<a name="encapsulation"></a>
## Soft encapsulation

The implementation of a component should not be exposed to other components.
For example: your component should not leak styles into the HTML tree fragments
of other components; a component's HTML should not be directly included in the
HTML for another component.

Complexity is a significant problem for large, adaptive applications. The more
you can reduce the entanglement of your components, the easier it is to reason
about the system.

<a name="documentation"></a>
## Documentation

Write small, independent components that are well documented to describe how
the components should be used, and why specific CSS properties are needed in
the implementation. Do not assume that CSS is self-documenting.

## Related reading

* [About HTML semantics and front-end architecture](http://nicolasgallagher.com/about-html-semantics-front-end-architecture/)
* [Cohesion](http://en.wikipedia.org/wiki/Cohesion_(computer_science))
* [Component-based software engineering](http://en.wikipedia.org/wiki/Component-based_software_engineering)
* [Encapsulation](http://en.wikipedia.org/wiki/Encapsulation_(object-oriented_programming))
* [Functional programming](http://en.wikipedia.org/wiki/Functional_programming)
* [Single responsibility principle](http://en.wikipedia.org/wiki/Single_responsibility_principle)
* [SOLID CSS](http://blog.millermedeiros.com/solid-css/)
