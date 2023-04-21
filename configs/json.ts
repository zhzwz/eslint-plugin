export default {
  plugins: ['eslint-plugin-jsonc'],
  parser: 'jsonc-eslint-parser',
  rules: {
    'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 1 }],
    'eol-last': ['error', 'always'],
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    'jsonc/indent': ['error', 2],
    'jsonc/comma-style': ['error', 'last'],
    'jsonc/comma-dangle': ['error', 'never'],
    // Always double quote props. // e.g. "key"
    'jsonc/quote-props': ['error', 'always'],
    'jsonc/quotes': ['error', 'double', { avoidEscape: false }],
    // Always new line.
    'jsonc/array-bracket-newline': ['error', 'always'],
    'jsonc/array-element-newline': ['error', 'always'],
    'jsonc/object-curly-newline': ['error', 'always'],
    'jsonc/object-property-newline': ['error'],
    // Always space after colon. // e.g. "key": "value"
    'jsonc/key-spacing': ['error', { beforeColon: false, afterColon: true, mode: 'strict' }],
  },
}
