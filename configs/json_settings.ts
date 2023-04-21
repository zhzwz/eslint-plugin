export default {
  overrides: [
    {
      files: ['**/.vscode/settings.json'],
      extends: ['plugin:@zhzwz/basic-json'],
      rules: {
        'jsonc/comma-dangle': ['warn', 'always-multiline'],
        'jsonc/sort-keys': ['error', 'asc'],
        'jsonc/sort-array-values': ['error', { pathPattern: '.*', order: { type: 'asc' } }],
      },
    },
  ],
}
