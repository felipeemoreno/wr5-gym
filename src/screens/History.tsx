import { HistoryCard } from "@components/HistoryCard"
import { ScreenHeader } from "@components/ScreenHeader"
import { Heading, SectionList, Text, VStack } from "@gluestack-ui/themed"
import { useState } from "react"

export type HistoryType = {
  title: string
  data: string[]
}

const History: React.FC = () => {
  const [exercises, setExercises] = useState<HistoryType[]>([
    {
      title: "22.12.2024",
      data: ["Puxada Frontal", "Remada unilateral"],
    },
    {
      title: "25.12.2024",
      data: ["Puxada Frontal"],
    },
  ])
  return (
    <VStack flex={1}>
      <ScreenHeader title="Histórico" />

      <SectionList
        sections={exercises}
        keyExtractor={(item) => item}
        renderItem={(item) => <HistoryCard history={item} />}
        renderSectionHeader={({ section }) => (
          <Heading
            fontFamily="$heading"
            color="$gray200"
            fontSize="$md"
            mt="$10"
            mb="$3"
          >
            {section.title}
          </Heading>
        )}
        style={{ paddingHorizontal: 32 }}
        contentContainerStyle={
          exercises.length === 0 && { flex: 1, justifyContent: "center" }
        }
        ListEmptyComponent={() => (
          <Text color="$gray200" fontSize="$md" textAlign="center">
            Não há exercício registados ainda. {"\n"} Vamos fazer exercícios
            hoje?
          </Text>
        )}
        showsVerticalScrollIndicator={false}
      />
    </VStack>
  )
}

export { History }
