"use client"
import * as C from "../../../shared/lib/chakraComponents"
import { achievements } from "../../../shared/data/Content"
import { Award } from "lucide-react"
import AchievementItem from "./AchievementItem"
import SectionWrapper from "../../../shared/components/SectionWrapper"
import { SECTION_BG_COLORS } from "@/_features/shared/data"

export default function Achievements() {
  return (
    <SectionWrapper
      id="achievements"
      title="Achievements"
      Icon={Award}
      iconColor="#fbbf24"
      bgColor={SECTION_BG_COLORS.achievements}
      description="Recognition and milestones achieved throughout my development journey and community contributions"
    >
      {/* Achievements Container */}
      <C.Box
        bg="rgba(255, 255, 255, 0.05)"
        backdropFilter="blur(10px)"
        border="1px solid rgba(255, 255, 255, 0.1)"
        borderRadius="xl"
        p={{ base: 6, md: 8 }}
        maxW="4xl"
        mx="auto"
      >
        <C.VStack gap={6} align="stretch">
          {achievements.map((achievement, index) => (
            <AchievementItem key={index} achievement={achievement} />
          ))}
        </C.VStack>
      </C.Box>
    </SectionWrapper>
  )
}
