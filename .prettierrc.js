module.exports = {
  arrowParens: 'avoid',
  bracketSpacing: true,
  jsxBracketSameLine: false,
  jsxSingleQuote: true,
  singleQuote: true,
  semi: true,
  endOfLine: 'auto',
  trailingComma: 'all',
  importOrder: [
    '<THIRD_PARTY_MODULES>',

    '^@(redux|constants)/(.*)',
    '^@configs/(.*)$',

    '^@img/(.*)$',
    '^@(containers|components|scenes)/(.*)$',
    '^@styles/(.*)$',
  ],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
};
