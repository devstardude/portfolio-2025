"use client"

import {
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion"
import { useRef, useState, useEffect } from "react"
import * as C from "@/_features/shared/lib/chakraComponents"
import Image from "next/image"
import { createPortal } from "react-dom"
import GradientWrapper from "../../../shared/components/GradientWrapper"
import StarBulletPoint from "../../../shared/components/StarBulletPoint"

// Configuration
const CURSOR_OFFSET_GAP = 15 // Adjust this value to align arrow with cursor position

const MotionBox = motion(C.Box)
export default function AboutMeIcon({ mouseX }: { mouseX: MotionValue }) {
  const ref = useRef<HTMLDivElement>(null)
  const popoverRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })
  const [isPositioned, setIsPositioned] = useState(false)

  // macOS dock effect sizing
  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }
    return val - bounds.x - bounds.width / 2
  })
  let widthSync = useTransform(distance, [-150, 0, 150], [40, 60, 40])
  let width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 })

  // Update position after popover is rendered
  useEffect(() => {
    if (isHovering && popoverRef.current) {
      const popoverHeight = popoverRef.current.offsetHeight
      setCursorPos((prev) => ({
        x: prev.x,
        y: prev.y - (popoverHeight - 500), // Adjust for difference from fallback
      }))
      setIsPositioned(true)
    } else {
      setIsPositioned(false)
    }
  }, [isHovering])

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const popoverHeight = 500 // Use consistent fallback
    setCursorPos({
      x: e.clientX,
      y: e.clientY - popoverHeight - CURSOR_OFFSET_GAP,
    })
  }

  const handleMouseEnter: React.MouseEventHandler<HTMLDivElement> = (e) => {
    setIsHovering(true)
    const popoverHeight = 200 // Use consistent fallback
    setCursorPos({
      x: e.clientX,
      y: e.clientY - popoverHeight - CURSOR_OFFSET_GAP,
    })
  }

  const handleMouseLeave: React.MouseEventHandler<HTMLDivElement> = () => {
    setIsHovering(false)
    setIsPositioned(false)
  }

  const aboutContent = [
    "I'm a professional Full-stack Developer and Programmer, experienced in a vast range of technologies in Frontend, Backend, Databases, Blockchain, Programming languages, etc.",
    "I enjoy solving complex problems and building applications that solve real-world problems and learning new technology is always exciting for me.",
    "Apart from programming, I like to run in the park on a nice evening, as it refreshes my mind and brings more creative ideas.",
    "In my journey of Programming, I go by the codename: Devstardude",
  ]

  return (
    <>
      <C.Box position="relative">
        <MotionBox
          ref={ref}
          style={{ width }}
          aspectRatio="1 / 1"
          w="10"
          borderRadius="full"
          bg="rgba(255, 255, 255, 0.06)"
          backdropFilter="blur(10px)"
          border="1px solid rgba(255, 255, 255, 0.12)"
          cursor="default"
          display="flex"
          alignItems="center"
          justifyContent="center"
          p={1}
          _hover={{
            bg: "rgba(255, 255, 255, 0.12)",
            borderColor: "rgba(255, 255, 255, 0.24)",
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
        >
          <Image
            src="/vampireFace.png"
            alt="about"
            width={40}
            height={40}
            style={{ borderRadius: 9999 }}
          />
        </MotionBox>
      </C.Box>

      {/* Portal the popover to document body to avoid clipping */}
      {isHovering &&
        typeof window !== "undefined" &&
        createPortal(
          <motion.div
            ref={popoverRef}
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: isPositioned ? 1 : 0, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            style={{
              position: "fixed",
              left: cursorPos.x > 0 ? `${cursorPos.x - 200}px` : "200px",
              top: cursorPos.y > 0 ? `${cursorPos.y - 20}px` : "200px",
              zIndex: 2,
              pointerEvents: "none",
            }}
          >
            <AboutMePopover aboutContent={aboutContent} />
          </motion.div>,
          document.body,
        )}
    </>
  )
}

const AboutMePopover = ({ aboutContent }: { aboutContent: string[] }) => {
  return (
    <GradientWrapper glassmorphism>
      <C.Box maxW={{ base: "90vw", md: "380px" }} minW="320px">
        {/* Header with avatar */}
        <C.VStack
          align="start"
          gap={3}
          mb={4}
          pb={4}
          borderBottom="1px solid"
          borderBottomColor="rgba(6, 182, 212, 0.1)"
        >
          <C.Flex gap={3} align="center">
            <Image
              src="/vampireFace.png"
              alt="me"
              width={40}
              height={40}
              style={{ borderRadius: 9999 }}
            />
            <C.Heading color="green.300" fontSize={{ base: "xl", md: "2xl" }}>
              About me
            </C.Heading>
          </C.Flex>
        </C.VStack>

        {/* Content */}
        <C.Box>
          <C.Heading
            fontSize={{ base: "md", md: "lg" }}
            fontWeight="semibold"
            color="white"
            mb={3}
          >
            Who I am
          </C.Heading>
          <C.VStack align="stretch" gap={3}>
            {aboutContent.map((item, idx) => (
              <StarBulletPoint
                key={idx}
                variant="yellow"
                fontSize={{ base: "sm", md: "sm" }}
              >
                {item}
              </StarBulletPoint>
            ))}
          </C.VStack>
        </C.Box>
      </C.Box>
    </GradientWrapper>
  )
}
