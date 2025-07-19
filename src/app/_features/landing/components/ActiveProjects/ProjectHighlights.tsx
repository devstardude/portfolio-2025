"use client"
import * as C from "../../../shared/lib/chakraComponents"
import StarBulletPoint from "../../../shared/components/StarBulletPoint"

interface ProjectHighlightsProps {
  highlights: string[]
}

export default function ProjectHighlights({
  highlights,
}: ProjectHighlightsProps) {
  return (
    <C.Box>
      <C.Heading
        fontSize={{ base: "lg", md: "xl" }}
        fontWeight="semibold"
        color="white"
        mb={4}
      >
        Key Highlights
      </C.Heading>
      <C.VStack align="stretch" gap={3}>
        {highlights.map((highlight, idx) => (
          <StarBulletPoint
            key={idx}
            variant="yellow"
            fontSize={{ base: "sm", md: "md" }}
          >
            {highlight}
          </StarBulletPoint>
        ))}
      </C.VStack>
    </C.Box>
  )
}
