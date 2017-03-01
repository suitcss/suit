'use strict';

const stylelint = require('stylelint');
const namespace = require('../../utils/namespace');

const ruleName = namespace('selector-root-no-composition');
const messages = stylelint.utils.ruleMessages(ruleName, {
  rejected: 'Unexpected composition',
});

function rule(actual) {
  return (root, result) => {
    const validOptions = stylelint.utils.validateOptions(result, ruleName, {actual});
    if (!validOptions) {
      return;
    }

    root.walkRules(rule => {
      if (rule.selector.toLowerCase().indexOf(':root') === -1 || rule.selector.toLowerCase().trim() === ':root') {
        return;
      }

      stylelint.utils.report({
        message: messages.rejected,
        node: rule,
        result,
        ruleName,
      });
    });
  };
}

rule.ruleName = ruleName;
rule.messages = messages;
module.exports = rule;
