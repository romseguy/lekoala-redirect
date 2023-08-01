/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://lebonforum.fr',
        permanent: true,
      },
    ];
  }
}

module.exports = nextConfig
