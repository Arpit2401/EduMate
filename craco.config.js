const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@src': path.resolve(__dirname, 'src'),
      '@fonts': path.resolve(__dirname, 'src/assets/fonts'),
      '@images': path.resolve(__dirname, 'src/assets/images'),
      '@themes': path.resolve(__dirname, 'src/themes'),
      '@constants': path.resolve(__dirname, 'src/constants'),
      '@screens': path.resolve(__dirname, 'src/screens'),
      '@containers': path.resolve(__dirname, 'src/containers'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@models': path.resolve(__dirname, 'src/models'),
    },
  },
};
