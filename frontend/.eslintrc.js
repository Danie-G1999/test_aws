module.exports = {
    root: true,
    env: {
      node: true,
      browser: true
    },
    parserOptions: {
      parser: '@babel/eslint-parser',
      requireConfigFile: false // Indica que no es obligatorio un archivo Babel
    },
    extends: [
      'plugin:vue/vue3-essential',
      'eslint:recommended'
    ],
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
    }
  };
  