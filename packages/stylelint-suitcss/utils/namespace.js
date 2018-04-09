const prefix = 'suitcss';

module.exports = function namespace(ruleName) {
  return `${prefix}/${ruleName}`;
};
