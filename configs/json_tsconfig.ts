export default {
  overrides: [
    {
      files: ['**/tsconfig**.json'],
      'extends': ['plugin:@zhzwz/basic-json'],
      rules: {
        'jsonc/comma-dangle': [
          'warn',
          'always-multiline',
        ],
      },
    },
  ],
}
