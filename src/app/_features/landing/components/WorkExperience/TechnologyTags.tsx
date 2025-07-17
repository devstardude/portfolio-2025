"use client"
import * as C from "../../../shared/lib/chakraComponents"

interface TechnologyTagsProps {
  technologies: string[]
}

export default function TechnologyTags({ technologies }: TechnologyTagsProps) {
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
      <C.Flex wrap="wrap" gap={2}>
        {technologies.map((tech, idx) => (
          <C.Badge
            key={idx}
            px={3}
            py={1}
            bg="rgba(255, 255, 255, 0.05)"
            color="gray.200"
            border="1px solid"
            borderColor="rgba(255, 255, 255, 0.2)"
            borderRadius="md"
            fontSize="sm"
            fontWeight="medium"
            backdropFilter="blur(10px)"
            _hover={{
              transform: "translateY(-1px)",
              bg: "rgba(255, 255, 255, 0.1)",
              borderColor: "rgba(255, 255, 255, 0.3)",
              boxShadow: "0 4px 12px rgba(255, 255, 255, 0.1)",
            }}
            transition="all 0.3s ease"
          >
            {tech}
          </C.Badge>
        ))}
      </C.Flex>
    </C.Box>
  )
}
