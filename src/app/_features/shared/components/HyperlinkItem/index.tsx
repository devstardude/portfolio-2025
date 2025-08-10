"use client"
import * as C from "../../lib/chakraComponents"
import { ExternalLink } from "lucide-react"

interface HyperlinkItemProps {
  href: string
  title?: string
  color?: "green" | "cyan"
  size?: number
}

export default function HyperlinkItem({
  href,
  title = "Open in new tab",
  color = "green",
  size = 16,
}: HyperlinkItemProps) {
  const colorToken = color === "green" ? "#22c55e" : "#06b6d4"
  const borderHover = color === "green" ? "green.400" : "cyan.400"
  const borderBase =
    color === "green" ? "rgba(34, 197, 94, 0.3)" : "rgba(6, 182, 212, 0.3)"

  return (
    <C.Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={title}
      title={title}
    >
      <C.Box
        as="span"
        display="inline-flex"
        alignItems="center"
        justifyContent="center"
        border="1px solid"
        borderColor={borderBase}
        borderRadius="md"
        p={1}
        _hover={{ borderColor: borderHover, transform: "translateY(-1px)" }}
        transition="all 0.2s ease"
      >
        <ExternalLink size={size} color={colorToken} />
      </C.Box>
    </C.Link>
  )
}
