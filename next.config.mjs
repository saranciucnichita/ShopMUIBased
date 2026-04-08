/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactStrictMode: true,
  poweredByHeader: false,

  // 2. Optimize images with modern formats [3]
  images: {
    formats: ['image/avif', 'image/webp'],
  },

  // 3. Output file tracing reduces container size drastically [9]
  output: 'standalone',

  // 4. Recommended Security Headers [6]
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
        ],
      },
    ];
  },
  reactCompiler: true,
};

export default nextConfig;
