import { NavigationContainer, DefaultTheme } from "@react-navigation/native"

import AppRoutes from "./app.routes"
import AuthRoutes from "./auth.routes"
import { useAuth } from "../hooks/useAuth"

import { gluestackUIConfig } from "../../config/gluestack-ui.config"
import { Box } from "@gluestack-ui/themed"
import Loading from "@components/Loading"

const Routes: React.FC = () => {
  const { user, isLoadingUserStorage } = useAuth()

  const theme = DefaultTheme
  theme.colors.background = gluestackUIConfig.tokens.colors.gray700

  if (isLoadingUserStorage) {
    return <Loading />
  }

  return (
    <Box flex={1} bg="$gray700">
      <NavigationContainer theme={theme}>
        {user.id ? <AppRoutes /> : <AuthRoutes />}
      </NavigationContainer>
    </Box>
  )
}

export default Routes
