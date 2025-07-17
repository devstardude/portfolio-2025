"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import * as C from "@/_features/shared/lib/chakraComponents"
import Dock from "../components/Dock"
import Masthead from "../components/Masthead"
import Intro from "../components/WorkExperience"
import Skills from "../components/Skills"
import Projects from "../components/Projects"

// Motion components
const MotionBox = motion(C.Box)

// Parallax configuration - only background to preserve component heights
const PARALLAX_CONFIG = {
  background: { speed: 0.3, range: [-100, 100] },
} as const

export default function Landing() {
  const containerRef = useRef<HTMLDivElement>(null)

  // Track scroll progress with viewport-based offsets
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // Optimized parallax using background-position (no DOM transform)
  const backgroundPosition = useTransform(
    scrollYProgress,
    [0, 1],
    [
      `center ${PARALLAX_CONFIG.background.range[0]}px`,
      `center ${PARALLAX_CONFIG.background.range[1]}px`,
    ],
  )

  // Remove content parallax to preserve exact component heights
  // const contentY = useTransform(
  //   scrollYProgress,
  //   [0, 1],
  //   [PARALLAX_CONFIG.content.range[0], PARALLAX_CONFIG.content.range[1]],
  // )

  return (
    <C.Box
      ref={containerRef}
      position="relative"
      w="full"
      minH="100vh"
      color="gray.300"
      overflow="hidden"
    >
      {/* Background starfield with optimized parallax */}
      <MotionBox
        position="fixed"
        top={0}
        left={0}
        w="100vw"
        h="100vh"
        style={{
          backgroundImage: "url(/bgStars.svg)",
          backgroundSize: "auto",
          backgroundPosition: backgroundPosition,
          willChange: "background-position",
        }}
        bgRepeat="repeat"
        zIndex={0}
      />

      {/* Dock layer */}
      <C.Box position="relative" zIndex={30}>
        <Dock />
      </C.Box>

      {/* Main content - no parallax to preserve exact heights */}
      <C.Box position="relative" zIndex={20} w="full">
        <Masthead />
        <Intro />
        <Skills />
        <Projects />
      </C.Box>
    </C.Box>
  )
}
