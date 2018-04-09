'use strict';

const test = require('ava');
const find = require('lodash.find');
const rule = require('./');

test('root-no-standard-properties should exist', t => {
  t.truthy(find(rule, {ruleName: 'suitcss/root-no-standard-properties'}));
});

test('selector-root-no-composition should exist', t => {
  t.truthy(find(rule, {ruleName: 'suitcss/selector-root-no-composition'}));
});

test('custom-property-no-outside-root should exist', t => {
  t.truthy(find(rule, {ruleName: 'suitcss/custom-property-no-outside-root'}));
});
