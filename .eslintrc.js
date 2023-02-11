/*global module*/
/*eslint no-undef: "error"*/
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },

  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],

  overrides: [],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true,
    },
  },
  plugins: ['react', 'prettier'],

  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        parser: 'flow',
      },
    ],
  },
};
