module.exports = {
  // @see https://github.com/prettier/stylelint-prettier
  extends: [
    'stylelint-config-recommended-vue',
    'stylelint-prettier/recommended',
  ],
  plugins: ['stylelint-prettier'],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'prettier/prettier': true,
  },
}
