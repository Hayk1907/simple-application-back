module.exports = {
  env: {
    node: true
  },
  extends: ['standard', 'eslint:recommended', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "prettier/prettier": "warn",
    "semi": [2, "always"],
    "no-var": 1,
  }
};
