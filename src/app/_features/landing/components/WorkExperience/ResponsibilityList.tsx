"use client"
import * as C from "../../../shared/lib/chakraComponents"
import { Star } from "lucide-react"

interface ResponsibilityListProps {
  responsibilities: string[]
}

export default function ResponsibilityList({
  responsibilities,
}: ResponsibilityListProps) {
  return (
    <C.Box>
      <C.Heading
        fontSize={{ base: "lg", md: "xl" }}
        fontWeight="semibold"
        color="white"
        mb={4}
      >
        Responsibilities & Impact
      </C.Heading>
      <C.VStack align="stretch" gap={3}>
        {responsibilities.map((responsibility, idx) => {
          return (
            <C.Flex key={idx} align="flex-start" alignItems="center" gap={2}>
              <C.Box
                bg="rgba(255, 255, 255, 0.1)"
                border="1px solid rgba(255, 255, 255, 0.2)"
                borderRadius="full"
                p={1}
                backdropFilter="blur(10px)"
                mr={3}
                mt={0.5}
              >
                <Star
                  width={14}
                  height={14}
                  color="#22d3ee"
                  fill="rgba(34, 211, 238, 0.2)"
                />
              </C.Box>
              <C.Text
                color="gray.100"
                fontSize={{ base: "sm", md: "md" }}
                lineHeight="1.6"
                _hover={{
                  color: "white",
                }}
                transition="color 0.3s ease"
              >
                {responsibility}
              </C.Text>
            </C.Flex>
          )
        })}
      </C.VStack>
    </C.Box>
  )
}
