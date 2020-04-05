import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAsync } from 'react-async'

import { useUser } from 'context/user-context'

import { bootstrapAppData, PRIVATE_ROUTES, PUBLIC_ROUTES } from 'helpers'

import Loader from 'components/Loader'

const PageWrapper = ({ children }) => {
  const [firstAttemptFinished, setFirstAttemptFinished] = useState(false)
  const { data = { user: null }, error, isRejected, isSettled } = useAsync({
    promiseFn: bootstrapAppData
  })

  const router = useRouter()

  const { setUser } = useUser()

  useEffect(() => {
    const onFinishedRequest = async () => {
      if (!isSettled) {
        return
      }

      if (data.user) {
        setUser(data.user)

        if (PUBLIC_ROUTES.includes(router.pathname)) {
          await router.push(PRIVATE_ROUTES[0])
        }

        return setFirstAttemptFinished(true)
      }

      setUser(null)
      if (PRIVATE_ROUTES.includes(router.pathname)) {
        await router.push(PUBLIC_ROUTES[0])
      }

      return setFirstAttemptFinished(true)
    }

    onFinishedRequest()
  }, [isSettled])

  if (!firstAttemptFinished) {
    if (isRejected) {
      return (
        <div css={{ color: 'red' }}>
          <p>Uh oh... There's a problem. Try refreshing the app.</p>
          <pre>{error.message}</pre>
        </div>
      )
    }

    return <Loader />
  }

  return children
}

export default PageWrapper
