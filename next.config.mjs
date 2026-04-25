/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Yeh line ESLint errors ko build ke waqt ignore karegi
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Yeh line Typescript errors ko ignore karegi
    ignoreBuildErrors: true,
  },
};

export default nextConfig;