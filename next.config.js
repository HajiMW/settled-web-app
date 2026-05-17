/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['image.tmdb.org', 'maps.googleapis.com', 'cf.geekdo-images.com', 'media.rawg.io'],
  },
};

module.exports = nextConfig;
