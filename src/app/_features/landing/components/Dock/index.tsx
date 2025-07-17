"use client"

import {
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion"
import { useRef } from "react"
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

  return (
    <C.Flex
      position="fixed"
      w="full"
      bottom="6"
      justify="center"
      pr={12}
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
        bg="rgba(156, 163, 175, 0.5)"
        css={{
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(156, 163, 175, 1)",
        }}
      >
        {dockData.map((data, idx) => (
          // <Tooltip text={data.tooltip} key={idx}>
          <AppIcon key={idx} mouseX={mouseX} />
          // </Tooltip>
        ))}
        <C.Box h="full" bg="transparent">
          <C.Box h="3rem" w="2px" bg="gray.400" mt={2}></C.Box>
        </C.Box>
        <AppIcon mouseX={mouseX} />
      </MotionFlex>
    </C.Flex>
  )
}

function AppIcon({ mouseX }: { mouseX: MotionValue }) {
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
      style={{ width }}
      aspectRatio="1 / 1"
      w="10"
      borderRadius="full"
      bg="gray.400"
      cursor="pointer"
    />
  )
}
