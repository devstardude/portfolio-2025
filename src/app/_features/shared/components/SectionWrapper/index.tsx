"use client"
import { ReactNode } from "react"
import { LucideIcon } from "lucide-react"
import * as C from "../../lib/chakraComponents"

interface SectionWrapperProps {
  title: string
  Icon: LucideIcon
  iconColor: string
  titleColor: string
  bgColor?: string
  description?: string
  children: ReactNode
}

export default function SectionWrapper({
  title,
  Icon,
  iconColor,
  titleColor,
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
        <C.VStack align="center" mb={12} gap={4}>
          <C.Flex align="center" justify="center" gap={4}>
            <Icon width={48} height={48} color={iconColor} />
            <C.Heading
              fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
              fontWeight="bold"
              color={titleColor}
              textAlign="center"
            >
              {title}
            </C.Heading>
          </C.Flex>

          {description && (
            <C.Text
              fontSize={{ base: "lg", md: "xl" }}
              color="gray.400"
              textAlign="center"
              maxW="2xl"
              lineHeight="1.6"
            >
              {description}
            </C.Text>
          )}
        </C.VStack>

        {/* Content */}
        {children}
      </C.Container>
    </C.Box>
  )
}
