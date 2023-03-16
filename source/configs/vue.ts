export default {
  plugins: [
    'eslint-plugin-vue',
  ],
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:@zhzwz/standard',
  ],
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
      rules: {
        // Sort the order of tags in `*.vue`.
        'vue/component-tags-order': ['error', {
          order: [
            'route',
            'script:not([setup])',
            'script',
            'template',
            'style:not([scoped])',
            'style[scoped]',
          ],
        }],

        'no-undef': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        // Variable can be used before it was defined. (<script setup> in `*.vue`)
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
