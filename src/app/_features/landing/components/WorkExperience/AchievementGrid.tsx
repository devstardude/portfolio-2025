"use client"
import * as C from "../../../shared/lib/chakraComponents"

interface AchievementGridProps {
  achievements: string[]
}

export default function AchievementGrid({
  achievements,
}: AchievementGridProps) {
  return (
    <C.Box>
      <C.Heading
        fontSize={{ base: "lg", md: "xl" }}
        fontWeight="semibold"
        color="white"
        mb={4}
      >
        Key Achievements
      </C.Heading>
      <C.SimpleGrid
        columns={{
          base: 1,
          sm: 2,
          md: 3,
          lg: achievements.length >= 3 ? 3 : achievements.length,
        }}
        gap={3}
      >
        {achievements.map((achievement, idx) => (
          <C.Flex
            key={idx}
            bg="linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(5, 150, 105, 0.15))"
            border="1px solid"
            borderColor="green.500"
            borderRadius="lg"
            p={3}
            textAlign="center"
            position="relative"
            _hover={{
              transform: "translateY(-2px)",
              boxShadow: "0 8px 25px rgba(16, 185, 129, 0.4)",
              borderColor: "green.400",
            }}
            transition="all 0.3s ease"
            alignItems="center"
            justifyContent="center"
          >
            <C.Text
              fontWeight="medium"
              color="green.200"
              fontSize={{ base: "sm", md: "sm" }}
              lineHeight="1.4"
            >
              {achievement}
            </C.Text>
          </C.Flex>
        ))}
      </C.SimpleGrid>
    </C.Box>
  )
}
