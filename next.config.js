const isDev = process.env.NODE_ENV === "development";

const nextConfig = {
  async headers() {
    if (isDev) return []; // dev me no CSP
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "script-src 'self'; object-src 'none';",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;