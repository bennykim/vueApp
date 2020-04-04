module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    'node': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:vue/essential',
    'plugin:vue/strongly-recommended'
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'plugins': ['vue'],
  'rules': {
    'camelcase': [
      'error',
      {
        'ignoreImports': true
      }
    ],
    'no-empty-pattern': 0,
    'no-duplicate-imports': 'error',
    'no-multiple-empty-lines': [
      'error',
      {
        'max': 2
      }
    ],
    'nonblock-statement-body-position': [
      'error',
      'beside'
    ],
    'implicit-arrow-linebreak': [
      'error',
      'beside'
    ],
    'array-bracket-newline': [
      'error',
      {
        'multiline': true,
        'minItems': 2
      }
    ],
    'object-curly-newline': ['error'],
    'object-curly-spacing': [
      'error',
      'always'
    ],
    'no-else-return': 'error',
    'indent': [
      'error',
      2
    ],
    'comma-style': [
      'error',
      'last'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ]
  }
};
