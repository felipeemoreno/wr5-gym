import { createContext, useState } from "react"
import { UserDto } from "@dtos/UserDto"

export type AuthContextDataProps = {
  user: UserDto
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
  const [user, setUser] = useState<UserDto>({
    id: "1",
    name: "Felipe Moreno",
    email: "felipeestevaomoreno@gmail.com",
    avatar: "felipe.png",
  })
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  )
}
