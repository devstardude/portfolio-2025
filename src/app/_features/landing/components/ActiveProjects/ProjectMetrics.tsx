"use client"
import * as C from "../../../shared/lib/chakraComponents"
import { Users, Star, TrendingUp } from "lucide-react"

interface ProjectMetricsProps {
  metrics: Array<{
    label: string
    value: string
    icon: React.ReactNode
  }>
}

export default function ProjectMetrics({ metrics }: ProjectMetricsProps) {
  return (
    <C.Box>
      <C.SimpleGrid columns={{ base: 2, md: 4 }} gap={4}>
        {metrics.map((metric, idx) => (
          <C.Box
            key={idx}
            bg="rgba(255, 255, 255, 0.01)"
            border="1px solid"
            borderColor="rgba(6, 182, 212, 0.15)"
            borderRadius="xl"
            p={4}
            textAlign="center"
            backdropFilter="blur(15px)"
            boxShadow="0 4px 16px rgba(0, 0, 0, 0.1)"
            _hover={{
              bg: "rgba(255, 255, 255, 0.03)",
              borderColor: "cyan.400",
              transform: "translateY(-2px)",
              boxShadow: "0 6px 20px rgba(6, 182, 212, 0.2)",
              backdropFilter: "blur(20px)",
            }}
            transition="all 0.3s ease"
          >
            <C.Flex justify="center" mb={2}>
              {metric.label === "Active Users" && (
                <Users width={24} height={24} color="#06b6d4" />
              )}
              {metric.label === "Shared Memories" && (
                <Star width={24} height={24} color="#06b6d4" />
              )}
              {metric.label === "Monthly Views" && (
                <TrendingUp width={24} height={24} color="#06b6d4" />
              )}
              {metric.label === "Unique Visitors" && (
                <Users width={24} height={24} color="#06b6d4" />
              )}
            </C.Flex>
            <C.Text
              fontSize={{ base: "xl", md: "2xl" }}
              fontWeight="bold"
              color="white"
              mb={1}
            >
              {metric.value}
            </C.Text>
            <C.Text fontSize="sm" color="gray.400">
              {metric.label}
            </C.Text>
          </C.Box>
        ))}
      </C.SimpleGrid>
    </C.Box>
  )
}
