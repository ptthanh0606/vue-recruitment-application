module.exports = {
  root: true,
  env: {
    node: true,
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended',
  ],
  rules:{
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/no-v-for-template-key': 'off',
    "linebreak-style": ["error", "windows"]
  },
  parserOptions: {
    parser: 'babel-eslint',
  }
};