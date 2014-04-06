# SUIT components

SUIT CSS is designed for styling reusable, composable components. The benefits
are most apparent in a system that considers components to be the building
blocks of your application.

Think of components as custom elements that enclose specific semantics,
styling, and behaviour. For example, this `Photo` component and configuration:

```html
<Photo src="photo.jpg" size="large" crop="circle">
  A photo of <a href="/barackobama">Barack Obama</a> in the Whitehouse.
</Photo>
```

could yield the following HTML:

```html
<article class="Photo Photo--sizeLarge">
  <a class="Photo-crop Photo-crop--circle" href="photo.jpg">
    <span class="Photo-icon">
      <span class="Icon Icon--zoom"></span>
    </span>
    <img class="Photo-img u-block" src="photo.jpg" alt="">
  </a>
  <div class="Photo-caption u-textBreak">
    A photo of <a href="/barackobama">Barack Obama</a> in the Whitehouse.
  </div>
</article>
```

SUIT helps to partially isolate the CSS used in the `Photo` component's
implementation. In doing so, it makes styling simpler by reducing the amount of
styling entanglement between components, and prevents styles from leaking
outside the component.

(Read about SUIT's [naming conventions](naming-conventions.md).)

## Component scope

The component's core class name (e.g., `ComponentName`) reserves a namespace
that can only be used by that component. This can be enforced using
[rework-suit-conformance](https://github.com/suitcss/rework-suit-conformance)
in your build process.

**All selectors in a component file must start with the component's
namespace**. For example, a component called `MyComponent` could have CSS like this,
where every selector starts with the string `MyComponent`.

```css
/** @define MyComponent */

.MyComponent { /* ... */ }
.MyComponent--large { /* ... */ }
.MyComponent-title { /* ... */ }
.MyComponent-image { /* ... */ }
.MyComponent-text { /* ... */ }
.MyComponent-time { /* ... */ }
```

Each class provides a hook to style specific elements within the HTML definition.

```html
<article class="MyComponent u-cf">
  <h1 class="MyComponent-title">{{title}}</h1>
  <img class="MyComponent-image" src="{{src}}" alt="">
  <p class="MyComponent-text">
    <span class="MyComponent-time">{{time}}</span>
    {{text}}
  </p>
</div>
```

Like classes, variables must also be scoped to their component by including the
component name in the variable name:

```css
/** @define MyComponent */

:root {
  var-border-width-MyComponent: 5px;
}

.MyComponent {
  border-width: var(border-width-MyComponent);
  /* ... */
}
```

This allows a theme to override the defaults if desired.

Avoid coupling or entangling components, even if that means the code is not as
DRY as you think it should be. Isolation is more important that reuse when it
comes to preventing avoidable complexity.

## One pattern, one component

**Each component should implement a single part of the UI**. Don't try to do
too much.

**Each component should have a dedicated CSS file**. Ideally your component's
files are grouped together in a dedicated directory.

## Documenting implementation details

Components must document their implementation. The CSS comments for a component
should seek to answer the following questions:

* What is the intended presentation?
* What are the modifiers and states?
* What are the reasons for specific, opaque property values.
* What are the known limitations?

## Adapting to ancestral context

**Most components should not set their own width, margin, and positioning.** By
authoring a component to be full-width or inline, it can better adapt to the
dimensions of an ancestral context.

## Nested components

**A component should wrap a nested component in an element.** This wrapping
element can be used to control dimensions, margins, and positioning of the
nested component _without directly modifying it_. Inheritable styles can also
be applied to this wrapper.

```css
/* Excerpt */

.Excerpt {
  /* ... */
}

/* Wraps nested `Button` component */

.Excerpt-wrapButton {
  display: inline-block;
  margin-top: 20px;
}
```

```html
<article class="Excerpt u-cf">
  {{! other implementation details }}

  <div class="Excerpt-wrapButton">
    <button class="Button Button--default" type="button">{{button_text}}</button>
  </div>
</article>
```

## Directly styling nested components

**Directly styling nested components causes entanglement, but is unavoidable in
some cases.** If you need to add custom styles directly to a nested component,
the preferred pattern is shown below. It scopes the changes to affect only
`Icon` components within the `Excerpt-wrapButton` part of the `Excerpt`
component.

```css
/* in component file for `Excerpt` */

.Excerpt-wrapButton .Icon {
  display: none;
}

.Excerpt-wrapButton:hover .Icon {
  display: block;
}
```
