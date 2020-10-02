import React, { createContext, useContext, useState } from 'react'

const UserContext = createContext()

const useUser = () => {
  const context = useContext(UserContext)

  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider')
  }

  return context
}

const UserProvider = props => {
  const [user, setUser] = useState(null)

  return <UserContext.Provider value={{ user, setUser }} {...props} />
}

export { UserProvider, useUser }
