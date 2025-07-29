"use client"
import { useState } from "react"
import * as C from "../../../shared/lib/chakraComponents"
import { motion } from "framer-motion"
import { Star, ArrowRight } from "lucide-react"
import ProjectModal from "./ProjectModal"
import GlassTag from "../../../shared/components/GlassTag"
import ActionButton from "../../../shared/components/ActionButton"

interface ProjectCardProps {
  project: {
    name: string
    description: string
    ribbon: string
    highlight: boolean
    tech: string[]
    image: string
    projectLink: string
    githubLink: string
    youtubeLink: string
    features: string[]
    stack: {
      frontend: string[]
      blockchain?: string[]
      backend?: string[]
      database?: string[]
      deployment?: string[]
    }
  }
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <C.Box
          position="relative"
          cursor="pointer"
          onClick={() => setIsModalOpen(true)}
          bg="rgba(255, 255, 255, 0.05)"
          backdropFilter="blur(10px)"
          border="1px solid rgba(255, 255, 255, 0.1)"
          borderRadius="xl"
          overflow="hidden"
          _hover={{
            bg: "rgba(255, 255, 255, 0.08)",
            borderColor: "rgba(255, 255, 255, 0.2)",
          }}
        >
          {/* Ribbon */}
          <C.Box
            position="absolute"
            top={4}
            left={4}
            bg="red.500"
            color="white"
            px={3}
            py={1}
            borderRadius="md"
            fontSize="xs"
            fontWeight="bold"
            zIndex={2}
          >
            {project.ribbon}
          </C.Box>

          {/* Project Image */}
          <C.Box h="200px" overflow="hidden">
            <C.Image
              src={project.image}
              alt={project.name}
              w="full"
              h="full"
              objectFit="cover"
            />
          </C.Box>

          {/* Content */}
          <C.Box p={6}>
            <C.Heading
              fontSize={{ base: "lg", md: "xl" }}
              color="cyan.300"
              fontWeight="bold"
              textShadow="0 0 15px rgba(34, 211, 238, 0.5)"
              letterSpacing="tight"
              lineHeight="tight"
              mb={2}
              overflow="hidden"
              textOverflow="ellipsis"
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
              }}
            >
              {project.name}
            </C.Heading>

            <C.Text
              color="gray.300"
              fontSize={{ base: "md", md: "lg" }}
              mb={4}
              overflow="hidden"
              textOverflow="ellipsis"
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
              }}
            >
              {project.description}
            </C.Text>

            {/* Tech Tags */}
            <C.Flex wrap="wrap" gap={2} mb={6}>
              {project.tech.map((tech, index) => (
                <GlassTag key={index}>{tech}</GlassTag>
              ))}
            </C.Flex>
            {/* Know More Button */}
            <ActionButton
              icon={<ArrowRight width={16} height={16} color="#22c55e" />}
            >
              Know more
            </ActionButton>
          </C.Box>
        </C.Box>
      </motion.div>

      {/* Modal */}
      {isModalOpen && (
        <ProjectModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          project={project}
        />
      )}
    </>
  )
}
