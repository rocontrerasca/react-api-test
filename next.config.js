/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    CLIENT_ID: "eb1bfd8ee82b4ddb95a20d93276c0088",
    CLIENT_SECRET: "e64e6ce586844acabd9d9e8ce5fc39a0"
  },
  images: {
    domains: ['i.scdn.co', 't.scdn.co', 'images.unsplash.com', 'charts-images.scdn.co', 'avatars.dicebear.com',
      'images-ak.spotifycdn.com', 'thisis-images.scdn.co', 'www.constructorabolivar.com']
  }
}

module.exports = nextConfig
