const orderList = 'name,version,description,keywords,license,author,repository,homepage,bugs,funding,unpkg,jsdelivr,private,type,main,module,types,exports,files,bin,engines,scripts,peerDependencies,peerDependenciesMeta,dependencies,optionalDependencies,bundledDependencies,devDependencies,sideEffects,eslintConfig,publishConfig'.split(',')

const dependencyPattern = '^(dependencies|bundledDependencies|devDependencies|optionalDependencies|peerDependencies|peerDependenciesMeta)$'

export default {
  plugins: ['eslint-plugin-jsonc'],
  overrides: [{
    files: ['package.json'],
    parser: 'jsonc-eslint-parser',
    rules: {
      // 禁止注释
      'jsonc/no-comments': 'error',
      'jsonc/sort-keys': [
        'error',
        // 一级属性按固定规则排序
        { pathPattern: '^$', order: orderList },
        // 依赖项排序
        { pathPattern: dependencyPattern, order: { type: 'asc' } },
      ],
    },
  }],
}
