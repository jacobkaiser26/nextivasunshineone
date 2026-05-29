/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/work", destination: "/", permanent: false },
      { source: "/pricing", destination: "/", permanent: false },
    ];
  },
};

export default nextConfig;
