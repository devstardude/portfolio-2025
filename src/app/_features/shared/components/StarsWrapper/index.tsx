"use client"

import {
  motion,
  useScroll,
  useMotionValue,
  useAnimationFrame,
  useMotionTemplate,
} from "framer-motion"
import { ReactNode, useEffect, useRef } from "react"
import * as C from "../../lib/chakraComponents"

// ===================== Starfield Configuration =====================
// Intrinsic tile size of public/bgStars.svg (from its width/height attributes)
// Using the exact tile height ensures seamless vertical wrapping with CSS background-repeat
const STAR_TILE_HEIGHT_PX = 1603

// Base idle speed of the starfield (pixels per second). Typical: 2 - 12
const STAR_BASE_SPEED_PX_PER_SEC = 10

// How strongly scroll velocity boosts the speed. Typical: 0.3 - 1.0
const STAR_SCROLL_BOOST_MULTIPLIER = 0.6

// Max extra speed added from a single scroll event (pixels per second). Typical: 40 - 120
const STAR_SCROLL_BOOST_MAX = 80

// How quickly boosted speed eases back toward baseline (per second). Typical: 1.0 - 4.0
const STAR_SPEED_EASEBACK_PER_SEC = 2

// Wrap distance = star tile height to avoid any visual seams on loop
const STAR_WRAP_DISTANCE_PX = STAR_TILE_HEIGHT_PX

// Default drift direction when idle: -1 = up, 1 = down
const STAR_DEFAULT_DIRECTION = -1

// Snap background offset to integer pixels (helps some displays),
// but can stall movement at low speeds/frame rates. Prefer false.
const STAR_SNAP_TO_INTEGER = false
// ===================================================================

interface StarsWrapperProps {
  children: ReactNode
}

export default function StarsWrapper({ children }: StarsWrapperProps) {
  // Continuous background offset (in px)
  const backgroundOffsetY = useMotionValue(0)

  // Scroll-based direction and speed state (kept outside of React state for perf)
  const directionRef = useRef<number>(STAR_DEFAULT_DIRECTION)
  const currentSpeedRef = useRef<number>(STAR_BASE_SPEED_PX_PER_SEC)

  // Track scroll to make movement direction/speed responsive
  const { scrollY } = useScroll()
  const prevScrollYRef = useRef<number>(0)

  useEffect(() => {
    prevScrollYRef.current = scrollY.get()
    const unsubscribe = scrollY.on("change", (value) => {
      const delta = value - prevScrollYRef.current
      prevScrollYRef.current = value

      if (Math.abs(delta) < 0.5) return

      // Map scroll direction to star movement: scroll down -> stars move up (negative), scroll up -> stars move down (positive)
      directionRef.current = delta > 0 ? -1 : 1

      // Boost speed based on scroll intensity, then ease back to baseline
      const boost = Math.min(
        Math.abs(delta) * STAR_SCROLL_BOOST_MULTIPLIER,
        STAR_SCROLL_BOOST_MAX,
      )
      currentSpeedRef.current = STAR_BASE_SPEED_PX_PER_SEC + boost
    })
    return () => unsubscribe()
  }, [scrollY])

  // Drive continuous movement each frame; gently ease speed back to baseline
  useAnimationFrame((t, deltaMs) => {
    const deltaSec = deltaMs / 1000

    // Ease current speed back toward baseline
    currentSpeedRef.current +=
      (STAR_BASE_SPEED_PX_PER_SEC - currentSpeedRef.current) *
      Math.min(1, deltaSec * STAR_SPEED_EASEBACK_PER_SEC)

    // Advance background offset
    let next =
      backgroundOffsetY.get() +
      directionRef.current * currentSpeedRef.current * deltaSec

    // Wrap at exact tile height to keep the repeat seamless
    if (next <= -STAR_WRAP_DISTANCE_PX) next += STAR_WRAP_DISTANCE_PX
    if (next >= STAR_WRAP_DISTANCE_PX) next -= STAR_WRAP_DISTANCE_PX

    // Apply snapping if enabled; otherwise keep fractional pixels for smooth motion
    backgroundOffsetY.set(STAR_SNAP_TO_INTEGER ? Math.round(next) : next)
  })

  // Compose full background-position with a motion template to ensure binding works across browsers
  const backgroundPosition = useMotionTemplate`center ${backgroundOffsetY}px`

  return (
    <C.Box
      position="relative"
      w="full"
      minH="100vh"
      color="gray.300"
      overflow="hidden"
    >
      {/* Moving Stars Background - Scroll-direction sensitive and seamless */}
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundImage: "url(/bgStars.svg)",
          backgroundSize: "auto",
          backgroundRepeat: "repeat",
          backgroundPosition,
          zIndex: 0,
          willChange: "background-position",
        }}
      />

      {/* Content */}
      {children}
    </C.Box>
  )
}
