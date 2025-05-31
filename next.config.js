/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://romseguy.com',
        permanent: true,
      },
    ];
  }
}

module.exports = nextConfig
