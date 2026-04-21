/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  cacheComponents: true,
  reactStrictMode: true,
  poweredByHeader: false,
  experimental: {
    turbopackFileSystemCacheForDev: true
  }
};

export default nextConfig;
