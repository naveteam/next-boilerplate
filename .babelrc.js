const commonPlugins = [
  '@babel/plugin-proposal-optional-chaining',
  ['styled-components', { ssr: true }],
  ['module-resolver', { root: ['./src'] }]
]
const productionPlugins = [['transform-remove-console', { exclude: ['error', 'warn'] }]]
const plugins = process.env.NOVE_ENV === 'production' ? [...commonPlugins, ...productionPlugins] : [...commonPlugins]

module.exports = {
  presets: ['next/babel'],
  plugins: [...plugins]
}
