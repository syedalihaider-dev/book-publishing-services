// /** @type {import('next').NextConfig} */ 
// const nextConfig = {

// }; 
// export default nextConfig;

/** @type {import('next').NextConfig} */ 
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/blog/:path*',
        destination: 'https://bookpublishingservices.io.cdn.hstgr.net/blog/:path*',
      },
    ];
  },
};

export default nextConfig;