"use client"
import * as C from "../../lib/chakraComponents"

interface GlassTagProps {
  children: React.ReactNode
}

export default function GlassTag({ children }: GlassTagProps) {
  return (
    <C.Badge
      px={3}
      py={1}
      bg="rgba(255, 255, 255, 0.05)"
      color="cyan.200"
      borderRadius="md"
      fontSize="sm"
      fontWeight="medium"
      border="1px solid"
      borderColor="rgba(6, 182, 212, 0.25)"
      backdropFilter="blur(10px)"
      boxShadow="0 2px 8px rgba(0, 0, 0, 0.1)"
      _hover={{
        bg: "rgba(6, 182, 212, 0.15)",
        borderColor: "cyan.400",
        backdropFilter: "blur(15px)",
        boxShadow: "0 4px 12px rgba(6, 182, 212, 0.15)",
      }}
      transition="all 0.3s ease"
    >
      {children}
    </C.Badge>
  )
}
