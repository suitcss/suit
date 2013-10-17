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
* [ComponentName](#ComponentName)
* [ComponentName--modifierName](#ComponentName--modifierName)
* [ComponentName-descendantName](#ComponentName-descendantName)
* [ComponentName.is-stateOfComponent](#is-stateOfComponent)
* [v1-*](#media)
* [js-someName](#js-someName)


## [Utilities](utilities.md)

Low-level structural, positional, and visual traits. Utilities can be applied
directly to any element within a component.

Syntax: `u-<utilityName>`

<a name="u-utilityName"></a>
### u-utilityName

Utilities must use a camel case name. What follows is an example of how various
utilities can be used to create a simple layout.

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
### ComponentName.is-stateOfComponent

Use `is-stateName` for state-based modifications of components. The state name
must be Camel case. **Never style these classes directly; they should always be
used as an adjoining class.**

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


## Other

<a name="media-queries"></a>
### v[n]-utilityName or v[n]-ComponentName

To scope utility or component styles to a Media Query breakpoint, use a `v[n]`
class name prefix to denote which variant the utility is scoped to. For
example:

```html
<div class="v2-u-before1of4 v3-u-before1of3">...</div>
```

Also see the [SUIT grid layouts](https://github.com/suitcss/grid-layouts)
component.

<a name="js-someName"></a>
### js-someName

**CSS must not use `js-*` classes in selectors.**

Use the `id` attribute and `js-*` class names are reserved for JavaScript-only
use. Application-specific data or content can be stored in `data-*`
attributes.

The example below includes a dedicated JavaScript utility class to which
behaviour is bound. It is independent of any specific UI component.

```html
<a class="js-showProfile" data-username="necolas" href="{url}">...</a>
```
