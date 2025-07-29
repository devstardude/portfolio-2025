"use client"
import { ReactNode } from "react"
import * as C from "../../lib/chakraComponents"

interface ActionButtonProps {
  children: ReactNode
  icon: ReactNode
  onClick?: () => void
}

export default function ActionButton({
  children,
  icon,
  onClick,
}: ActionButtonProps) {
  return (
    <C.Flex align="center" gap={2}>
      <C.Button
        size="sm"
        variant="outline"
        borderColor="green.500"
        color="green.400"
        bg="rgba(34, 197, 94, 0.05)"
        _hover={{
          bg: "rgba(34, 197, 94, 0.1)",
          borderColor: "green.400",
        }}
        flex="1"
        onClick={onClick}
      >
        {children}
        {icon}
      </C.Button>
    </C.Flex>
  )
}
