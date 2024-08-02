import transpileModules from 'next-transpile-modules';

const withTM = transpileModules(['modules/modulo1', 'modules/modulo2']);

const nextConfig = withTM({
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
});

export default nextConfig;
