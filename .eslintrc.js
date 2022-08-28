module.exports = exports = {
  env: {
    jest: true,
    browser: true,
    node: true,
    es6: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'prettier', 'plugin:react/recommended'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    requireConfigFile: false,
    babelOptions: {
      babelrc: false,
      configFile: false,
      parserOpts: {
        plugins: ['jsx']
      },
      // your babel options
      presets: ['@babel/preset-env'],
    },
  },
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
  },
};
