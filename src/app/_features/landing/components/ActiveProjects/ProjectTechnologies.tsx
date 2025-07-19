"use client"
import * as C from "../../../shared/lib/chakraComponents"
import GlassTag from "../../../shared/components/GlassTag"

interface ProjectTechnologiesProps {
  technologies: string[]
}

export default function ProjectTechnologies({
  technologies,
}: ProjectTechnologiesProps) {
  return (
    <C.Box>
      <C.Heading
        fontSize={{ base: "lg", md: "xl" }}
        fontWeight="semibold"
        color="white"
        mb={4}
      >
        Technologies
      </C.Heading>
      <C.Flex gap={3} wrap="wrap">
        {technologies.map((tech, idx) => (
          <GlassTag key={idx}>{tech}</GlassTag>
        ))}
      </C.Flex>
    </C.Box>
  )
}
