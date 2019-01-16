'use strict';

const getStyle = require('computed-style');
const test = require('tape-css')(require('tape'));
const styles = require('../fixtures/encapsulation.out.css');

const dom = (() => {
  const container = document.createElement('div');
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
})();

test(
  'Encapsulated Component\'s Root',
  {
    dom,
    styles
  },
  is => {
    const parent = dom.querySelector('.Component');
    const root = dom.querySelector('.Encapsulation');
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
    dom,
    styles
  },
  is => {
    const descendant = dom.querySelector('.Encapsulation-descendant');
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
