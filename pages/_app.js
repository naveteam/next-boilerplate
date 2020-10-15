import React from 'react'
import { createGlobalStyle } from 'styled-components'
import * as Sentry from '@sentry/browser'

import PageWrapper from 'components/PageWrapper'

import AppProviders from 'context'

import Theme from 'theme'

import { version, name } from '../package.json'

const GlobalStyle = createGlobalStyle`
* {
  border: 0;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  outline: none;
}

button, a {
  cursor: pointer;
  &:disabled{
    cursor: not-allowed;
  }
}
`

if (process.env.PROCESS_NODE_ENV === 'production') {
  Sentry.init({
    dsn: process.env.SENTRY_URL,
    environment: process.env.PROCESS_NODE_ENV,
    debug: process.env.PROCESS_NODE_ENV !== 'prodution',
    release: `${name}@${version}`
  })
}

const App = ({ Component, pageProps }) => (
  <AppProviders>
    <GlobalStyle />
    <Theme>
      <PageWrapper>
        <Component {...pageProps} />
      </PageWrapper>
    </Theme>
  </AppProviders>
)

export default App
