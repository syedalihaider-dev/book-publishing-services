/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BLOG_API_URL:
      process.env.BLOG_API_URL || process.env.NEXT_PUBLIC_BLOG_API_URL || "",
  },
};

export default nextConfig;
