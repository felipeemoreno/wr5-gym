import { StatusBar } from 'react-native';
import {
useFonts,
Roboto_400Regular,
Roboto_700Bold
} from "@expo-google-fonts/roboto";
import * as Sentry from '@sentry/react-native';
import { GluestackUIProvider, Text, Center } from "@gluestack-ui/themed"
import { config } from './config/gluestack-ui.config';
import Loading from '@components/Loading';
import SignIn from '@screens/SignIn';

Sentry.init({
  dsn: 'https://ecda728938f0183ab0891c2fd347f654@o4503938919563264.ingest.us.sentry.io/4508177666080768',
  defaultIntegrations: false

  // uncomment the line below to enable Spotlight (https://spotlightjs.com)
  // enableSpotlight: __DEV__,
});

export default function App() {

  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <GluestackUIProvider config={config}>

        <StatusBar barStyle="light-content"  backgroundColor="transparent"/>
        {fontsLoaded ? (
          <SignIn />
        ) : (
          <Loading />
        )}

    </GluestackUIProvider>
  );
}