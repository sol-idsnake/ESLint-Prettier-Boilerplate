module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base', 'prettier'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto', // only for windows users facing CLRF and eslint/prettier error
        printWidth: 100,
        semi: false,
        singleQuote: true,
        trailingComma: 'es5',
      },
    ],
  },
}
