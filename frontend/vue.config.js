const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // Dirección de tu backend
        changeOrigin: true,
        secure: false, // Desactiva la validación SSL si es necesario
      },
    },
  },
});
