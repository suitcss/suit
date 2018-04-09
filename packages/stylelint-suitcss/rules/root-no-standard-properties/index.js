'use strict';

const stylelint = require('stylelint');
const isCustomProperty = require('../../utils/isCustomProperty');
const isStandardSyntaxProperty = require('../../utils/isStandardSyntaxProperty');
const parseSelector = require('../../utils/parseSelector');
const namespace = require('../../utils/namespace');

const ruleName = namespace('root-no-standard-properties');
const messages = stylelint.utils.ruleMessages(ruleName, {
  rejected: property => `Unexpected standard property "${property}"`,
});

const rule = function(actual) {
  return (root, result) => {
    const validOptions = stylelint.utils.validateOptions(result, ruleName, {actual});
    if (!validOptions) {
      return;
    }

    root.walkRules(rule => {
      if (rule.selector.toLowerCase().indexOf(':root') === -1) {
        return;
      }
      parseSelector(rule.selector, result, rule, checkSelector);

      function checkSelector(selectorAST) {
        if (ignoreRule(selectorAST)) {
          return;
        }

        rule.each(function(node) {
          if (node.type !== 'decl') {
            return;
          }

          const prop = node.prop;

          if (!isStandardSyntaxProperty(prop)) {
            return;
          }
          if (isCustomProperty(prop)) {
            return;
          }

          stylelint.utils.report({
            message: messages.rejected(prop),
            node,
            result,
            ruleName,
          });
        });
      }
    });
  };
};

function ignoreRule(selectorAST) {
  let ignore = false;
  selectorAST.walk(selectorNode => {
    // ignore `:root` selector inside a `:not()` selector
    if (selectorNode.value && selectorNode.value.toLowerCase() === ':root' && selectorNode.parent.parent.value && selectorNode.parent.parent.value.toLowerCase() === ':not') {
      ignore = true;
    }
  });
  return ignore;
}

rule.ruleName = ruleName;
rule.messages = messages;
module.exports = rule;
