import { Center, Spinner } from '@gluestack-ui/themed';

const Loading: React.FC = () => {
  return (
    <Center flex={1} bg="$gray700">
      <Spinner color="$green500" />
    </Center>
  )
}

export default Loading;