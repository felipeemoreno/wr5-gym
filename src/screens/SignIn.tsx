import { VStack, Center, Image, Text } from '@gluestack-ui/themed';

import BackgroundImg from '@assets/background.png';
import Logo from '@assets/logo.svg';

const SignIn: React.FC = () => {
  return (
    <VStack flex={1} bg="$gray700">
      <Image 
        source={BackgroundImg} 
        w="$full"
        h={624}
        defaultSource={BackgroundImg}
        alt="Pessoas treinando"
        position='absolute'
      />

      <Center my="$24">
        <Logo />

        <Text color="$gray100" fontSize="$sm">
          Treine sua mente e o seu corpo.
        </Text>
      </Center>

    </VStack>
  )
}

export default SignIn;