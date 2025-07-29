"use client"
import * as C from "@/_features/shared/lib/chakraComponents"
import {
  Code,
  Database,
  Palette,
  Cloud,
  GitBranch,
  Globe,
  Wrench,
  Briefcase,
  Server,
  Zap,
} from "lucide-react"
import SectionWrapper from "../../../shared/components/SectionWrapper"

const techs = [
  {
    title: "Front-End",
    desc: "React, Redux, Next.js, TypeScript, Jest Testing",
    icon: Code,
    color: "#22d3ee",
    chakraColor: "cyan.400",
    gradient:
      "linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(59, 130, 246, 0.1))",
  },
  {
    title: "Back-End",
    desc: "Node, Express, REST, GraphQL, Go API",
    icon: Server,
    color: "#4ade80",
    chakraColor: "green.400",
    gradient:
      "linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(22, 163, 74, 0.1))",
  },
  {
    title: "Database",
    desc: "MongoDB, Firestore, DynamoDB",
    icon: Database,
    color: "#a855f7",
    chakraColor: "purple.400",
    gradient:
      "linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(147, 51, 234, 0.1))",
  },
  {
    title: "UI/UX",
    desc: "Tailwind CSS, Material UI, Framer Motion",
    icon: Palette,
    color: "#ec4899",
    chakraColor: "pink.400",
    gradient:
      "linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(219, 39, 119, 0.1))",
  },
  {
    title: "Cloud Services",
    desc: "Firebase, AWS, Vercel",
    icon: Cloud,
    color: "#3b82f6",
    chakraColor: "blue.400",
    gradient:
      "linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(37, 99, 235, 0.1))",
  },
  {
    title: "Version Control",
    desc: "Git, GitHub, GitLab",
    icon: GitBranch,
    color: "#fb923c",
    chakraColor: "orange.400",
    gradient:
      "linear-gradient(135deg, rgba(251, 146, 60, 0.1), rgba(249, 115, 22, 0.1))",
  },
  {
    title: "Languages",
    desc: "Python, JavaScript, C++, Go, TypeScript, Solidity",
    icon: Globe,
    color: "#facc15",
    chakraColor: "yellow.400",
    gradient:
      "linear-gradient(135deg, rgba(250, 204, 21, 0.1), rgba(245, 158, 11, 0.1))",
  },
  {
    title: "Blockchain & Web3",
    desc: "Smart Contracts, NFTs, DeFi, Discord Bots",
    icon: Wrench,
    color: "#ef4444",
    chakraColor: "red.400",
    gradient:
      "linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(220, 38, 38, 0.1))",
  },
  {
    title: "Project Management",
    desc: "Notion, Asana, Trello, Slack",
    icon: Briefcase,
    color: "#14b8a6",
    chakraColor: "teal.400",
    gradient:
      "linear-gradient(135deg, rgba(20, 184, 166, 0.1), rgba(13, 148, 136, 0.1))",
  },
]

interface SkillCardProps {
  title: string
  desc: string
  icon: React.ElementType
  color: string
  chakraColor: string
  gradient: string
  index: number
}

function SkillCard({
  title,
  desc,
  icon: Icon,
  color,
  chakraColor,
  gradient,
  index,
}: SkillCardProps) {
  return (
    <C.Box
      bg={gradient}
      backdropFilter="blur(20px)"
      border="1px solid"
      borderColor="rgba(255, 255, 255, 0.1)"
      borderRadius="xl"
      p={{ base: 6, md: 8 }}
      position="relative"
      overflow="hidden"
      cursor="pointer"
      style={{
        transition: "all 0.4s ease",
      }}
      _hover={{
        bg: gradient.replace(/0\.1\)/g, "0.15)"),
        borderColor: chakraColor,
        transform: "translateY(-4px)",
        boxShadow: `0 10px 30px rgba(6, 182, 212, 0.2)`,
      }}
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: "2px",
        bg: `linear-gradient(90deg, transparent, ${chakraColor}, transparent)`,
        borderRadius: "xl xl 0 0",
      }}
    >
      {/* Icon */}
      <C.Flex justify="center" mb={4}>
        <C.Box
          p={3}
          borderRadius="full"
          bg="rgba(255, 255, 255, 0.1)"
          border="1px solid"
          borderColor="rgba(255, 255, 255, 0.2)"
          backdropFilter="blur(10px)"
        >
          <Icon
            width={24}
            height={24}
            color={color}
            style={{ filter: `drop-shadow(0 0 10px ${color})` }}
          />
        </C.Box>
      </C.Flex>

      {/* Title */}
      <C.Heading
        fontSize={{ base: "lg", md: "xl" }}
        fontWeight="bold"
        textAlign="center"
        color="white"
        mb={3}
        textShadow="0 0 10px rgba(255, 255, 255, 0.3)"
      >
        {title}
      </C.Heading>

      {/* Description */}
      <C.Text
        fontSize={{ base: "sm", md: "md" }}
        color="gray.300"
        textAlign="center"
        lineHeight="1.6"
        _hover={{ color: "white" }}
        transition="color 0.3s ease"
      >
        {desc}
      </C.Text>
    </C.Box>
  )
}

export default function Skills() {
  return (
    <SectionWrapper
      id="skills"
      title="Technical Skills"
      Icon={Code}
      iconColor="#22d3ee"
      bgColor="rgba(34, 211, 238, 0.05)"
      description="A comprehensive overview of technologies and tools I've mastered throughout my development journey"
    >
      {/* Background Effects */}
      <C.Box
        position="absolute"
        inset="0"
        _before={{
          content: '""',
          position: "absolute",
          top: "20%",
          left: "10%",
          width: "200px",
          height: "200px",
          bg: "radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 70%)",
          borderRadius: "full",
          filter: "blur(40px)",
        }}
        _after={{
          content: '""',
          position: "absolute",
          bottom: "20%",
          right: "10%",
          width: "300px",
          height: "300px",
          bg: "radial-gradient(circle, rgba(239, 68, 68, 0.08) 0%, transparent 70%)",
          borderRadius: "full",
          filter: "blur(60px)",
        }}
      />

      {/* Skills Grid */}
      <C.SimpleGrid
        columns={{ base: 2, md: 2, lg: 3 }}
        gap={{ base: 4, md: 8 }}
        w="full"
        maxW="7xl"
        mx="auto"
        position="relative"
        zIndex={1}
      >
        {techs.map((tech, index) => (
          <SkillCard
            key={tech.title}
            title={tech.title}
            desc={tech.desc}
            icon={tech.icon}
            color={tech.color}
            chakraColor={tech.chakraColor}
            gradient={tech.gradient}
            index={index}
          />
        ))}
      </C.SimpleGrid>
    </SectionWrapper>
  )
}
