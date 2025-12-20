/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['admin.asianmotors.co.in'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'admin.asianmotors.co.in',
        port: '',
        pathname: '/assets/**',
      },
    ],
  },
};

export default nextConfig;
