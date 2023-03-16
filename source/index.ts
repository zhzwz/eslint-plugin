import standard from '././configs/standard'
import vue from './configs/vue'
import react from './configs/react'
import json from './configs/json'
import jsonPackage from './configs/json-package'
import jsonVscodeSettings from './configs/json-vscode-settings'
import yaml from './configs/yaml'
import markdown from './configs/markdown'
import unocss from './configs/unocss'

export default {
  configs: {
    standard,
    vue,
    react,
    json,
    'json-package': jsonPackage,
    'json-vscode-settings': jsonVscodeSettings,
    yaml,
    markdown,
    unocss,
  },
}
