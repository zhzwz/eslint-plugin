/* eslint-disable @typescript-eslint/no-magic-numbers */
export default {
  env: {
    node: true,
    browser: true,
    es2022: true,
  },
  globals: { document: 'readonly' },
  plugins: [
    'eslint-plugin-html',
    'eslint-plugin-import',
    'eslint-plugin-promise',
    'eslint-plugin-n',
  ],
  'extends': [
    'eslint:recommended',
    'plugin:import/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    ecmaFeatures: { jsx: true },
    sourceType: 'module',
  },
  settings: {
    // https://github.com/import-js/eslint-plugin-import#settings
    'import/resolver': { node: { extensions: ['.js', '.jsx', '.mjs', '.ts', '.tsx', '.d.ts'] } },
  },
  rules: {
    // Possible Problems: https://eslint.org/docs/latest/rules/#possible-problems
    'array-callback-return': 'warn',
    'no-await-in-loop': 'warn',
    'no-constant-binary-expression': 'warn',
    'no-constructor-return': 'error',
    'no-duplicate-imports': 'warn',
    'no-new-native-nonconstructor': 'warn',
    'no-promise-executor-return': 'warn',
    'no-self-compare': 'warn',
    'no-template-curly-in-string': 'warn',
    'no-unmodified-loop-condition': 'warn',
    'no-unreachable-loop': 'warn',
    'no-unused-private-class-members': 'warn',
    'no-use-before-define': 'warn',
    'require-atomic-updates': 'warn',

    // Suggestions: https://eslint.org/docs/latest/rules/#suggestions
    'accessor-pairs': 'warn',
    'arrow-body-style': 'error', // fixable
    'block-scoped-var': 'warn',
    camelcase: 'warn',
    'class-methods-use-this': 'warn',
    complexity: 'error', // default: 20
    'consistent-return': 'warn',
    'consistent-this': ['warn', 'self'], // default: "that"
    curly: 'error', // fixable
    'default-case': 'warn',
    'default-case-last': 'warn',
    'default-param-last': 'warn',
    'dot-notation': 'error', // fixable
    eqeqeq: 'warn', // fixable
    'func-name-matching': 'warn',
    'func-names': ['warn', 'as-needed'],
    'func-style': ['warn', 'declaration', { allowArrowFunctions: true }],
    'grouped-accessor-pairs': 'warn',
    'guard-for-in': 'warn',
    // id-denylist
    // id-length
    // id-match
    'init-declarations': 'warn',
    'logical-assignment-operators': 'error', // fixable
    'max-classes-per-file': 'warn',
    'max-depth': 'warn',
    'max-lines': [
      'warn', {
        max: 1024, // default: 300
        skipBlankLines: true,
        skipComments: true,
      },
    ],
    // 'max-lines-per-function': [
    //   'warn', {
    //     max: 50, // default: 50
    //     skipBlankLines: true,
    //     skipComments: true,
    //     IIFEs: false,
    //   },
    // ],
    'max-nested-callbacks': ['warn', { max: 10 }], // default: 10
    'max-params': ['warn', { max: 3 }], // default: 3
    'max-statements': ['warn', { max: 10 }, { ignoreTopLevelFunctions: true }], // default: 10
    // multiline-comment-style
    'new-cap': ['warn', { newIsCap: true, capIsNew: true, properties: true }],
    'no-alert': 'warn', // Disallow the use of alert, confirm, and prompt
    'no-array-constructor': 'warn',
    'no-bitwise': 'warn',
    'no-caller': 'warn',
    'no-confusing-arrow': ['error', { allowParens: true, onlyOneSimpleParam: false }], // fixable
    'no-console': 'warn',
    'no-continue': 'warn',
    'no-div-regex': 'error', // fixable
    'no-else-return': 'error', // fixable
    'no-empty-function': 'warn',
    'no-empty-static-block': 'warn',
    'no-eq-null': 'warn',
    'no-eval': 'warn',
    'no-extend-native': 'warn',
    'no-extra-bind': 'error', // fixable
    'no-extra-label': 'error', // fixable
    'no-floating-decimal': 'error', // fixable
    'no-implicit-coercion': 'error', // fixable
    'no-implicit-globals': 'warn',
    'no-implied-eval': 'warn',
    // no-inline-comments
    'no-invalid-this': 'warn',
    'no-iterator': 'warn',
    'no-label-var': 'warn',
    'no-labels': 'warn',
    'no-lone-blocks': 'warn',
    'no-lonely-if': 'error', // fixable
    'no-loop-func': 'warn',
    // no-magic-numbers
    'no-mixed-operators': 'warn',
    'no-multi-assign': 'warn',
    'no-multi-str': 'warn',
    'no-negated-condition': 'warn',
    'no-nested-ternary': 'warn',
    'no-new': 'warn',
    'no-new-func': 'warn',
    'no-new-object': 'warn',
    'no-new-wrappers': 'warn',
    'no-octal-escape': 'warn',
    'no-param-reassign': 'warn',
    // no-plusplus
    'no-proto': 'warn',
    // no-restricted-exports
    // no-restricted-globals
    // no-restricted-imports
    // no-restricted-properties
    // no-restricted-syntax
    'no-return-assign': 'warn',
    'no-return-await': 'warn',
    'no-script-url': 'warn',
    'no-sequences': 'warn',
    // 'no-shadow': ['warn', { builtinGlobals: true, hoist: 'all', ignoreOnInitialization: true }],
    // no-shadow-restricted-names // eslint:recommended
    // no-ternary
    'no-throw-literal': 'warn',
    'no-undef-init': 'warn', // fixable
    // no-undefined
    // no-underscore-dangle
    'no-unneeded-ternary': 'error', // fixable
    'no-unused-expressions': 'error',
    // no-unused-labels // eslint:recommended
    'no-useless-call': 'warn',
    // no-useless-catch // eslint:recommended
    'no-useless-computed-key': 'error', // fixable
    'no-useless-concat': 'warn',
    'no-useless-constructor': 'warn',
    // no-useless-escape // eslint:recommended
    'no-useless-rename': 'error', // fixable
    'no-useless-return': 'error', // fixable
    'no-var': 'warn', // fixable
    'no-void': 'warn',
    'no-warning-comments': 'warn',
    // no-with // eslint:recommended
    'object-shorthand': ['error', 'always'], // fixable // default: "always"
    // one-var
    // one-var-declaration-per-line
    'operator-assignment': ['error', 'always'], // fixable // default: "always"
    'prefer-arrow-callback': 'error', // fixable
    'prefer-const': 'error', // fixable
    'prefer-destructuring': [
      'error', {
        VariableDeclarator: { array: true, object: true },
        AssignmentExpression: { array: true, object: true },
      }, { enforceForRenamedProperties: false },
    ], // fixable
    'prefer-exponentiation-operator': 'error', // fixable
    // prefer-named-capture-group
    'prefer-numeric-literals': 'error', // fixable
    'prefer-object-has-own': 'error', // fixable
    'prefer-object-spread': 'error', // fixable
    'prefer-promise-reject-errors': 'warn',
    'prefer-regex-literals': 'error', // fixable
    'prefer-rest-params': 'warn',
    'prefer-spread': 'warn',
    'prefer-template': 'error', // fixable
    'quote-props': ['error', 'as-needed', { numbers: true, keywords: true, unnecessary: true }], // fixable
    radix: 'warn',
    'require-await': 'warn',
    'require-unicode-regexp': 'warn', // fixable
    // require-yield // eslint:recommended
    // sort-imports
    // sort-keys
    'sort-vars': 'warn', // fixable
    'spaced-comment': 'error', // fixable
    strict: 'warn', // fixable
    'symbol-description': 'warn',
    'vars-on-top': 'warn',
    yoda: 'error', // fixable

    // Layout & Formatting: https://eslint.org/docs/latest/rules/#layout--formatting
    'array-bracket-newline': ['error', { multiline: true }], // fixable
    'array-bracket-spacing': ['error', 'never'], // fixable
    'array-element-newline': ['error', 'consistent'], // fixable
    'arrow-parens': 'error', // fixable
    'arrow-spacing': 'error', // fixable
    'block-spacing': 'error', // fixable
    'comma-dangle': ['error', 'always-multiline'], // fixable
    'comma-spacing': 'error', // fixable
    'comma-style': 'error', // fixable
    'computed-property-spacing': 'error', // fixable
    // dot-location
    'eol-last': 'error', // fixable
    'func-call-spacing': 'error', // fixable
    'function-call-argument-newline': ['error', 'consistent'], // fixable
    'function-paren-newline': ['error', 'consistent'], // fixable
    'generator-star-spacing': 'error', // fixable
    'implicit-arrow-linebreak': 'error', // fixable
    indent: [
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
        // ignoredNodes: ['ConditionalExpression'],
      },
    ], // fixable
    'jsx-quotes': 'error', // fixable
    'key-spacing': 'error', // fixable
    'keyword-spacing': 'error', // fixable
    // line-comment-position
    'linebreak-style': 'error', // fixable
    // lines-around-comment
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }], // fixable
    // max-len
    'max-statements-per-line': ['error', { max: 1 }],
    // multiline-ternary
    'new-parens': 'error', // fixable
    // newline-per-chained-call
    'no-extra-parens': 'error', // fixable
    // no-mixed-spaces-and-tabs // eslint:recommended
    'no-multi-spaces': 'error', // fixable
    'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 1 }], // fixable
    'no-tabs': 'error', // fixable
    'no-trailing-spaces': 'error', // fixable
    'no-whitespace-before-property': 'error', // fixable
    'nonblock-statement-body-position': 'error', // fixable
    'object-curly-newline': ['error', { multiline: true }], // fixable
    'object-curly-spacing': ['error', 'always'], // fixable
    // object-property-newline
    'operator-linebreak': ['error', 'before'], // fixable
    'padded-blocks': ['error', 'never'], // fixable
    // padding-line-between-statements
    quotes: ['error', 'single', { avoidEscape: true }], // fixable
    'rest-spread-spacing': 'error', // fixable
    semi: ['error', 'never', { beforeStatementContinuationChars: 'always' }], // fixable
    'semi-spacing': 'error', // fixable
    // 'semi-style': 'error', // fixable
    'space-before-blocks': 'error', // fixable
    'space-before-function-paren': ['error', { anonymous: 'never', named: 'never', asyncArrow: 'always' }], // fixable
    'space-in-parens': 'error', // fixable
    'space-infix-ops': 'error', // fixable
    'space-unary-ops': 'error', // fixable
    'switch-colon-spacing': 'error', // fixable
    'template-curly-spacing': 'error', // fixable
    'template-tag-spacing': 'error', // fixable
    'unicode-bom': 'warn', // fixable
    'wrap-iife': 'error', // fixable
    'wrap-regex': 'error', // fixable
    'yield-star-spacing': 'error', // fixable

    // Import: https://github.com/import-js/eslint-plugin-import
    'import/no-unresolved': 'off',
    'import/first': 'error',
    'import/order': ['error', { alphabetize: { order: 'asc', caseInsensitive: true } }], // fixable
    'import/newline-after-import': 'error', // fixable
    'import/no-deprecated': 'warn', // Forbid imported names marked with @deprecated documentation tag.
    'import/no-mutable-exports': 'warn',

    // Promise: https://github.com/eslint-community/eslint-plugin-promise
    'promise/param-names': 'error',

    // Node: https://github.com/eslint-community/eslint-plugin-n
  },
}
