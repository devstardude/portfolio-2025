"use client"
import * as C from "../../lib/chakraComponents"
import { Star } from "lucide-react"

interface StarBulletPointProps {
  children: React.ReactNode
  variant?: "cyan" | "yellow" | "default"
  fontSize?: object | string
}

export default function StarBulletPoint({
  children,
  variant = "default",
  fontSize = { base: "sm", md: "md" },
}: StarBulletPointProps) {
  // Define color schemes for different variants
  const colorSchemes = {
    cyan: {
      starColor: "#22d3ee",
      starFill: "rgba(34, 211, 238, 0.2)",
      bgColor: "rgba(255, 255, 255, 0.1)",
      borderColor: "rgba(255, 255, 255, 0.2)",
      textColor: "gray.100",
      hoverTextColor: "white",
    },
    yellow: {
      starColor: "#fbbf24",
      starFill: "transparent",
      bgColor: "rgba(255, 193, 7, 0.1)",
      borderColor: "rgba(255, 193, 7, 0.25)",
      textColor: "gray.200",
      hoverTextColor: "gray.50",
    },
    default: {
      starColor: "#22d3ee",
      starFill: "rgba(34, 211, 238, 0.2)",
      bgColor: "rgba(255, 255, 255, 0.1)",
      borderColor: "rgba(255, 255, 255, 0.2)",
      textColor: "gray.300",
      hoverTextColor: "white",
    },
  }

  const scheme = colorSchemes[variant]

  return (
    <C.Flex alignItems="center" gap={3}>
      <C.Box
        bg={scheme.bgColor}
        border="1px solid"
        borderColor={scheme.borderColor}
        borderRadius="full"
        p={1}
        backdropFilter="blur(10px)"
        mr={{ base: 1 }}
        flexShrink={0}
        boxShadow={
          variant === "yellow" ? "0 2px 8px rgba(255, 193, 7, 0.1)" : "none"
        }
      >
        <Star
          width={variant === "yellow" ? 14 : 12}
          height={variant === "yellow" ? 14 : 12}
          color={scheme.starColor}
          fill={scheme.starFill}
        />
      </C.Box>
      <C.Text
        color={scheme.textColor}
        fontSize={fontSize}
        lineHeight={variant === "yellow" ? "1.6" : "1.5"}
        _hover={{
          color: scheme.hoverTextColor,
        }}
        transition="color 0.3s ease"
      >
        {children}
      </C.Text>
    </C.Flex>
  )
}
