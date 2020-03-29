const withCSS = require('@zeit/next-css')

module.exports = withCSS({
  webpack: config => {
    config.node = {
      fs: 'empty'
    }

    return config
  },
  env: {
    API_URL: 'http://ec2-18-228-238-180.sa-east-1.compute.amazonaws.com:3000',
    NOVE_ENV: 'development',
    SENTRY_URL: 'https://f796610d95c44ce8848a7d0c48b467c5@sentry.io/5176158'
  }
})
