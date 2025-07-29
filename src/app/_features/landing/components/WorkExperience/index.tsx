"use client"
import * as C from "../../../shared/lib/chakraComponents"
import { experiences } from "../../../shared/data/Content"
import { Building } from "lucide-react"
import ExperienceCard from "./ExperienceCard"
import { theme } from "@/_features/shared/lib/globalTheme"
import SectionWrapper from "../../../shared/components/SectionWrapper"

export default function WorkExperience() {
  return (
    <SectionWrapper
      title="Work Experience"
      Icon={Building}
      iconColor={theme.token("colors.red.400")}
      bgColor="rgba(0, 136, 255, 0.05)"
      description="Organizations I’ve proudly contributed to, grown with, and genuinely enjoy(ed) working at."
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
