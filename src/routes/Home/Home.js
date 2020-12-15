import React, { Fragment } from 'react'
import Link from 'next/link'

import { Button } from 'components'

import { useAuth } from 'hooks'

const Home = () => {
  const { logout } = useAuth()

  return (
    <Fragment>
      <Button onClick={logout}>logout</Button>
      <Link href='/dashboard'>
        <a>GO TO DASHBOARD</a>
      </Link>
    </Fragment>
  )
}

export default Home
