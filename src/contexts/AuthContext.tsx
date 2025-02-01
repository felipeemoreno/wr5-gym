import { createContext, useEffect, useState } from "react"
import { UserDto } from "@dtos/UserDto"
import { api } from "@services/api"
import {
  storageGetUser,
  storageRemoveUser,
  storageSaveUser,
} from "@storage/storageUser"

export type AuthContextDataProps = {
  user: UserDto
  signIn: (email: string, password: string) => Promise<void>
  signOut: () => Promise<void>
  isLoadingUserStorage: boolean
}

type AuthContextProviderProps = {
  children: React.ReactNode
}

export const AuthContext = createContext<AuthContextDataProps>(
  {} as AuthContextDataProps,
)

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
  children,
}) => {
  const [user, setUser] = useState<UserDto>({} as UserDto)
  const [isLoadingUserStorage, setIsLoadingUserStorage] = useState(false)

  const signIn = async (email: string, password: string) => {
    try {
      const { data } = await api.post("/sessions", { email, password })

      if (data.user) {
        setUser(data.user)
        storageSaveUser(data.user)
      }
    } catch (error) {
      throw error
    } finally {
      setIsLoadingUserStorage(false)
    }
  }

  const signOut = async () => {
    try {
      setIsLoadingUserStorage(true)

      setUser({} as UserDto)
      await storageRemoveUser()
    } catch (error) {
      throw error
    } finally {
      setIsLoadingUserStorage(false)
    }
  }

  const userLogged = async () => {
    const user = await storageGetUser()

    if (user) {
      setUser(user)
    }
  }

  useEffect(() => {
    userLogged()
  }, [])

  return (
    <AuthContext.Provider
      value={{ user, signIn, signOut, isLoadingUserStorage }}
    >
      {children}
    </AuthContext.Provider>
  )
}
