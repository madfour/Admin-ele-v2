module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  // required to lint *.vue files
  plugins: ['vue'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    indent: ['error', 2, { SwitchCase: 1 }],
    semi: ['error', 'always'],
    'space-before-function-paren': [
      'error',
      { anonymous: 'always', named: 'never' }
    ],
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
