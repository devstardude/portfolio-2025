"use client"
import * as C from "../../../shared/lib/chakraComponents"
import { Calendar } from "lucide-react"
import ProjectMetrics from "./ProjectMetrics"
import ProjectCommunity from "./ProjectCommunity"
import ProjectTechnologies from "./ProjectTechnologies"
import ProjectHighlights from "./ProjectHighlights"
import GradientWrapper from "../../../shared/components/GradientWrapper"

interface ProjectCardProps {
  project: {
    title: string
    description: string
    period: string
    status: string
    image: string
    metrics: Array<{
      label: string
      value: string
      icon: React.ReactNode
    }>
    community: Array<{
      platform: string
      followers?: string
      members?: string
    }>
    tech: string[]
    highlights: string[]
  }
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <GradientWrapper>
      <C.Box position="relative">
        {/* Project Image - Top Right Corner */}
        <C.Box
          position="absolute"
          top={0}
          right={0}
          w={{ base: "120px", md: "200px" }}
          h={{ base: "80px", md: "120px" }}
          borderRadius="xl"
          overflow="hidden"
          border="1px solid"
          borderColor="rgba(6, 182, 212, 0.2)"
          bg="rgba(0, 0, 0, 0.3)"
          backdropFilter="blur(10px)"
          zIndex={10}
          _hover={{
            transform: "scale(1.02)",
            borderColor: "cyan.400",
            boxShadow: "0 8px 32px rgba(6, 182, 212, 0.3)",
          }}
          transition="all 0.3s ease"
        >
          <C.ChakraImage
            src={project.image}
            alt={project.title}
            w="100%"
            h="100%"
            objectFit="cover"
            loading="lazy"
          />
          <C.Box
            position="absolute"
            top={0}
            left={0}
            w="100%"
            h="100%"
            bg="linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(239, 68, 68, 0.1))"
            opacity={0}
            _hover={{ opacity: 1 }}
            transition="opacity 0.3s ease"
          />
        </C.Box>

        {/* Project Header */}
        <C.Box
          mb={8}
          pb={6}
          borderBottom="1px solid"
          borderBottomColor="rgba(6, 182, 212, 0.1)"
          position="relative"
          pr={{ base: "130px", md: "220px" }}
          _after={{
            content: '""',
            position: "absolute",
            bottom: "-1px",
            left: "0",
            width: "60px",
            height: "2px",
            bg: "linear-gradient(90deg, cyan.400, cyan.600)",
            borderRadius: "full",
          }}
        >
          <C.Flex align="center" gap={4} mb={3}>
            <C.Heading
              fontSize={{ base: "2xl", md: "3xl" }}
              fontWeight="bold"
              color="white"
              textShadow="0 0 10px rgba(255, 255, 255, 0.2)"
            >
              {project.title}
            </C.Heading>
            <C.Badge
              px={4}
              py={2}
              bg="linear-gradient(135deg, #10b981, #059669)"
              color="white"
              borderRadius="full"
              fontSize="sm"
              fontWeight="bold"
              border="1px solid rgba(255, 255, 255, 0.2)"
              boxShadow="0 0 20px rgba(16, 185, 129, 0.4)"
            >
              {project.status}
            </C.Badge>
          </C.Flex>
          <C.Text
            fontSize={{ base: "md", md: "lg" }}
            color="gray.300"
            lineHeight="1.6"
            mb={3}
          >
            {project.description}
          </C.Text>
          <C.Flex align="center" gap={2} color="gray.400">
            <Calendar width={16} height={16} />
            <C.Text fontSize="sm">{project.period}</C.Text>
          </C.Flex>
        </C.Box>

        {/* Metrics Section */}
        <C.Box mb={6}>
          <ProjectMetrics metrics={project.metrics} />
        </C.Box>

        {/* Two-Column Layout for remaining content */}
        <C.SimpleGrid columns={{ base: 1, lg: 2 }} gap={6}>
          {/* Left Column */}
          <C.VStack gap={6} align="stretch">
            <ProjectCommunity community={project.community} />
            <ProjectTechnologies technologies={project.tech} />
          </C.VStack>

          {/* Right Column */}
          <C.Box>
            <ProjectHighlights highlights={project.highlights} />
          </C.Box>
        </C.SimpleGrid>
      </C.Box>
    </GradientWrapper>
  )
}
