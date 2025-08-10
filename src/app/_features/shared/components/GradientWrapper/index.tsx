"use client"
import * as C from "../../lib/chakraComponents"
import { ReactNode } from "react"

interface GradientWrapperProps {
  children: ReactNode
  glassmorphism?: boolean
}

export default function GradientWrapper({
  children,
  glassmorphism = false,
}: GradientWrapperProps) {
  return (
    <C.Box
      bg="linear-gradient(135deg, rgba(6, 182, 212, 0.05), rgba(239, 68, 68, 0.05))"
      border="1px solid"
      borderColor="rgba(6, 182, 212, 0.2)"
      borderRadius="xl"
      p={{ base: 6, md: 8 }}
      position="relative"
      backdropFilter={
        glassmorphism ? "blur(10px) saturate(180%)" : "blur(0.5px)"
      }
      backgroundColor={glassmorphism ? "rgba(255,255,255,0.10)" : undefined}
      boxShadow={
        glassmorphism ? "0 8px 32px 0 rgba(31, 38, 135, 0.18)" : undefined
      }
      _hover={{
        bg: "linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(239, 68, 68, 0.1))",
        borderColor: "cyan.400",
        transform: "translateY(-4px)",
        boxShadow: glassmorphism
          ? "0 10px 30px rgba(6, 182, 212, 0.25)"
          : "0 10px 30px rgba(6, 182, 212, 0.2)",
      }}
      transition="all 0.4s ease"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: "2px",
        bg: "linear-gradient(90deg, transparent, cyan.400, red.400, transparent)",
        borderRadius: "xl xl 0 0",
      }}
    >
      {children}
    </C.Box>
  )
}
