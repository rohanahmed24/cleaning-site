/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    domains: ['images.unsplash.com', 'images.pexels.com'],
    unoptimized: true
  },
  async redirects() {
    return [
      {
        source: '/services/post-construction-cleaning',
        destination: '/services/post-construction',
        permanent: true,
      },
      {
        source: '/services/part-orientation-cleaning',
        destination: '/services/post-construction',
        permanent: true,
      },
      {
        source: '/post-construction-cleaning',
        destination: '/services/post-construction',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
