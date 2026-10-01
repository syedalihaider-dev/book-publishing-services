/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: false, // disables production source maps
  transpilePackages: ["@canvas-digital/blog-sdk"],
  env: {
    BLOG_API_URL:
      process.env.BLOG_API_URL || process.env.NEXT_PUBLIC_BLOG_API_URL || "",
  },
  webpack(config) {
    // ignore specific warnings
    config.ignoreWarnings = [
      { message: /Failed to parse source map/ },
    ]
    return config
  },
}

export default nextConfig