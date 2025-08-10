"use client"
import * as C from "../../lib/chakraComponents"
import { Github, Instagram, Linkedin, Youtube, FileText } from "lucide-react"

const socialLinks = [
  {
    href: "https://github.com/devstardude",
    icon: Github,
    label: "GitHub",
    color: "gray.400",
  },
  {
    href: "https://www.instagram.com/i_m_a.r.u.n/",
    icon: Instagram,
    label: "Instagram",
    color: "pink.400",
  },
  {
    href: "https://linkedin.com/in/arun-shekhar",
    icon: Linkedin,
    label: "LinkedIn",
    color: "blue.400",
  },
  {
    href: "https://www.youtube.com/channel/UCEL_3xlrevncI0OWEzaIY3Q",
    icon: Youtube,
    label: "YouTube",
    color: "red.400",
  },
  {
    href: "https://docs.google.com/document/d/1DDZ6wnSDSUTUWzAilqrr1TKezt-nWBC20-bFXQfNMaY/edit?tab=t.0",
    icon: FileText,
    label: "Resume",
    color: "green.400",
  },
]

export default function SocialLinks() {
  return (
    <C.Flex
      position="fixed"
      top={{ base: "50%", md: "50%" }}
      left={{ base: "auto", md: 6 }}
      bottom={{ base: "auto", md: "auto" }}
      right={{ base: 6, md: "auto" }}
      transform={{ base: "translateY(-50%)", md: "translateY(-50%)" }}
      gap={{ base: 3, md: 4 }}
      flexDir="column"
      zIndex={1000}
    >
      {socialLinks.map((social, idx) => {
        const IconComponent = social.icon as any
        const base = social.color.split(".")[0]
        return (
          <a
            key={idx}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
          >
            <C.Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              w={{ base: 10, md: 12 }}
              h={{ base: 10, md: 12 }}
              rounded="full"
              borderWidth={1}
              borderColor={`${base}.300`}
              bg={`${base}.500/20`}
              backdropFilter="blur(10px)"
              color="white"
              cursor="pointer"
              transition="all 0.3s ease"
              _hover={{
                bg: `${base}.500/30`,
                borderColor: social.color,
                transform: "translateY(-2px)",
                boxShadow:
                  base === "gray"
                    ? "0 8px 32px rgba(156, 163, 175, 0.3)"
                    : base === "pink"
                    ? "0 8px 32px rgba(236, 72, 153, 0.3)"
                    : base === "blue"
                    ? "0 8px 32px rgba(59, 130, 246, 0.3)"
                    : base === "green"
                    ? "0 8px 32px rgba(34, 197, 94, 0.3)"
                    : "0 8px 32px rgba(239, 68, 68, 0.3)",
              }}
            >
              <IconComponent size={18} />
            </C.Box>
          </a>
        )
      })}
    </C.Flex>
  )
}
