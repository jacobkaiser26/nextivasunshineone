/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.sunshineonellc.com',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  exclude: ['/work', '/pricing'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/work', '/pricing'],
      },
    ],
  },
}
