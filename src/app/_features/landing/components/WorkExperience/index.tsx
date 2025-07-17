"use client"
import * as C from "../../../shared/lib/chakraComponents"
import { experiences } from "../../../shared/data/Content"
import { Building } from "lucide-react"
import ExperienceCard from "./ExperienceCard"
import { theme } from "@/_features/shared/lib/globalTheme"

export default function WorkExperience() {
  return (
    <C.Box
      minH="100vh"
      w="full"
      color="gray.300"
      py={{ base: 16, md: 20 }}
      px={{ base: 4, md: 8 }}
      bg="rgba(0, 136, 255, 0.05)"
    >
      <C.Container maxW="6xl" mx="auto">
        {/* Section Header */}
        <C.Flex align="center" mb={12} justify="center" gap={2}>
          <Building
            width={48}
            height={48}
            color={theme.token("colors.red.400")}
          />
          <C.Heading
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            fontWeight="bold"
            color="red.400"
            textAlign="center"
          >
            Work Experience
          </C.Heading>
        </C.Flex>

        {/* Experience Cards */}
        <C.VStack gap={8} align="stretch">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </C.VStack>
      </C.Container>
    </C.Box>
  )
}
