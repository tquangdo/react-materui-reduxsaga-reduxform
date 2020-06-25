// run script: npm run eslinting
// need install: npm -g i eslint-cli
module.exports = {
  parser: "babel-eslint",
  // https://eslint.org/> User guide> Configuring ESLint
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  // npm install --save-dev eslint-config-airbnb
  // extends: ["airbnb"],
  rules: {
    semi: 0,
    // quotes: [1, "single"],
    "react/prop-types": 1,
    "react/jsx-max-props-per-line": 0,
    "object-curly-newline": 0,
    "lines-between-class-members": 0,
    "react/forbid-prop-types": 0,
    "react/require-default-props": 0,
    "react/jsx-filename-extension": 0,
    "react/jsx-one-expression-per-line": 0,
    "linebreak-style": 0,
    "react/jsx-uses-vars": 2,
    "no-unused-vars": 2,
  },
  // plugins: ["prettier"],
  env: {
    "es6": true,
    "browser": true,
    "node": true,
  }
};
