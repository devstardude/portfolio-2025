"use client"
import * as C from "../../shared/lib/chakraComponents"
import Image from "next/image"
import { Github, Instagram, Linkedin, Youtube } from "lucide-react"

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
]

function SocialLinks() {
  return (
    <C.Flex
      position="fixed"
      top="50%"
      left={6}
      transform="translateY(-50%)"
      gap={4}
      flexDir="column"
      zIndex={1000}
    >
      {socialLinks.map((social, idx) => {
        const IconComponent = social.icon
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
              w={12}
              h={12}
              rounded="full"
              borderWidth={1}
              borderColor={`${social.color.split(".")[0]}.300`}
              bg={`${social.color.split(".")[0]}.500/20`}
              backdropFilter="blur(10px)"
              color="white"
              cursor="pointer"
              transition="all 0.3s ease"
              _hover={{
                bg: `${social.color.split(".")[0]}.500/30`,
                borderColor: social.color,
                transform: "translateY(-2px)",
                boxShadow: `0 8px 32px ${
                  social.color.split(".")[0] === "gray"
                    ? "rgba(156, 163, 175, 0.3)"
                    : social.color.split(".")[0] === "pink"
                    ? "rgba(236, 72, 153, 0.3)"
                    : social.color.split(".")[0] === "blue"
                    ? "rgba(59, 130, 246, 0.3)"
                    : "rgba(239, 68, 68, 0.3)"
                }`,
              }}
            >
              <IconComponent size={20} />
            </C.Box>
          </a>
        )
      })}
    </C.Flex>
  )
}

export default function Masthead() {
  return (
    <C.Flex
      position="relative"
      flexDir="column"
      align="center"
      justify="center"
      w="full"
      h="100vh"
      px={6}
    >
      <SocialLinks />
      <C.Flex flexDir="column" px="5rem">
        <C.Flex align="center">
          <C.Text fontSize={{ base: "1.5rem", md: "2rem" }} fontWeight={400}>
            Hey, I'm{" "}
            <C.Text as="span" color="red.500">
              Arun.
            </C.Text>
          </C.Text>
          <C.Box mb={5} ml={2}>
            <Image src="/vampireFace.png" alt="me" height={50} width={50} />
          </C.Box>
        </C.Flex>
        <C.Text fontSize={{ base: "3rem", md: "5.5rem" }} fontWeight={600}>
          Developer{" "}
          <C.Text as="span" color="red.500">
            /
          </C.Text>{" "}
          Programmer
        </C.Text>
      </C.Flex>
    </C.Flex>
  )
}
