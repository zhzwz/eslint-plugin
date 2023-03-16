export default {
  plugins: [
    'eslint-plugin-markdown',
  ],
  overrides: [
    // enable markdown processor for `.md` files
    {
      files: [
        '**/*.md',
      ],
      processor: 'markdown/markdown',
    },
    {
      files: [
        '**/*.md/*.*',
      ],
      parserOptions: {
        // strict mode parsing without `use strict`
        ecmaFeatures: {
          impliedStrict: true,
        },
      },
      rules: {
        strict: 'off',
        'eol-last': 'off',
        'unicode-bom': 'off',
        'padded-blocks': 'off',
        'no-alert': 'off',
        'no-console': 'off',
        'no-undef': 'off',
        'no-unused-vars': 'off',
        'no-unused-expressions': 'off',
        'no-restricted-imports': 'off',

        '@typescript-eslint/comma-dangle': 'off',
        '@typescript-eslint/no-redeclare': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-use-before-define': 'off',

        'import/no-unresolved': 'off',
      },
    },
  ],
}
