export default {
  plugins: ['eslint-plugin-yml'],
  parser: 'yaml-eslint-parser',
  extends: ['plugin:yml/standard'],
  rules: {
    'yml/no-empty-document': 'off',
    'yml/no-empty-mapping-value': 'off',
  },
  ignorePatterns: [
    '!.github',
    '!.eslintrc.yaml',
    'pnpm-lock.yaml',
  ],
}
