"use client"
import * as C from "../../../shared/lib/chakraComponents"
import { currentProjects } from "../../../shared/data/Content"
import { Zap } from "lucide-react"
import ProjectCard from "./ProjectCard"
import SectionWrapper from "../../../shared/components/SectionWrapper"
import { SECTION_BG_COLORS } from "@/_features/shared/data"

export default function ActiveProjects() {
  return (
    <SectionWrapper
      id="active-projects"
      title="Active Projects"
      Icon={Zap}
      iconColor="#3cdd4c"
      bgColor={SECTION_BG_COLORS.activeProjects}
      description="Current initiatives and ongoing developments that showcase innovation and technical expertise"
    >
      {/* Projects Grid */}
      <C.VStack gap={8} align="stretch">
        {currentProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </C.VStack>
    </SectionWrapper>
  )
}
