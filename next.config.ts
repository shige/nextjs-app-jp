import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/jp/:path*',
        headers: [
          {
            key: 'X-JP-App',
            value: 'true',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
