# SUIT naming conventions

SUIT relies on _structured class names_ and _meaningful hyphens_ (i.e., not
used simply to separate words). This helps to work around the current limits of
applying CSS to the DOM (i.e., the lack of style encapsulation), and to better
communicate the relationships between classes.

Although the major architectural division is between
**[utilities](utilties.md)** and **[components](components.md)**, a layer
of finer separation of responsibilities is build upon it.

**Table of contents**

* [u-utilityName](#u-utilityName)
* [u-isStateName](#u-isStateName)
* [ComponentName](#ComponentName)
* [ComponentName--modifierName](#ComponentName--modifierName)
* [ComponentName-descendantName](#ComponentName-descendantName)
* [is-stateOfComponent](#is-stateOfComponent)
* [with-ComponentName](#with-ComponentName)
* [js-aName](#js-aName)


## [Utilities](utilities.md)

Low-level structural, positional, and visual traits. Utilities can be applied
directly to any element within a component.

Syntax: `u-[is]<utilityName>`

<a name="u-utilityName"></a>
### u-utilityName

General utilities must use a camel case name. What follows is an example of how
various utilities can be used to create a simple layout.

```html
<div class="u-cf"> <!-- contain floats -->
    <a class="u-objLeft" href="{url}"> <!-- float left with right margin -->
        <img class="u-block" src="{src}" alt=""> <!-- display block -->
    </a>
    <p class="u-sizeFill u-textBreak"> <!-- fill the remaining space; break long strings -->
        …
    </p>
</div>
```

Very occasionally, a utility will also need to apply styles to a descendant
element. The descendant is targetted using a class of the form:
`u-utilityName-descendantName`:

```html
<a class="u-linkComplex" href="{url}">
    <span class="u-linkComplex-target">Underline on hover.</span>
    No underline on hover.
</a>
```

<a name="u-isStateName"></a>
### u-isStateName

State utilities must start their name with `is`. They are subset of utilities,
focused on global state such as hiding elements.  Can be applied/removed with
JS to modify the UI.

```html
<span class="Icon Icon--save">
  <span class="u-isHiddenVisually">Save</span>
</span>
```

N.B. These must not be used for custom component-level states.


## [Components](components.md)

Components are UI patterns. They usually need to style multiple elements within
their HTML tree.

Syntax: `[<namespace>-]<ComponentName>[--modifierName|-descendantName]`

This has several benefits when writing CSS and reading HTML:

* It helps to distinguish classes for base components, modifiers of components,
  and child elements.
* It keeps the specificity of selectors low.
* It helps to decouple presentation semantics from document semantics.

### namespace (optional)

If necessary, components can be prefixed with a namespace. For example, you may
wish to avoid the potential for collisions between libraries and your custom
components by prefixing all your components with a namespace.

```css
.twt-Button { /* … */ }
.twt-Tabs { /* … */ }
```

This makes it clear, when reading the HTML, which components are part of your
library.

<a name="ComponentName"></a>
### ComponentName

The component's name must be written in pascal case. Nothing else in the
HTML/CSS uses pascal case.

```css
.MyComponent { /* … */ }
```

```html
<article class="MyComponent">
    …
</article>
```

<a name="ComponentName--modifierName"></a>
### ComponentName--modifierName

A component modifier is a class that modifies or extends the presentation of
the base component in some form. Modifier names must be written in camel case
and be separated from the component name by two hyphens. The class should be
included in the HTML _in addition_ to the base component class.

```css
/* Core button */
.Button { /* … */ }
/* Default button theme */
.Button--default { /* … */ }
```

```html
<button class="Button Button--default" type="button">…</button>
```

<a name="ComponentName-descendantName"></a>
### ComponentName-descendantName

A component descendant is a class that is attached to a descendant node of a
component. It's responsible for applying presentation directly to the
descendant on behalf of a particular component. Descendant names must be
written in camel case.

```html
<article class="Tweet">
    <header class="Tweet-header">
        <img class="Tweet-avatar" src="{{src}}" alt="{{alt}}">
        …
    </header>
    <div class="Tweet-body">
        …
    </div>
</article>
```

<a name="is-stateOfComponent"></a>
### is-stateOfComponent

Use `is-stateName` for state-based modifications of components. The state name
must be Camel case. **Never style these classes directly; they should always be
used as a chaining class.**

JS can add/remove these classes. This means that the same state names can be
used in multiple contexts, but every component must define its own styles for
the state (as they are scoped to the component).

```css
.Tweet { /* … */ }
.Tweet.is-expanded { /* … */ }
```

```html
<article class="Tweet is-expanded">
    …
</article>
```

<a name="with-ComponentName"></a>
### with-ComponentName

Use the `with-ComponentName` pattern to bundle styles that need to be mixed
into an element that hosts your component. The `with-*` pattern classes should
be standalone selectors, never styled as chained to a component. Treat it like
a mixin.

For example, the `with-Dropdown` class might include styles that are required
for the child `Dropdown` component to render as expected.

```css
/* The host element of a Dropdown always needs these styles */
.with-Dropdown { position: relative; }
```

```html
<article class="Tweet with-Dropdown">
    [other content]
    <div class="Dropdown is-closed">
        ...
    </div>
</article>
```

You can also prefix the full set of `ComponentName-*` class patterns if
necessary.


```css
/* tweet.css */

/* Provide ability to toggle Tweet actions visibile on hover of ancestor */
.with-Tweet-actions--toggleVisibility { visibility: hidden; }
.with-Tweet-actions--toggleVisibility:hover .Tweet-actions { visibility: visible; }
```

```html
<div class="Stream-item with-Tweet-actions--toggleVisibility">
    <article class="Tweet">
        [other content]
        <div class="Tweet-actions">
            ...
        </div>
    </article>
</div>
```

## Other

<a name="js-aName"></a>
### js-aName

JavaScript should only rely on `js-*` classes in selectors (unless they need to
be very general, e.g., `a`). _Never_ apply styles to `js-*` classes.

Use the `id` attribute and `js-*` class names for JavaScript hooks. You should
not select nodes in the DOM using selectors that are reserved for CSS. Data or
content can be stored in `data-*` attributes.

This Tweet component has a component-level state (expanding), a global-level
state (actionable), and a JavaScript-hook (toggle-expand).

```html
<div class="Tweet is-expanded u-isActionable js-toggleExpand">
    …
</div>
```
