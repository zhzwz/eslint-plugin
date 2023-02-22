import jsonConfig from './configs/json'
import standardConfig from '././configs/standard'

import yamlConfig from './configs/yaml'
import markdownConfig from './configs/markdown'
import vueConfig from './configs/vue'
import reactConfig from './configs/react'

import packageJsonConfig from './configs/package-json'
import vscodeSettingsJsonConfig from './configs/vscode-settings-json'

export default {
  configs: {
    standard: standardConfig,
    vue: vueConfig,
    react: reactConfig,
    yaml: yamlConfig,
    markdown: markdownConfig,
    json: jsonConfig,
    'package-json': packageJsonConfig,
    'vscode-settings-json': vscodeSettingsJsonConfig,
    all: {
      extends: [
        'plugin:@zhzwz/react',
        'plugin:@zhzwz/vue',

        'plugin:@zhzwz/json',
        'plugin:@zhzwz/package-json',
        'plugin:@zhzwz/yaml',
        'plugin:@zhzwz/markdown',

        'plugin:@zhzwz/vscode-settings-json',
      ],
    },
  },
}
