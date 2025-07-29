"use client"
import * as C from "../../lib/chakraComponents"

export default function SquigglyDivider() {
  return (
    <C.Box
      position="absolute"
      bottom="0"
      left="50%"
      transform="translateX(-50%)"
      w="40%"
      maxW="400px"
      minW="200px"
      h="4px"
      bg="linear-gradient(90deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.3))"
      borderRadius="full"
      opacity="0.8"
      zIndex={10}
    />
  )
}
