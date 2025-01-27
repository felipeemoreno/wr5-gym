import { useContext } from "react"

import { AuthContext } from "@contexts/AuthContext"

export const useAuth = () => {
  const contextData = useContext(AuthContext)

  return contextData
}
