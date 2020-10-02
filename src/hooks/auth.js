import { useCallback } from 'react'
import { useRouter } from 'next/router'

import { login as authLogin } from 'services/auth'
import { setToken, clearToken, PUBLIC_ROUTES, PRIVATE_ROUTES } from 'helpers'

export const useAuth = () => {
  const router = useRouter()

  const login = useCallback(async data => {
    try {
      const { token, ...user } = await authLogin(data)
      setToken(token)
      router.push(PRIVATE_ROUTES[0])

      return { user }
    } catch (error) {
      console.log(error)
      return Promise.reject(error)
    }
  }, [])

  const logout = useCallback(() => {
    clearToken()
    router.push(PUBLIC_ROUTES[0])
  }, [])

  return { login, logout }
}
