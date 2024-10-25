import { VStack, Center, Image } from '@gluestack-ui/themed';

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
      </Center>

    </VStack>
  )
}

export default SignIn;