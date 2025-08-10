"use client"
import * as C from "../../../shared/lib/chakraComponents"
import GradientWrapper from "../../../shared/components/GradientWrapper"
import GlassTag from "../../../shared/components/GlassTag"
import StarBulletPoint from "../../../shared/components/StarBulletPoint"
import HyperlinkItem from "../../../shared/components/HyperlinkItem"
import { Calendar } from "lucide-react"

interface CompactProject {
  title: string
  description: string
  image: string
  highlights: string[]
  tech: string[]
  link?: string
  period?: string
  status?: string
}

interface CompactProjectCardProps {
  project: CompactProject
}

export default function CompactProjectCard({
  project,
}: CompactProjectCardProps) {
  return (
    <GradientWrapper>
      <C.Box position="relative">
        <C.Box
          position="absolute"
          top={0}
          right={0}
          w={{ base: "110px", md: "160px" }}
          h={{ base: "72px", md: "100px" }}
          borderRadius="xl"
          overflow="hidden"
          border="1px solid"
          borderColor="rgba(6, 182, 212, 0.2)"
          bg="rgba(0,0,0,0.3)"
          backdropFilter="blur(10px)"
          zIndex={10}
        >
          <C.ChakraImage
            src={project.image}
            alt={project.title}
            w="100%"
            h="100%"
            objectFit="cover"
            loading="lazy"
          />
        </C.Box>

        <C.VStack
          align="start"
          gap={3}
          mb={2}
          pr={{ base: 28, md: 44 }}
          borderBottom="1px solid"
          borderBottomColor="rgba(6, 182, 212, 0.1)"
          pb={6}
        >
          <C.Flex gap={3} flexDir="column" wrap="wrap">
            <C.Heading color="green.300" fontSize={{ base: "2xl", md: "3xl" }}>
              {project.title}
            </C.Heading>
            <C.Flex gap={2} alignItems="center">
              {project.status && (
                <C.Badge
                  px={3}
                  py={1}
                  bg="linear-gradient(135deg, #10b981, #059669)"
                  color="white"
                  borderRadius="full"
                  fontSize="sm"
                  fontWeight="bold"
                  border="1px solid rgba(255,255,255,0.2)"
                >
                  {project.status}
                </C.Badge>
              )}
              {project.link && (
                <HyperlinkItem href={project.link} color="green" />
              )}
            </C.Flex>
          </C.Flex>
          <C.Text color="gray.300" fontSize={{ base: "sm", md: "md" }}>
            {project.description}
          </C.Text>
          {project.period && (
            <C.Flex align="center" gap={2} color="gray.400">
              <Calendar width={16} height={16} />
              <C.Text fontSize="sm">{project.period}</C.Text>
            </C.Flex>
          )}
        </C.VStack>

        <C.Box mt={6}>
          <C.Heading
            fontSize={{ base: "md", md: "lg" }}
            fontWeight="semibold"
            color="white"
            mb={2}
          >
            Highlights
          </C.Heading>
          <C.VStack align="stretch" gap={2}>
            {project.highlights.map((item, idx) => (
              <StarBulletPoint
                key={idx}
                variant="yellow"
                fontSize={{ base: "sm", md: "sm" }}
              >
                {item}
              </StarBulletPoint>
            ))}
          </C.VStack>
        </C.Box>

        <C.Box mt={6}>
          <C.Text
            color="white"
            fontWeight="semibold"
            mb={2}
            fontSize={{ base: "md", md: "lg" }}
          >
            Tech
          </C.Text>
          <C.Flex gap={3} wrap="wrap">
            {project.tech.map((t, i) => (
              <GlassTag key={i}>{t}</GlassTag>
            ))}
          </C.Flex>
        </C.Box>
      </C.Box>
    </GradientWrapper>
  )
}
