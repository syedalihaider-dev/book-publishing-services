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
        destination: 'https://darkviolet-jellyfish-929687.hostingersite.com/blog/:path*',
      },
    ];
  },
};

export default nextConfig;