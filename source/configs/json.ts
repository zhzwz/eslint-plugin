export default {
  plugins: ['eslint-plugin-jsonc'],
  overrides: [{
    files: ['*.json', '*.json5', '*.jsonc'],
    parser: 'jsonc-eslint-parser',
    rules: {
      // 禁止空行
      'no-multiple-empty-lines': ['error', { max: 0, maxBOF: 0, maxEOF: 0 }],
      'eol-last': ['error', 'never'],
      // 缩进
      'jsonc/indent': ['error', 2],
      // 逗号风格
      'jsonc/comma-style': ['error', 'last'],
      'jsonc/comma-dangle': ['error', 'never'],
      // 强制双引号
      'jsonc/quote-props': ['error', 'always'],
      'jsonc/quotes': ['error', 'double', { avoidEscape: false }],
      // 强制数组换行
      'jsonc/array-bracket-newline': ['error', 'always'],
      'jsonc/array-element-newline': ['error', 'always'],
      // 强制对象换行
      'jsonc/object-curly-newline': ['error', 'always'],
      'jsonc/object-property-newline': ['error'],
      // 冒号强制空格 { "key": "value" }
      'jsonc/key-spacing': ['error', { beforeColon: false, afterColon: true, mode: 'strict' }],
    },
  }],
}
