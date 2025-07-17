"use client"
import * as C from "../../../shared/lib/chakraComponents"
import { MapPin, Calendar, Clock } from "lucide-react"
import AchievementGrid from "./AchievementGrid"
import TechnologyTags from "./TechnologyTags"
import ResponsibilityList from "./ResponsibilityList"

interface ExperienceCardProps {
  experience: {
    title: string
    company: string
    location: string
    period: string
    type: string
    current: boolean
    achievements: string[]
    tech: string[]
    highlights: string[]
  }
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <C.Box
      bg="linear-gradient(135deg, rgba(6, 182, 212, 0.05), rgba(239, 68, 68, 0.05))"
      border="1px solid"
      borderColor="rgba(6, 181, 212, 3)"
      borderRadius="xl"
      p={{ base: 6, md: 8 }}
      position="relative"
      _hover={{
        bg: "linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(239, 68, 68, 0.1))",
        borderColor: "cyan.400",
        transform: "translateY(-4px)",
        boxShadow: "0 10px 30px rgba(6, 182, 212, 0.2)",
      }}
      transition="all 0.4s ease"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: "2px",
        bg: "linear-gradient(90deg, transparent, cyan.400, red.400, transparent)",
        borderRadius: "xl xl 0 0",
      }}
    >
      {/* Job Header */}
      <C.Box
        mb={8}
        pb={6}
        borderBottom="1px solid"
        borderBottomColor="rgba(6, 182, 212, 0.2)"
        position="relative"
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
        <C.Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align={{ base: "flex-start", md: "center" }}
        >
          <C.Box mb={{ base: 4, md: 0 }}>
            <C.Flex align="center" mb={3}>
              <C.Heading
                fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
                fontWeight="bold"
                color="white"
                textShadow="0 0 20px rgba(255, 255, 255, 0.3)"
                letterSpacing="tight"
              >
                {experience.title}
              </C.Heading>
              {experience.current && (
                <C.Badge
                  ml={4}
                  px={3}
                  py={2}
                  bg="linear-gradient(135deg, #10b981, #059669)"
                  color="white"
                  borderRadius="full"
                  fontSize={{ base: "sm", md: "md" }}
                  fontWeight="bold"
                  border="2px solid rgba(255, 255, 255, 0.3)"
                  boxShadow="0 0 30px rgba(16, 185, 129, 0.5)"
                  _hover={{
                    transform: "scale(1.05)",
                    boxShadow: "0 0 40px rgba(16, 185, 129, 0.7)",
                  }}
                  transition="all 0.3s ease"
                >
                  Current
                </C.Badge>
              )}
            </C.Flex>

            <C.Text
              fontSize={{ base: "md", md: "2xl", lg: "2xl" }}
              color="cyan.300"
              fontWeight="bold"
              mb={4}
              textShadow="0 0 15px rgba(34, 211, 238, 0.5)"
              letterSpacing="tight"
            >
              {experience.company}
            </C.Text>

            <C.Flex
              direction={{ base: "column", sm: "row" }}
              gap={6}
              fontSize={{ base: "sm", md: "md" }}
              color="gray.300"
              fontWeight="medium"
            >
              <C.Flex align="center" gap={2}>
                <MapPin width={20} height={20} className="mr-3" />
                {experience.location}
              </C.Flex>
              <C.Flex align="center" gap={2}>
                <Calendar width={20} height={20} className="mr-3" />
                {experience.period}
              </C.Flex>
              <C.Flex align="center" gap={2}>
                <Clock width={20} height={20} className="mr-3" />
                {experience.type}
              </C.Flex>
            </C.Flex>
          </C.Box>
        </C.Flex>
      </C.Box>

      {/* Content */}
      <C.VStack gap={6} align="stretch">
        <AchievementGrid achievements={experience.achievements} />
        <TechnologyTags technologies={experience.tech} />
        <ResponsibilityList responsibilities={experience.highlights} />
      </C.VStack>
    </C.Box>
  )
}
