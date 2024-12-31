import React, { useState } from "react"
import { useNavigation } from "@react-navigation/native"
import { FlatList, Heading, HStack, VStack, Text } from "@gluestack-ui/themed"

import { HomeHeader } from "@components/HomeHeader"
import { Group } from "@components/Group"
import { ExerciseCard } from "@components/ExerciseCard"
import { AppNavigatorRoutesProps } from "@routes/app.routes"

export const Home: React.FC = () => {
  const [exercises, setExercises] = useState<string[]>([
    "Barra fixa",
    "Rosca direta",
    "Tríceps testa",
    "Desenvolvimento",
  ])
  const [groups, setGroups] = useState<string[]>([
    "Costas",
    "Bíceps",
    "Tríceps",
    "Ombro",
  ])
  const [groupSelected, setGroupSelected] = useState("Costas")

  const navigation = useNavigation<AppNavigatorRoutesProps>()

  const handleOpenExerciseDetails = () => {
    navigation.navigate("exercise")
  }
  return (
    <>
      <VStack flex={1}>
        <HomeHeader />

        <HStack>
          <FlatList
            data={groups}
            keyExtractor={(item, index) => String(index)}
            renderItem={({ item }) => (
              <Group
                name={item}
                isActive={
                  groupSelected.toLocaleLowerCase() === item.toLocaleLowerCase()
                }
                onPress={() => setGroupSelected(item)}
              />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 32 }}
            style={{ marginVertical: 40, maxHeight: 44, minHeight: 44 }}
          />
        </HStack>
        <VStack px="$8">
          <HStack justifyContent="space-between" alignItems="center">
            <Heading color="$gray200" fontSize="$md" fontFamily="$heading">
              Exercícios
            </Heading>

            <Text color="$gray200" fontSize="$sm" fontFamily="$body">
              {exercises.length}
            </Text>
          </HStack>

          <FlatList
            data={exercises}
            keyExtractor={(item, index) => String(index)}
            renderItem={() => (
              <ExerciseCard onPress={handleOpenExerciseDetails} />
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 16 }}
          />
        </VStack>
      </VStack>
    </>
  )
}
