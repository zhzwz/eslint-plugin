export default {
  plugins: ['eslint-plugin-jsonc'],
  overrides: [
    {
      files: ['**/.vscode/settings.json'],
      parser: 'jsonc-eslint-parser',
      rules: {
        // 规则按首字母排序
        'jsonc/sort-keys': ['error', 'asc'],
        // 数组值按首字母排序
        'jsonc/sort-array-values': ['error', { pathPattern: '.*', order: { type: 'asc' } }],
      },
    },
  ],
}
