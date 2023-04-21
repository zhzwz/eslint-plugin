export default {
  plugins: ['eslint-plugin-vue'],
  overrides: [
    {
      files: ['**/*.vue'],
      extends: [
        'plugin:@zhzwz/basic-typescript',
        'plugin:vue/vue3-recommended',
      ],
      parser: 'vue-eslint-parser',
      parserOptions: { parser: '@typescript-eslint/parser' },
      rules: {
        // https://eslint.vuejs.org/rules/#uncategorized
        'vue/block-tag-newline': ['error', { singleline: 'always', multiline: 'always', maxEmptyLines: 0 }],
        // "PascalCase" | "kebab-case" | "camelCase"
        'vue/component-options-name-casing': ['error', 'PascalCase'],
        // Disallow rules in `*.vue` files.
        'no-undef': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        // Variable can be used before it was defined.
        '@typescript-eslint/no-use-before-define': 'off',
        // Allow `v-html`.
        'vue/no-v-html': 'off',
        'vue/require-default-prop': 'off',
        'vue/max-attributes-per-line': 'off',
        'vue/multi-word-component-names': 'off',
        'vue/no-setup-props-destructure': 'off',
        'vue/singleline-html-element-content-newline': 'off',
        // Allow multiple components in one file.
        'vue/one-component-per-file': 'off',
      },
    },
  ],
}
