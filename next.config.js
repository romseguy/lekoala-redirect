/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://lekoala.netlify.app',
        permanent: true,
      },
    ];
  }
}

module.exports = nextConfig
