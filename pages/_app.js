import React, { Fragment } from 'react'
import { createGlobalStyle } from 'styled-components'

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

if (process.env.NODE_ENV === 'production') {
  Sentry.init({
    dsn: process.env.SENTRY_URL,
    environment: process.env.NODE_ENV,
    debug: process.env.NODE_ENV !== 'prodution',
    release: `${name}@${version}`
  })
}

const App = ({ Component, pageProps }) => (
  <Fragment>
    <GlobalStyle />
    <Theme>
      <Component {...pageProps} />
    </Theme>
  </Fragment>
)

export default App
