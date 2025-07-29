"use client"
import * as C from "../../../shared/lib/chakraComponents"
import { projects } from "../../../shared/data/Content"
import { FolderOpen } from "lucide-react"
import ProjectCard from "./ProjectCard"
import SectionWrapper from "../../../shared/components/SectionWrapper"

export default function Projects() {
  return (
    <SectionWrapper
      id="projects"
      title="Projects Showcase"
      Icon={FolderOpen}
      iconColor="#55b7e4"
      bgColor="rgba(6, 182, 212, 0.05)"
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
