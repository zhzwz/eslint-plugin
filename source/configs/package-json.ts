const PACKAGE_JSON_KEY_ORDER_LIST = 'name,version,description,keywords,license,author,repository,homepage,bugs,funding,unpkg,jsdelivr,private,type,main,module,types,exports,files,bin,scripts,peerDependencies,peerDependenciesMeta,dependencies,optionalDependencies,bundledDependencies,devDependencies,sideEffects,eslintConfig,publishConfig'.split(',')

export default {
  plugins: ['eslint-plugin-jsonc'],
  overrides: [{
    files: ['package.json'],
    parser: 'jsonc-eslint-parser',
    rules: {
      'jsonc/no-comments': 'error',
      'jsonc/sort-keys': [
        'error',
        // 一级属性排序
        { pathPattern: '^$', order: PACKAGE_JSON_KEY_ORDER_LIST },
        // 依赖项排序
        {
          pathPattern: '^(dependencies|bundledDependencies|devDependencies|optionalDependencies|peerDependencies|peerDependenciesMeta)$',
          order: {
            type: 'asc',
          },
        },
      ],
    },
  }],
}
