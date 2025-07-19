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

const MotionFlex = motion(C.Flex)
const MotionBox = motion(C.Box)

export const dockData = [
  {
    tooltip: "About me",
  },
  {
    tooltip: "Skills",
  },
  {
    tooltip: "Project",
  },
  {
    tooltip: "Achievements",
  },
  {
    tooltip: "Contact me",
  },
]

export default function Dock() {
  let mouseX = useMotionValue(Infinity)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkIsMobile()
    window.addEventListener("resize", checkIsMobile)

    return () => window.removeEventListener("resize", checkIsMobile)
  }, [])

  if (isMobile) {
    return (
      <C.Flex
        position="fixed"
        w="full"
        bottom={{ base: 4, sm: 6 }}
        justify="center"
        px={{ base: 4, sm: 6 }}
        zIndex={20}
      >
        <MotionFlex
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          h={{ base: "12", sm: "14" }}
          align="center"
          justify="center"
          gap={{ base: 2, sm: 3 }}
          rounded="2xl"
          px={{ base: 3, sm: 4 }}
          py={{ base: 2, sm: 3 }}
          bg="rgba(156, 163, 175, 0.5)"
          css={{
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(156, 163, 175, 1)",
          }}
          w="fit-content"
          maxW="90%"
        >
          {dockData.map((data, idx) => (
            <MobileAppIcon key={idx} tooltip={data.tooltip} />
          ))}
        </MotionFlex>
      </C.Flex>
    )
  }

  return (
    <C.Flex
      position="fixed"
      w="full"
      bottom="6"
      justify="center"
      pr={{ base: 4, md: 12 }}
      zIndex={20}
    >
      <MotionFlex
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        h="16"
        align="flex-end"
        gap="4"
        rounded="2xl"
        px="4"
        pb="3"
        // bg="rgba(0, 0, 0, 0.4)"
        // backdropFilter="blur(20px)"
        // border="1px solid"
        // borderColor="rgba(6, 182, 212, 0.3)"
        boxShadow="0 8px 32px rgba(6, 182, 212, 0.2)"
        bg="rgba(156, 163, 175, 0.5)"
        css={{
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(156, 163, 175, 1)",
        }}
      >
        {dockData.map((data, idx) => (
          <AppIcon key={idx} mouseX={mouseX} tooltip={data.tooltip} />
        ))}
        <C.Box h="full" bg="transparent">
          <C.Box h="3rem" w="2px" bg="gray.400" mt={2} opacity={0.6}></C.Box>
        </C.Box>
        <AppIcon mouseX={mouseX} tooltip="Resume" />
      </MotionFlex>
    </C.Flex>
  )
}

function AppIcon({
  mouseX,
  tooltip,
}: {
  mouseX: MotionValue
  tooltip?: string
}) {
  let ref = useRef<HTMLDivElement>(null)

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }

    return val - bounds.x - bounds.width / 2
  })

  let widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40])
  let width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 })

  return (
    <MotionBox
      ref={ref}
      style={{
        width,
        // transition: "all 0.3s ease",
      }}
      aspectRatio="1 / 1"
      w="10"
      borderRadius="full"
      bg="gray.400"
      cursor="pointer"
    />
  )
}

function MobileAppIcon({ tooltip }: { tooltip: string }) {
  return (
    <C.Box
      w={{ base: 8, sm: 10 }}
      h={{ base: 8, sm: 10 }}
      borderRadius="full"
      bg="gray.400"
      cursor="pointer"
      position="relative"
      style={{
        transition: "all 0.2s ease",
      }}
      _active={{
        transform: "scale(0.95)",
        bg: "gray.300",
      }}
      _hover={{
        bg: "gray.300",
        transform: "scale(1.05)",
      }}
    />
  )
}
