"use client"
import * as C from "../../../shared/lib/chakraComponents"
import { projects } from "../../../shared/data/Content"
import { Archive } from "lucide-react"
import ProjectCard from "./ProjectCard"
import SectionWrapper from "../../../shared/components/SectionWrapper"

export default function Projects() {
  return (
    <SectionWrapper
      title="Projects Showcase"
      Icon={Archive}
      iconColor="#9ca3af"
      titleColor="gray.400"
      description="A collection of past projects and experiments that showcase various technologies and creative solutions"
    >
      {/* Projects Grid */}
      <C.SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8}>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </C.SimpleGrid>
    </SectionWrapper>
  )
}
