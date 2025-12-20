/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: false, // disables production source maps
  webpack(config) {
    // ignore specific warnings
    config.ignoreWarnings = [
      { message: /Failed to parse source map/ },
    ]
    return config
  },
}

export default nextConfig