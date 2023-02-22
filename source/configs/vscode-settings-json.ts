export default {
  plugins: [
    'eslint-plugin-jsonc',
  ],
  overrides: [
    {
      files: ['**/.vscode/settings.json'],
      parser: 'jsonc-eslint-parser',
      rules: {
        'jsonc/sort-keys': ['error', 'asc'],
        'jsonc/sort-array-values': ['error', { pathPattern: '.*', order: { type: 'asc' } }],
      },
    },
  ],
}
