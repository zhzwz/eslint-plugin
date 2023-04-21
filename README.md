# @zhzwz/eslint-plugin

WIP

## Installation

- install command with pnpm. (or npm, yarn)

```bash
pnpm add --save-dev eslint typescript @zhzwz/eslint-plugin
```

## Usage

- You can configure eslint in `package.json`.

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  },
  "eslintConfig": {
    "extends": "plugin:@zhzwz/standard"
  }
}
```

- Or configure eslint in `.eslintrc.yaml` file.

```yaml
root: true

extends:
  - "plugin:@zhzwz/js"
  - "plugin:@zhzwz/ts"
  - "plugin:@zhzwz/vue"
  - "plugin:@zhzwz/json"
  - "plugin:@zhzwz/package.json"
  - "plugin:@zhzwz/settings.json"
  - "plugin:@zhzwz/yaml"
  - "plugin:@zhzwz/md"

ignorePatterns:
  - node_modules
  - dist
  - public
  - "*.min.*"
  - CHANGELOG.md
  - packages-lock.json
  - pnpm-lock.yaml
```

## Thanks

- [eslint](https://github.com/eslint/eslint)
- [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import)
- [eslint-plugin-jsonc](https://github.com/ota-meshi/eslint-plugin-jsonc)
- [eslint-plugin-markdown](https://github.com/eslint/eslint-plugin-markdown)
- [eslint-plugin-html](https://github.com/BenoitZugmeyer/eslint-plugin-html)
- [eslint-plugin-eslint-comments](https://github.com/mysticatea/eslint-plugin-eslint-comments)
- [eslint-plugin-n](https://github.com/eslint-community/eslint-plugin-n)
- [eslint-plugin-promise](https://github.com/eslint-community/eslint-plugin-promise)

- [yaml-eslint-parser](https://github.com/ota-meshi/yaml-eslint-parser)
- [eslint-plugin-yml](https://github.com/ota-meshi/eslint-plugin-yml)

- [eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue)

- [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react)

- [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin)
- [@typescript-eslint/parser](https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/parser)
