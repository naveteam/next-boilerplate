const withCSS = require('@zeit/next-css')

module.exports = withCSS({
  webpack: config => {
    config.node = {
      fs: 'empty'
    }

    return config
  },
  env: {
    API_URL: 'http://localhost:3000',
    NOVE_ENV: 'development',
    SENTRY_URL: 'some_url'
  }
})
