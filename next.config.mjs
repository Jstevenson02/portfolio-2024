/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["@react-pdf/renderer"],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/links",
        permanent: true, // Use `true` for 301 (permanent) redirects or `false` for 302 (temporary) redirects
      },
    ];
  },
};

export default nextConfig;
