import basic from './configs/basic'
import json from './configs/json'
import jsonPackageConfig from './configs/json_package'
import jsonSettingsConfig from './configs/json_settings'
import jsonTsconfigConfig from './configs/json_tsconfig'
import markdown from './configs/markdown'
import typescript from './configs/typescript'
import vue from './configs/vue'
import yaml from './configs/yaml'
import { name, version } from './package.json'

export default {
  meta: { name, version },
  configs: {
    basic,
    js: { overrides: [{ files: ['**/*.js'], 'extends': ['plugin:@zhzwz/basic'] }] },
    jsx: { overrides: [{ files: ['**/*.jsx'], 'extends': ['plugin:@zhzwz/basic'] }] },

    'basic-typescript': typescript,
    ts: { overrides: [{ files: ['**/*.ts'], 'extends': ['plugin:@zhzwz/basic-typescript'] }] },
    tsx: { overrides: [{ files: ['**/*.tsx'], 'extends': ['plugin:@zhzwz/basic-typescript'] }] },

    vue,

    'basic-json': json,
    json: { overrides: [{ files: ['**/*.json'], 'extends': ['plugin:@zhzwz/basic-json'] }] },
    'package.json': jsonPackageConfig,
    'tsconfig.json': jsonTsconfigConfig,
    'settings.json': jsonSettingsConfig,

    'basic-yaml': yaml,
    yml: { overrides: [{ files: ['**/*.yml'], 'extends': ['plugin:@zhzwz/basic-yaml'] }] },
    yaml: { overrides: [{ files: ['**/*.yaml'], 'extends': ['plugin:@zhzwz/basic-yaml'] }] },

    markdown,
    md: markdown,
  },
}
