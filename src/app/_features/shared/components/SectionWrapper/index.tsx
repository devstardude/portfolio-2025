"use client"
import { ReactNode } from "react"
import { LucideIcon } from "lucide-react"
import * as C from "../../lib/chakraComponents"

interface SectionWrapperProps {
  title: string
  Icon: LucideIcon
  iconColor: string
  bgColor?: string
  description?: string
  children: ReactNode
}

export default function SectionWrapper({
  title,
  Icon,
  iconColor,
  bgColor,
  description,
  children,
}: SectionWrapperProps) {
  return (
    <C.Box
      minH="100vh"
      w="full"
      color="gray.300"
      py={{ base: 16, md: 20 }}
      px={{ base: 4, md: 8 }}
      bg={bgColor}
    >
      <C.Container maxW="6xl" mx="auto">
        {/* Section Header */}
        <C.Box textAlign="center" mb={12}>
          <C.Flex align="center" justify="center" gap={4} mb={4}>
            <Icon width={48} height={48} color={iconColor} />
            <C.Heading
              fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
              fontWeight="bold"
              color="white"
              textShadow="0 0 30px rgba(255, 255, 255, 0.3)"
              letterSpacing="tight"
            >
              {title}
            </C.Heading>
          </C.Flex>

          {description && (
            <C.Text
              fontSize={{ base: "lg", md: "xl" }}
              color="gray.300"
              maxW="2xl"
              mx="auto"
              lineHeight="1.6"
            >
              {description}
            </C.Text>
          )}
        </C.Box>

        {/* Content */}
        {children}
      </C.Container>
    </C.Box>
  )
}
