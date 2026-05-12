/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  cacheComponents: true,
  reactStrictMode: true,
  poweredByHeader: false,
  experimental: {
    turbopackFileSystemCacheForDev: true
  },
  images: {
    remotePatterns: [new URL('https://tasteful-angel-9db2a6bb3b.media.strapiapp.com/**')],
  },
};

export default nextConfig;
