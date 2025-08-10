"use client"
import * as C from "../../../shared/lib/chakraComponents"
import { currentProjects } from "../../../shared/data/Content"
import { Zap } from "lucide-react"
import ProjectCard from "./ProjectCard"
import SectionWrapper from "../../../shared/components/SectionWrapper"
import { SECTION_BG_COLORS } from "@/_features/shared/data"
import { compactCurrentProject } from "../../../shared/data/Content"
import CompactProjectCard from "./CompactProjectCard"

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
      <C.VStack gap={8} align="stretch">
        {/* Compact cards (brief) */}
        <C.SimpleGrid columns={{ base: 1, md: 2 }} gap={8}>
          {compactCurrentProject.map((project, index) => (
            <CompactProjectCard key={index} project={project} />
          ))}
        </C.SimpleGrid>

        {/* Detailed card(s) */}
        {currentProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </C.VStack>
    </SectionWrapper>
  )
}
