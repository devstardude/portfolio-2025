"use client"
import * as C from "../../../shared/lib/chakraComponents"
import { Award } from "lucide-react"

interface AchievementItemProps {
  achievement: {
    text: string
    highlight: string
  }
}

export default function AchievementItem({ achievement }: AchievementItemProps) {
  return (
    <C.Box
      bg="rgba(255, 255, 255, 0.03)"
      backdropFilter="blur(20px)"
      border="1px solid"
      borderColor="rgba(255, 255, 255, 0.1)"
      borderRadius="lg"
      p={{ base: 4, md: 6 }}
      position="relative"
      overflow="hidden"
      cursor="pointer"
      style={{
        transition: "all 0.4s ease",
      }}
      _hover={{
        bg: "rgba(251, 191, 36, 0.08)",
        borderColor: "#fbbf24",
        transform: "translateY(-4px)",
        boxShadow: "0 10px 30px rgba(251, 191, 36, 0.15)",
      }}
    >
      <C.Flex gap={4} align="flex-start">
        {/* Award Icon */}
        <C.Box
          flexShrink={0}
          p={3}
          borderRadius="full"
          bg="rgba(251, 191, 36, 0.1)"
          border="1px solid rgba(251, 191, 36, 0.2)"
          backdropFilter="blur(10px)"
          _hover={{
            bg: "rgba(251, 191, 36, 0.15)",
            borderColor: "rgba(251, 191, 36, 0.4)",
            transform: "scale(1.05)",
          }}
          style={{
            transition: "all 0.3s ease",
          }}
        >
          <Award
            width={24}
            height={24}
            color="#fbbf24"
            style={{
              filter: "drop-shadow(0 0 12px rgba(251, 191, 36, 0.6))",
              transition: "filter 0.3s ease",
            }}
          />
        </C.Box>

        {/* Achievement Text */}
        <C.Box flex="1">
          <C.Text
            fontSize={{ base: "md", md: "lg" }}
            color="gray.300"
            lineHeight="1.6"
            _hover={{ color: "gray.100" }}
            style={{
              transition: "color 0.3s ease",
            }}
          >
            {achievement.text}{" "}
            <C.Text
              as="span"
              color="cyan.300"
              fontWeight="semibold"
              textShadow="0 0 10px rgba(34, 211, 238, 0.3)"
              _hover={{
                color: "cyan.200",
                textShadow: "0 0 15px rgba(34, 211, 238, 0.5)",
              }}
              style={{
                transition: "all 0.3s ease",
              }}
            >
              {achievement.highlight}
            </C.Text>
            .
          </C.Text>
        </C.Box>
      </C.Flex>
    </C.Box>
  )
}
