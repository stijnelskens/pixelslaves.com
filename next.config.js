/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ['nl'],
    defaultLocale: 'nl',
  },
  images: {
    domains: [
      'res.cloudinary.com'
    ],
  },
}
