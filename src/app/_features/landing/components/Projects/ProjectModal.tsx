"use client"
import * as C from "../../../shared/lib/chakraComponents"
import { ExternalLink, Github, LucideIcon } from "lucide-react"
import CustomModal from "../../../shared/components/CustomModal"
import StarBulletPoint from "../../../shared/components/StarBulletPoint"

interface ProjectModalProps {
  isOpen: boolean
  onClose: () => void
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

// Reusable action button component
interface ActionButtonProps {
  href: string
  icon: LucideIcon
  children: React.ReactNode
}

const ActionButton = ({ href, icon: Icon, children }: ActionButtonProps) => (
  <C.Box>
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none" }}
    >
      <C.Button
        bg="rgba(6, 182, 212, 0.2)"
        color="cyan.300"
        border="1px solid rgba(6, 182, 212, 0.3)"
        _hover={{
          bg: "rgba(6, 182, 212, 0.3)",
          borderColor: "rgba(6, 182, 212, 0.5)",
          transform: "translateY(-1px)",
        }}
        size={{ base: "sm", md: "md" }}
        fontSize={{ base: "sm", md: "md" }}
        backdropFilter="blur(10px)"
        w="full"
        display="flex"
        alignItems="center"
        gap={2}
        px={4}
        py={2}
      >
        <Icon width={16} height={16} />
        {children}
      </C.Button>
    </a>
  </C.Box>
)

// Reusable content section component
interface ContentSectionProps {
  title: string
  children: React.ReactNode
}

const ContentSection = ({ title, children }: ContentSectionProps) => (
  <C.Box
    bg="rgba(255, 255, 255, 0.02)"
    border="1px solid rgba(255, 255, 255, 0.1)"
    borderRadius="lg"
    p={{ base: 4, md: 5 }}
  >
    <C.Heading
      size="md"
      color="white"
      mb={4}
      fontSize={{ base: "md", md: "lg" }}
    >
      {title}
    </C.Heading>
    {children}
  </C.Box>
)

export default function ProjectModal({
  isOpen,
  onClose,
  project,
}: ProjectModalProps) {
  return (
    <CustomModal
      isOpen={isOpen}
      onClose={onClose}
      title={project.name}
      maxWidth={{
        base: "90vw",
        sm: "85vw",
        md: "800px",
        lg: "900px",
        xl: "1000px",
      }}
    >
      <C.Box w="full" maxW="100%">
        {" "}
        {/* Container to prevent overflow */}
        <C.VStack gap={{ base: 4, md: 6 }} align="stretch" w="full">
          {/* YouTube Video */}
          <C.Box w="full" minW={0}>
            <C.Heading
              size="md"
              color="white"
              mb={4}
              fontSize={{ base: "md", md: "lg" }}
            >
              Demo Video
            </C.Heading>
            <C.Box
              w="full"
              h={{ base: "200px", md: "250px", lg: "300px" }}
              borderRadius="lg"
              overflow="hidden"
              bg="rgba(255, 255, 255, 0.05)"
              border="1px solid rgba(255, 255, 255, 0.1)"
            >
              <iframe
                src={project.youtubeLink}
                width="100%"
                height="100%"
                style={{ border: "none", borderRadius: "8px" }}
                allowFullScreen
              />
            </C.Box>
          </C.Box>

          {/* Action Links */}
          <C.Flex
            justify="center"
            gap={{ base: 3, md: 4 }}
            wrap="wrap"
            w="full"
          >
            <ActionButton href={project.projectLink} icon={ExternalLink}>
              Live Demo
            </ActionButton>
            <ActionButton href={project.githubLink} icon={Github}>
              GitHub
            </ActionButton>
          </C.Flex>

          {/* Content Sections */}
          <C.SimpleGrid
            columns={{ base: 1, md: 2 }}
            gap={{ base: 4, md: 6 }}
            w="full"
          >
            {/* Features */}
            <ContentSection title="Features">
              <C.VStack align="stretch" gap={2}>
                {project.features.map((feature, index) => (
                  <StarBulletPoint
                    key={index}
                    variant="default"
                    fontSize={{ base: "sm", md: "md" }}
                  >
                    {feature}
                  </StarBulletPoint>
                ))}
              </C.VStack>
            </ContentSection>

            {/* Tech Stack */}
            <ContentSection title="Tech Stack">
              <C.VStack align="stretch" gap={4}>
                {Object.entries(project.stack).map(([category, techs]) => (
                  <C.Box key={category}>
                    <C.Text
                      fontWeight="bold"
                      color="cyan.400"
                      mb={2}
                      fontSize={{ base: "sm", md: "md" }}
                      textTransform="capitalize"
                    >
                      {category}:
                    </C.Text>
                    <C.Flex wrap="wrap" gap={2}>
                      {techs.map((tech, index) => (
                        <C.Badge
                          key={index}
                          bg="rgba(6, 182, 212, 0.2)"
                          color="cyan.300"
                          px={3}
                          py={1.5}
                          borderRadius="md"
                          fontSize={{ base: "xs", md: "sm" }}
                          border="1px solid rgba(6, 182, 212, 0.3)"
                          fontWeight="medium"
                        >
                          {tech}
                        </C.Badge>
                      ))}
                    </C.Flex>
                  </C.Box>
                ))}
              </C.VStack>
            </ContentSection>
          </C.SimpleGrid>
        </C.VStack>
      </C.Box>{" "}
      {/* Close container */}
    </CustomModal>
  )
}
