import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false, // Security: Removes X-Powered-By header to prevent server fingerprinting
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY" // Prevents clickjacking by blocking iframe embedding
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff" // Blocks MIME-type sniffing
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin" // Safeguards referrer data
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()" // Disables unauthorized device APIs
          },
          {
            key: "X-DNS-Prefetch-Control",
            value: "on"
          }
        ]
      }
    ];
  }
};

export default nextConfig;
