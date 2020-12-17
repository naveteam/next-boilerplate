import React from 'react'
import { createGlobalStyle } from 'styled-components'
import * as Sentry from '@sentry/node'

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

if (process.env.NEXT_PUBLIC_NODE_ENV === 'production') {
  Sentry.init({
    dsn: process.env.NEXT_PUBLIC_SENTRY_URL,
    environment: process.env.NEXT_PUBLIC_NODE_ENV,
    debug: process.env.NEXT_PUBLIC_NODE_ENV !== 'production',
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
