import { Center, Spinner } from '@gluestack-ui/themed';
import React from 'react';
import { View } from 'react-native';

// import { Container } from './styles';

const Loading: React.FC = () => {
  return (
    <Center flex={1} bg="$gray700">
      <Spinner color="$green500" />
    </Center>
  )
}

export default Loading;