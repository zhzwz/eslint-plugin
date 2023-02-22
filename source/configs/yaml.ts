// plugin: eslint-plugin-yml
// github: https://github.com/ota-meshi/eslint-plugin-yml
//
// parser: yaml-eslint-parser
// github: https://github.com/ota-meshi/yaml-eslint-parser
export default {
  plugins: [
    'eslint-plugin-yml',
  ],
  extends: [
    'plugin:yml/standard',
  ],
  overrides: [
    {
      files: ['*.yml', '*.yaml'],
      parser: 'yaml-eslint-parser',
      rules: {
        'yml/no-empty-document': 'off',
        'yml/no-empty-mapping-value': 'off',

        // There should be no space before '}'.
        // always or never
        'yml/flow-mapping-curly-spacing': ['error', 'always'],
      },
    },
  ],
}
