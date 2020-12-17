import * as Sentry from '@sentry/node'

import { getUser } from 'services/auth'
import { getToken } from 'helpers'

const bootstrapAppData = async () => {
  const token = getToken()

  if (!token) {
    return { user: null }
  }

  const user = await getUser()

  if (process.env.NEXT_PUBLIC_NODE_ENV === 'production') {
    Sentry.configureScope(scope =>
      scope.setUser({
        // Adicionar outras informações relevantes do usuários
        email: user.email
      })
    )
  }

  if (!user) {
    return { user: null }
  }

  return { user }
}

export { bootstrapAppData }
