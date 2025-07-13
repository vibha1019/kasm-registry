/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: 'out',
  env: {
    name: 'Kasm Technologies',
    description: 'Me testing something.',
    icon: 'https://vibha1019.github.io/kasm-registry/1.1/icon.png',
    listUrl: 'https://vibha1019.github.io/kasm-registry/',
    contactUrl: 'https://kasmweb.com/support',
  },
  reactStrictMode: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig;
