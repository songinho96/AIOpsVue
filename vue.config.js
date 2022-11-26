// const { defineConfig } = require('@vue/cli-service');
// module.exports = defineConfig({
//   transpileDependencies: true,
//   devServer: {
//     client: {
//       overlay: false,
//     },
//   },
// });

// module.exports = {
//   devServer: {
//     proxy: {
//       '/api': {
//         target: 'http://localhost:8080',
//         changeOrigin: true,
//         pathRewrite: {
//           '^/': '',
//         },
//       },
//     },
//   },
// };

module.exports = {
  devServer: {
    client: {
      overlay: false,
    },
    proxy: {
      '/api': {
        // target: 'http://localhost:8080',
        // target: 'http://34.64.195.211:8080',
        target: 'http://34.64.250.73:8000',
        changeOrigin: true,
        pathRewrite: { '^/': '/' },
      },
    },
  },
};

// module.exports = {
//   devServer: {
//     proxy: 'http://localhost:8080',
//   },
// };
