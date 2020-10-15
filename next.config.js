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
    PROCESS_NODE_ENV: process.env.PROCESS_NODE_ENV,
    SENTRY_URL: process.env.SENTRY_URL
  }
})
