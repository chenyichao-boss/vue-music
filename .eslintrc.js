module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'eol-last': 0,//这句话表示在文件末尾可以不加回车，贴个链接  https://eslint.org/docs/rules/eol-last
    'space-before-function-paren': 0, //这句话表示在函数后可以不加空格,
    'quotes' :'off',
    'semi':'off', 
    'comma-dangle': 'off',
    'space-before-blocks':0,
    'key-spacing': 0,
    'no-trailing-spaces': 0,
    'object-curly-spacing': 0,
    'comma-spacing' : 0,
    'no-trailing-spaces': 0,
    'arrow-spacing' : 0,
    'indent': 0,
    'space-infix-ops' : 0,
    'keyword-spacing' : 0,
    'space-in-parens':0,
    'no-unused-vars':0,
    'no-undef':0,
    'padded-blocks':0,
    'no-multiple-empty-lines': 0,
    'semi-spacing': 0,
    'no-global-assign': 0,
    'brace-style' : 0,
    'no-multi-spaces': 0,
    'spaced-comment': 0,
    'no-useless-return': 0,
    'no-tabs': 0,
    




  }
}
