import { Heading, HStack, Text, VStack } from "@gluestack-ui/themed"
import { HistoryType } from "@screens/History"

type Props = {
  history: HistoryType
}

export const HistoryCard: React.FC<Props> = ({ history }) => {
  return (
    <HStack
      px="$5"
      py="$4"
      mb="$3"
      bg="$gray600"
      rounded="$md"
      justifyContent="space-between"
      alignItems="center"
    >
      <VStack flex={1} mr="$5">
        <Heading
          color="$white"
          fontSize="$md"
          textTransform="capitalize"
          fontFamily="$heading"
          numberOfLines={1}
        >
          {/* {history.group} */}
          Treino
        </Heading>
        <Text color="$gray100" fontSize="$lg" numberOfLines={1}>
          {/* {history.title} */}
          Puxada
        </Text>
      </VStack>
      <Text color="$gray300" fontSize="$md">
        {/* {history.hour} */}
        10:50
      </Text>
    </HStack>
  )
}
