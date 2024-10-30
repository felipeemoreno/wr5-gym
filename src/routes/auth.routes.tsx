import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack"
import { SignIn } from "@screens/SignIn"
import { SignUp } from "@screens/SignUp"

type AuthRoutesType = {
  SignIn: undefined
  SignUp: undefined
}

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutesType>

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutesType>()

const AuthRoutes: React.FC = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="SignIn" component={SignIn} />
      <Screen name="SignUp" component={SignUp} />
    </Navigator>
  )
}

export default AuthRoutes
