module.exports = exports = {
  env: {
    jest: true,
    browser: true,
    node: true,
    es6: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'prettier', 'plugin:react/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
  },
};
