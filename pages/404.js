import React from 'react'
import { useRouter } from 'next/router'

import Loader from 'components/Loader'

import { PUBLIC_ROUTES } from 'helpers'

const ErrorPage = () => {
  const router = useRouter()

  router.push(PUBLIC_ROUTES[0])

  return <Loader />
}

export default ErrorPage
