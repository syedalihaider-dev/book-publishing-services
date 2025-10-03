// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV === "development";

const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)", // sab routes pe apply hoga
        headers: [
          {
            key: "Content-Security-Policy",
            value: isDev
              ? "script-src 'self' 'unsafe-eval'; object-src 'none';"
              : "script-src 'self'; object-src 'none';",
          },
        ],
      },
    ];
  },
};

export default nextConfig;