/*global module*/
/*eslint no-undef: "error"*/
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },

  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended'],

  overrides: [],

  parser: '@typescript-eslint/parser',

  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    requireConfigFile: false,
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true,
    },
  },
  plugins: ['react'],

  rules: {
    'prettier/prettier': 'error',
    // 'prettier/prettier': [
    //   'error',
    //   {
    //     singleQuote: true,
    //     parser: 'flow'
    //   }
    // ]
  },
};
