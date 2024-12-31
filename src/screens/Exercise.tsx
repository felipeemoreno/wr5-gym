import { ScrollView, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { ArrowLeft } from "lucide-react-native"

import {
  Heading,
  HStack,
  Icon,
  Text,
  VStack,
  Image,
  Box,
} from "@gluestack-ui/themed"
import { AppNavigatorRoutesProps } from "@routes/app.routes"

import BodySvg from "@assets/body.svg"
import SeriesSvg from "@assets/series.svg"
import RepetitionsSvg from "@assets/repetitions.svg"
import Button from "@components/Button"

export const Exercise: React.FC = () => {
  const navigation = useNavigation<AppNavigatorRoutesProps>()

  const handleGoBack = () => navigation.goBack()

  return (
    <VStack flex={1}>
      <VStack px="$8" bg="$gray500" pt="$12">
        <TouchableOpacity onPress={handleGoBack}>
          <Icon as={ArrowLeft} color="$green500" size="xl" />
        </TouchableOpacity>

        <HStack
          justifyContent="space-between"
          alignItems="center"
          mt="$4"
          mb="$8"
        >
          <Heading
            color="$gray100"
            fontFamily="$heading"
            fontSize="$lg"
            flexShrink={1}
          >
            Puxada Frontal
          </Heading>
          <HStack alignItems="center">
            <BodySvg />
            <Text color="$gray200" ml="$1" textTransform="capitalize">
              Costas
            </Text>
          </HStack>
        </HStack>
      </VStack>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 32 }}
      >
        <VStack p="$8">
          <Image
            source={{
              uri: "data:image/jpeg;base64,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",
            }}
            alt="Exercício"
            mb="$3"
            resizeMode="cover"
            rounded="$lg"
            w="$full"
            h="$80"
          />

          <Box bg="$gray600" rounded="$md" pb="$4">
            <HStack justifyContent="space-around" mb="$6" mt="$5">
              <HStack alignItems="center">
                <SeriesSvg />
                <Text color="$gray200" ml="$2">
                  3 séries
                </Text>
              </HStack>
              <HStack alignItems="center">
                <RepetitionsSvg />
                <Text color="$gray200" ml="$2">
                  12 repetições
                </Text>
              </HStack>
            </HStack>

            <Button title="Marcar como realizado" />
          </Box>
          <Box bg="$gray600" rounded="$md" pb="$4">
            <HStack justifyContent="space-around" mb="$6" mt="$5">
              <HStack alignItems="center">
                <SeriesSvg />
                <Text color="$gray200" ml="$2">
                  3 séries
                </Text>
              </HStack>
              <HStack alignItems="center">
                <RepetitionsSvg />
                <Text color="$gray200" ml="$2">
                  12 repetições
                </Text>
              </HStack>
            </HStack>

            <Button title="Marcar como realizado" />
          </Box>
        </VStack>
      </ScrollView>
    </VStack>
  )
}
