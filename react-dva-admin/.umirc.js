const path = require('path')
export default {
  plugins: ['umi-plugin-dva'],
  disableCSSModules: true,
  alias: {
    api: path.resolve(__dirname, './src/services/api.js')
  },
  proxy: {
    '/api': {
      target: 'http://localhost:3000',
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      }
    }
  }
}
