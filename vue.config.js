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
        target: 'http://localhost:8080',
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
