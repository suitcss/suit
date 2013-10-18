# SUIT

An HTML/CSS framework for creating loosely coupled UI components.

SUIT also provides a collection of small, adaptive, structural HTML/CSS modules
built using a naming convention inspired by the BEM methodology.

**[Documentation](doc/README.md)**.


## Installation

Recommended: install [Bower](http://bower.io/), then run this command in your
project directory:

```
bower install --save suit
```

Alternative: (a download bundle will be available at some point)


## Features

* Very small footprint.
* Scoped components.
* Individually versioned modules.
* Consistent class name conventions.
* Develop components independently of their context (mitigates rule-order
  issues).
* Provides common, utility classes.
* Testing friendly.
* Responsive friendly.
* Work more with HTML than CSS.
* Theme-independence.
* Designed for teams working on large, changing web sites and applications.
* Easy to extend and build upon.


## Official packages

Each package is stand-alone, contains its own documentation and tests, and is
written to follow a common set of [naming
conventions](doc/naming-conventions.md). Dependencies are best managed using
[Bower](http://bower.io/) – a package manager for the web.

* [Base](https://github.com/suitcss/base/)

**Utilities**:

* [All](https://github.com/suitcss/utils/)
* [Dimension](https://github.com/suitcss/utils-dimension/)
* [Display](https://github.com/suitcss/utils-display/)
* [Layout](https://github.com/suitcss/utils-layout/)
* [Link](https://github.com/suitcss/utils-link/)
* [Offset](https://github.com/suitcss/utils-offset/)
* [Space](https://github.com/suitcss/utils-space/)
* [State](https://github.com/suitcss/utils-state/)
* [Text](https://github.com/suitcss/utils-text/)

**Components**:

* [Arrange](https://github.com/suitcss/arrange/)
* [Button](https://github.com/suitcss/button/)
* [Button group](https://github.com/suitcss/button-group/)
* [Flexible embeds](https://github.com/suitcss/flex-embed/)
* [Form](https://github.com/suitcss/form/)
* [Grid](https://github.com/suitcss/grid/)
* [Grid Layouts](https://github.com/suitcss/grid-layouts/)
* [Table](https://github.com/suitcss/table/)

N.B. There is a [Yeoman generator for creating SUIT component
packages](https://github.com/suitcss/generator-suit).


## Example

HTML:

```html
<article class="Excerpt u-cf">
    <img class="Excerpt-thumbnail u-sizeFit" src="{{src}}" alt="">
    <div class="u-sizeFill">
        <h1 class="Excerpt-title u-h3"><a href="{{url}}">{{title}}</a></h1>
        <p class="Excerpt-text">{{description}}</p>
        <span class="Excerpt-readMore">
            <a class="Button Button--secondary">{{button_text}}</a>
        </span>
    </div>
</article>
```

CSS:

```css
/**
 * Excerpt component
 *
 * @require u-cf
 * @require u-sizeFit
 * @require u-sizeFill
 *
 * <article class="Excerpt u-cf">
 *     <img class="Excerpt-thumbnail u-sizeFit" src="{{src}}" alt="">
 *     <div class="u-sizeFill">
 *         <h1 class="Excerpt-title u-h3">{{title}}</h1>
 *         <p class="Excerpt-text">{{description}}</p>
 *         <span class="Excerpt-readMore">
 *             <a class="Button Button--secondary">{{button_text}}</a>
 *         </span>
 *     </div>
 * </article>
 */

.Excerpt {
    line-height: 1.2857em;
}

.Excerpt-thumbnail {
    border: 2px solid #000;
    border-radius: 3px;
    margin-right: 10px;
}

.Excerpt-title {
    border-bottom: 1px solid #ccc;
    margin: 0 0 15px;
    padding-bottom: 5px;
}

.Excerpt-readMore {
    display: inline-block;
    margin-top: 10px;
}
```


## Suggested tooling

* [autoprefixer](https://github.com/ai/autoprefixer)
* [csslint](https://github.com/stubbornella/csslint)
* [html-inspector](https://github.com/philipwalton/html-inspector)
* [generator-suit](https://github.com/suitcss/generator-suit)
* [rework](https://github.com/visionmedia/rework)


## Browser support

* Google Chrome (latest)
* Opera (latest)
* Firefox 4+
* Safari 5+
* Internet Explorer 8+
