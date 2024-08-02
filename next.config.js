const withTM = require('next-transpile-modules')(['modules/modulo1', 'modules/modulo2']);

module.exports = withTM({
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
});
