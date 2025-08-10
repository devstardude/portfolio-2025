"use client"

import * as C from "@/_features/shared/lib/chakraComponents"
import StarsWrapper from "../../shared/components/StarsWrapper"
import Dock from "../components/Dock"
import Masthead from "../components/Masthead"
import Intro from "../components/WorkExperience"
import Skills from "../components/Skills"
import ActiveProjects from "../components/ActiveProjects"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
import Achievements from "../components/Achievements"
import Contact from "../components/Contact"

export default function Landing() {
  return (
    <StarsWrapper>
      {/* Dock layer */}
      <C.Box position="relative" zIndex={2}>
        <Dock />
      </C.Box>

      {/* Main content */}
      <C.Box position="relative" w="full" zIndex={1}>
        <Masthead />
        <Intro />
        <ActiveProjects />
        <Projects />
        <Skills />
        <Blogs />
        <Achievements />
        <Contact />
      </C.Box>
    </StarsWrapper>
  )
}
