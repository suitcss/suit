'use strict';

const stylelint = require('stylelint');
const isCustomProperty = require('../../utils/isCustomProperty');
const namespace = require('../../utils/namespace');

const ruleName = namespace('custom-property-no-outside-root');
const messages = stylelint.utils.ruleMessages(ruleName, {
  rejected: 'Unexpected custom property',
});

function rule(actual) {
  return function(root, result) {
    const validOptions = stylelint.utils.validateOptions(result, ruleName, {actual});
    if (!validOptions) {
      return;
    }

    root.walkRules(rule => {
      // Ignore rules whose selector is just `:root`
      if (rule.selector.toLowerCase().trim() === ':root') {
        return;
      }

      rule.walkDecls(decl => {
        if (!isCustomProperty(decl.prop)) {
          return;
        }
        stylelint.utils.report({
          message: messages.rejected,
          node: decl,
          result,
          ruleName,
        });
      });
    });
  };
}

rule.ruleName = ruleName;
rule.messages = messages;

module.exports = rule;
