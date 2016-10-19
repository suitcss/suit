var getStyle = require('computed-style');
var test = require('tape-css')(require('tape'));
var styles = require('../fixtures/encapsulation.out.css');

var dom = (function () {
  var container = document.createElement('div');
  container.innerHTML = `
    <div class="Component" style="font-size: 30px">
      <div class="Component-item">
        <div class="Encapsulation" style="color: red">
          <div class="Encapsulation-descendant">
          </div>
        </div>
      </div>
    </div>
  `;
  return container;
}());

test(
  'Encapsulated Component\'s Root',
  {
    dom: dom,
    styles: styles
  },
  function (is) {
    var parent = dom.querySelector('.Component');
    var root = dom.querySelector('.Encapsulation');
    is.notEqual(
      getStyle(root, 'font-size'),
      getStyle(parent, 'font-size'),
      'shouldn\'t inherit from the parent scope'
    );

    is.equal(
      getStyle(root, 'width'),
      '50px',
      'can define own styles'
    );
    is.end();
  }
);

test(
  'Encapsulated Descendant',
  {
    dom: dom,
    styles: styles
  },
  function (is) {
    var descendant = dom.querySelector('.Encapsulation-descendant');
    is.equal(
      getStyle(descendant, 'color'),
      'rgb(255, 0, 0)',
      'should inherit from the Component scope'
    );

    is.equal(
      getStyle(descendant, 'background-color'),
      'rgb(238, 238, 238)',
      'can define own styles'
    );
    is.end();
  }
);
