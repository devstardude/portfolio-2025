"use client"
import * as C from "../../../shared/lib/chakraComponents"
import { experiences } from "../../../shared/data/Content"
import { BriefcaseBusiness } from "lucide-react"
import ExperienceCard from "./ExperienceCard"
import { theme } from "@/_features/shared/lib/globalTheme"
import SectionWrapper from "../../../shared/components/SectionWrapper"
import { SECTION_BG_COLORS } from "@/_features/shared/data"

export default function WorkExperience() {
  return (
    <SectionWrapper
      id="experience"
      title="Work Experience"
      Icon={BriefcaseBusiness}
      iconColor={theme.token("colors.red.400")}
      bgColor={SECTION_BG_COLORS.workExperience}
      description="Organizations I've proudly contributed to, grown with, and genuinely enjoy(ed) working at."
    >
      {/* Experience Cards */}
      <C.VStack gap={8} align="stretch">
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </C.VStack>
    </SectionWrapper>
  )
}
