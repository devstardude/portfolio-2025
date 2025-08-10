"use client"
import * as C from "../../../shared/lib/chakraComponents"
import { achievements } from "../../../shared/data/Content"
import { Award } from "lucide-react"
import AchievementItem from "./AchievementItem"
import SectionWrapper from "../../../shared/components/SectionWrapper"
import { SECTION_BG_COLORS } from "@/_features/shared/data"
import GradientWrapper from "@/_features/shared/components/GradientWrapper"

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
      <C.Box px={{ base: 6, md: "8rem" }}>
        <GradientWrapper>
          <C.VStack gap={6} align="stretch">
            {achievements.map((achievement, index) => (
              <AchievementItem key={index} achievement={achievement} />
            ))}
          </C.VStack>
        </GradientWrapper>
      </C.Box>
    </SectionWrapper>
  )
}
