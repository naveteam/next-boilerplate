const withPlugins = require('next-compose-plugins')
const withCSS = require('@zeit/next-css')
const withSourceMaps = require('@zeit/next-source-maps')
const SentryWebpackPlugin = require('@sentry/webpack-plugin')
const { version, name } = require('./package.json')

const nextConfig = {
  webpack: (config, options) => {
    config.node = {
      fs: 'empty'
    }

    if (!options.isServer) {
      config.resolve.alias['@sentry/node'] = '@sentry/browser'
    }

    if (process.env.NEXT_PUBLIC_NODE_ENV === 'production') {
      config.plugins.push(
        new SentryWebpackPlugin({
          authToken: process.env.SENTRY_AUTH_TOKEN,
          org: process.env.SENTRY_ORG,
          project: process.env.SENTRY_PROJECT,
          include: '.next',
          ignore: ['node_modules'],
          release: `${name}@${version}`,
          urlPrefix: '~/_next'
        })
      )
    }

    return config
  }
}

module.exports = withPlugins([withSourceMaps, withCSS], nextConfig)
