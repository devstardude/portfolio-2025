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
import {
  BriefcaseBusiness,
  FolderOpen,
  BookText,
  Award,
  Zap,
  Code,
  Mail,
  FileText,
} from "lucide-react"
import { Tooltip } from "../../../shared/components/ui/tooltip"
import { SECTION_BG_COLORS } from "@/_features/shared/data"
import Image from "next/image"
import AboutMeIcon from "./AboutMeIcon"

const MotionFlex = motion(C.Flex)
const MotionBox = motion(C.Box)

export const dockData = [
  {
    tooltip: "Work Experience",
    sectionId: "experience",
    icon: BriefcaseBusiness,
  },
  {
    tooltip: "Active Projects",
    sectionId: "active-projects",
    icon: Zap,
  },
  {
    tooltip: "Projects",
    sectionId: "projects",
    icon: FolderOpen,
  },
  {
    tooltip: "Blogs",
    sectionId: "blogs",
    icon: BookText,
  },
  {
    tooltip: "Achievements",
    sectionId: "achievements",
    icon: Award,
  },
  {
    tooltip: "Skills",
    sectionId: "skills",
    icon: Code,
  },
  {
    tooltip: "Contact",
    sectionId: "contact",
    icon: Mail,
  },
]

function getHoverBg(sectionId?: string): string | undefined {
  switch (sectionId) {
    case "experience":
      return SECTION_BG_COLORS.workExperience.replace("0.05", "0.12")
    case "active-projects":
      return SECTION_BG_COLORS.activeProjects.replace("0.05", "0.12")
    case "projects":
      return SECTION_BG_COLORS.projects.replace("0.05", "0.12")
    case "blogs":
      return SECTION_BG_COLORS.blogs.replace("0.05", "0.12")
    case "achievements":
      return SECTION_BG_COLORS.achievements.replace("0.05", "0.12")
    case "skills":
      return SECTION_BG_COLORS.skills.replace("0.05", "0.12")
    case "contact":
      return SECTION_BG_COLORS.contact.replace("0.05", "0.12")
    default:
      return undefined
  }
}

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
            <MobileAppIcon
              key={idx}
              tooltip={data.tooltip}
              sectionId={data.sectionId}
              icon={data.icon}
            />
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
        boxShadow="0 8px 32px rgba(6, 182, 212, 0.2)"
        bg="rgba(156, 163, 175, 0.5)"
        css={{
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(156, 163, 175, 1)",
        }}
      >
        {dockData.map((data, idx) => (
          <AppIcon
            key={idx}
            mouseX={mouseX}
            tooltip={data.tooltip}
            sectionId={data.sectionId}
            icon={data.icon}
          />
        ))}
        <C.Box h="full" bg="transparent">
          <C.Box h="3rem" w="2px" bg="gray.400" mt={2} opacity={0.6}></C.Box>
        </C.Box>
        {/* Special image icon (popover disabled) */}
        <AboutMeIcon mouseX={mouseX} />
      </MotionFlex>
    </C.Flex>
  )
}

function AppIcon({
  mouseX,
  tooltip,
  sectionId,
  icon: Icon,
}: {
  mouseX: MotionValue
  tooltip?: string
  sectionId?: string
  icon?: React.ElementType
}) {
  let ref = useRef<HTMLDivElement>(null)

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }

    return val - bounds.x - bounds.width / 2
  })

  let widthSync = useTransform(distance, [-150, 0, 150], [40, 60, 40])
  let width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 })

  // Scale icon size to match wrapper width for macOS dock effect
  let iconSize = useTransform(width, (w) => w * 0.6)

  const handleClick = () => {
    if (sectionId) {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    }
  }

  const hoverBg = getHoverBg(sectionId)
  const baseBg =
    getHoverBg(sectionId)?.replace("0.12", "0.05") ??
    "rgba(255, 255, 255, 0.06)"

  return (
    <Tooltip
      content={tooltip}
      openDelay={0}
      contentProps={{
        bg: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        borderRadius: "lg",
        px: 4,
        py: 3,
        fontSize: "sm",
        fontWeight: "medium",
        color: "white",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
        textShadow: "0 0 10px rgba(255, 255, 255, 0.3)",
      }}
    >
      <MotionBox
        ref={ref}
        style={{
          width,
          // transition: "all 0.3s ease",
        }}
        aspectRatio="1 / 1"
        w="10"
        borderRadius="full"
        bg={baseBg}
        backdropFilter="blur(10px)"
        border="1px solid rgba(255, 255, 255, 0.12)"
        cursor="pointer"
        onClick={handleClick}
        display="flex"
        alignItems="center"
        justifyContent="center"
        p={2}
        _hover={{
          bg: hoverBg ?? "rgba(255, 255, 255, 0.12)",
          borderColor: "rgba(255, 255, 255, 0.24)",
        }}
      >
        {Icon && (
          <motion.div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon
              width={iconSize}
              height={iconSize}
              color="white"
              style={{
                filter: "drop-shadow(0 0 4px rgba(255, 255, 255, 0.3))",
              }}
            />
          </motion.div>
        )}
      </MotionBox>
    </Tooltip>
  )
}

function MobileAppIcon({
  tooltip,
  sectionId,
  icon: Icon,
}: {
  tooltip: string
  sectionId?: string
  icon?: React.ElementType
}) {
  const handleClick = () => {
    if (sectionId) {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    }
  }

  return (
    <Tooltip
      content={tooltip}
      openDelay={0}
      contentProps={{
        bg: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        borderRadius: "lg",
        px: 4,
        py: 3,
        fontSize: "sm",
        fontWeight: "medium",
        color: "white",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
        textShadow: "0 0 10px rgba(255, 255, 255, 0.3)",
      }}
    >
      <C.Box
        w={{ base: 8, sm: 10 }}
        h={{ base: 8, sm: 10 }}
        borderRadius="full"
        bg="rgba(255, 255, 255, 0.1)"
        backdropFilter="blur(10px)"
        border="1px solid rgba(255, 255, 255, 0.2)"
        cursor="pointer"
        position="relative"
        display="flex"
        alignItems="center"
        justifyContent="center"
        style={{
          transition: "all 0.2s ease",
        }}
        _active={{
          transform: "scale(0.95)",
          bg: "rgba(255, 255, 255, 0.15)",
        }}
        _hover={{
          bg: "rgba(255, 255, 255, 0.2)",
          borderColor: "rgba(255, 255, 255, 0.3)",
          transform: "scale(1.05)",
        }}
        onClick={handleClick}
      >
        {Icon && (
          <Icon
            width={16}
            height={16}
            color="white"
            style={{ filter: "drop-shadow(0 0 4px rgba(255, 255, 255, 0.3))" }}
          />
        )}
      </C.Box>
    </Tooltip>
  )
}
