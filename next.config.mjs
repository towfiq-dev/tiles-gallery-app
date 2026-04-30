/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '**',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'www.porcelainsuperstore.co.uk',
      },
      {
        protocol: 'https',
        hostname: 'www.finntiles.com.au',
      },
      {
        protocol: 'https',
        hostname: 'ceramicconnection.com',
      },
      {
        protocol: 'https',
        hostname: 'images.jdmagicbox.com',
      },
      {
        protocol: 'https',
        hostname: 'thumbs.dreamstime.com',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'c8.alamy.com',
      },
      {
        protocol: 'https',
        hostname: 'www.tileclub.com',
      },
      {
        protocol: 'https',
        hostname: 'tilemart.com',
      },
      {
        protocol: 'https',
        hostname: 'luxurytiles.co.uk',
      },
      {
        protocol: 'https',
        hostname: 'www.keramics.com',
      },
      {
        protocol: 'https',
        hostname: 'www.freepik.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
      },
      {
        protocol: 'https',
        hostname: 'img2.exportersindia.com',
      },
      {
        protocol: 'https',
        hostname: 'www.surfacesgalore.com',
      },
    ],
  },
};

export default nextConfig;
