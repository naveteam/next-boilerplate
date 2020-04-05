const withCSS = require('@zeit/next-css')
require('dotenv').config()

module.exports = withCSS({
  webpack: config => {
    config.node = {
      fs: 'empty'
    }

    return config
  },
  env: {
    API_URL: process.env.API_URL,
    NOVE_ENV: process.env.NODE_ENV,
    SENTRY_URL: process.env.SENTRY_URL
  }
})
