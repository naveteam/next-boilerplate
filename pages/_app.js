import React, { Fragment } from 'react'
import { createGlobalStyle } from 'styled-components'
import * as Sentry from '@sentry/browser'

import SEO from 'components/SEO'

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

const App = ({ Component, pageProps, image }) => (
  <Fragment>
    {console.log(image)}
    <GlobalStyle />
    <Theme>
      <SEO
        {...(image && {
          meta: [
            {
              name: 'og:image',
              content: image
            }
          ]
        })}
      />
      <Component {...pageProps} />
    </Theme>
  </Fragment>
)

App.getInitialProps = async ({ ctx }) => {
  console.log(ctx.query)
  if (!ctx.query.image) {
    return {}
  }

  return { image: ctx.query.image }
}

export default App
