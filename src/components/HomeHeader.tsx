import React from "react"
import { Heading, HStack, Text, VStack, Icon } from "@gluestack-ui/themed"

import UserPhoto from "./UserPhoto"
import { LogOut } from "lucide-react-native"

const HomeHeader: React.FC = () => {
  return (
    <HStack bg="$gray600" pt="$16" pb="$5" px="$8" alignItems="center" gap="$2">
      <UserPhoto
        source={{ uri: "https://github.com/felipeemoreno.png" }}
        w="$16"
        h="$16"
        alt="Imagem do usuário"
      />
      <VStack flex={1}>
        <Text color="$gray100" fontSize="$sm">
          Olá,
        </Text>
        <Heading color="$gray100" fontSize="$md">
          Felipe Moreno
        </Heading>
      </VStack>
      <Icon as={LogOut} color="$gray200" size="xl" />
    </HStack>
  )
}

export default HomeHeader
