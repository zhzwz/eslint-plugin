/* eslint-disable @typescript-eslint/no-magic-numbers */

export default {
  plugins: [
    'eslint-plugin-import',
    '@typescript-eslint',
  ],
  extends: [
    'plugin:@zhzwz/basic',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    // 'plugin:@typescript-eslint/recommended-requiring-type-checking',
    // 'plugin:@typescript-eslint/strict',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    ecmaFeatures: { jsx: true },
    sourceType: 'module',
    project: ['./tsconfig.json'],
    extraFileExtensions: ['.vue'],
  },
  rules: {
    '@typescript-eslint/consistent-type-exports': ['error', { fixMixedExportsWithInlineTypeSpecifier: true }], // fixable
    // @typescript-eslint/consistent-type-imports
    '@typescript-eslint/member-delimiter-style': ['error', { multiline: { delimiter: 'none' } }], // fixable
    '@typescript-eslint/method-signature-style': ['error', 'method'], // fixable
    '@typescript-eslint/no-confusing-void-expression': 'error', // fixable
    '@typescript-eslint/no-duplicate-type-constituents': 'error', // fixable
    '@typescript-eslint/no-import-type-side-effects': 'error', // fixable
    '@typescript-eslint/no-redundant-type-constituents': 'warn',
    '@typescript-eslint/no-require-imports': 'warn',
    // @typescript-eslint/no-type-alias
    '@typescript-eslint/no-unnecessary-qualifier': 'error', // fixable
    '@typescript-eslint/no-useless-empty-export': 'error', // fixable
    '@typescript-eslint/prefer-readonly': 'error', // fixable
    // @typescript-eslint/prefer-readonly-parameter-types
    '@typescript-eslint/prefer-regexp-exec': 'error', // fixable
    // @typescript-eslint/promise-function-async
    '@typescript-eslint/require-array-sort-compare': 'warn',
    '@typescript-eslint/sort-type-constituents': 'error', // fixable
    // @typescript-eslint/strict-boolean-expressions
    '@typescript-eslint/switch-exhaustiveness-check': 'warn',
    '@typescript-eslint/type-annotation-spacing': 'error', // fixable

    // Extension Rules:
    'block-spacing': 'off',
    '@typescript-eslint/block-spacing': 'error', // fixable
    'brace-style': 'off',
    '@typescript-eslint/brace-style': 'error', // fixable
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': ['error', 'always-multiline'], // fixable
    'comma-spacing': 'off',
    '@typescript-eslint/comma-spacing': 'error', // fixable
    'default-param-last': 'off',
    '@typescript-eslint/default-param-last': 'warn',
    'func-call-spacing': 'off',
    '@typescript-eslint/func-call-spacing': 'error', // fixable
    indent: 'off',
    '@typescript-eslint/indent': [
      'error', 2, {
        SwitchCase: 1,
        VariableDeclarator: 'first',
        outerIIFEBody: 0,
        MemberExpression: 1,
        FunctionDeclaration: { body: 1, parameters: 1 },
        FunctionExpression: { body: 1, parameters: 1 },
        StaticBlock: { body: 1 },
        CallExpression: { arguments: 1 },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: true,
        offsetTernaryExpressions: false,
        ignoreComments: false,
        ignoredNodes: [
          'ConditionalExpression',
          'TemplateLiteral *',
          'TSTypeParameterInstantiation',
          'JSXElement',
          'JSXElement > *',
          'JSXAttribute',
          'JSXIdentifier',
          'JSXNamespacedName',
          'JSXMemberExpression',
          'JSXSpreadAttribute',
          'JSXExpressionContainer',
          'JSXOpeningElement',
          'JSXClosingElement',
          'JSXFragment',
          'JSXOpeningFragment',
          'JSXClosingFragment',
          'JSXText',
          'JSXEmptyExpression',
          'JSXSpreadChild',
        ],
      },
    ], // fixable
    'init-declarations': 'off',
    '@typescript-eslint/init-declarations': 'warn',
    'key-spacing': 'off',
    '@typescript-eslint/key-spacing': 'error', // fixable
    'keyword-spacing': 'off',
    '@typescript-eslint/keyword-spacing': 'error', // fixable
    'lines-around-comment': 'off',
    '@typescript-eslint/lines-around-comment': 'error', // fixable
    'lines-between-class-members': 'off',
    '@typescript-eslint/lines-between-class-members': 'error', // fixable
    'no-dupe-class-members': 'off',
    '@typescript-eslint/no-dupe-class-members': 'error',
    // 'no-extra-parens': 'off',
    // '@typescript-eslint/no-extra-parens': 'error', // fixable
    'no-invalid-this': 'off',
    '@typescript-eslint/no-invalid-this': 'error',
    'no-loop-func': 'off',
    '@typescript-eslint/no-loop-func': 'warn',
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': 'error',
    // 'no-shadow': 'off',
    // '@typescript-eslint/no-shadow': 'warn',
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': 'warn',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'warn',
    'object-curly-spacing': 'off',
    '@typescript-eslint/object-curly-spacing': ['error', 'always'], // fixable
    quotes: 'off',
    '@typescript-eslint/quotes': ['error', 'single'], // fixable
    'no-return-await': 'off',
    '@typescript-eslint/return-await': 'error', // fixable
    semi: 'off',
    '@typescript-eslint/semi': ['error', 'never'], // fixable
    'space-before-blocks': 'off',
    '@typescript-eslint/space-before-blocks': 'error',
    'space-before-function-paren': 'off',
    '@typescript-eslint/space-before-function-paren': ['error', { anonymous: 'never', named: 'never', asyncArrow: 'always' }],
    'space-infix-ops': 'off',
    '@typescript-eslint/space-infix-ops': 'error',

    // Off:
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-magic-numbers': 'off',
  },
}
