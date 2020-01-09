const withCSS = require('@zeit/next-css');
const withImages = require('next-images');

module.exports = withCSS(withImages({
  webpack: (config, options) => {
     console.log(config);
     return config;
  }
}));