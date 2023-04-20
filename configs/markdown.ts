export default {
  plugins: ['eslint-plugin-markdown'],
  overrides: [
    {
      files: ['**/*.md'],
      processor: 'markdown/markdown',
    },
    {
      files: ['**/*.md/*.*'],
      parserOptions: { ecmaFeatures: { impliedStrict: true } },
      rules: {
        strict: 0,
        'eol-last': 0,
        'unicode-bom': 0,
        'padded-blocks': 0,
        'no-alert': 0,
        'no-console': 0,
        'no-undef': 0,
        'no-unused-vars': 0,
        'no-unused-expressions': 0,
        'no-restricted-imports': 0,
        '@typescript-eslint/comma-dangle': 0,
        '@typescript-eslint/no-redeclare': 0,
        '@typescript-eslint/no-unused-vars': 0,
        '@typescript-eslint/no-var-requires': 0,
        '@typescript-eslint/no-use-before-define': 0,
        'import/no-unresolved': 0,
      },
    },
  ],
}
