const topLevelOrderKeys = [
  'name',
  'version',
  'description',
  'keywords',
  'license',
  'author',
  'repository',
  'homepage',
  'bugs',
  'funding',
  'unpkg',
  'jsdelivr',
  'private',
  'type',
  'main',
  'module',
  'types',
  'exports',
  'files',
  'bin',
  'engines',
  'packageManager',
  'scripts',
  'peerDependencies',
  'peerDependenciesMeta',
  'dependencies',
  'optionalDependencies',
  'bundledDependencies',
  'devDependencies',
  'sideEffects',
  'eslintConfig',
  'publishConfig',
]

export default {
  overrides: [
    {
      files: ['**/package.json'],
      'extends': ['plugin:@zhzwz/basic-json'],
      rules: {
        // Disallow comments.
        'jsonc/no-comments': 'error',
        'jsonc/sort-keys': [
          'error',
          // Sort top-level keys according to the list.
          { pathPattern: '^$', order: topLevelOrderKeys },
          // Sort dependencies in ascending order.
          { pathPattern: '([Dd]ependencies)', order: { type: 'asc' } },
        ],
      },
    },
  ],
}
