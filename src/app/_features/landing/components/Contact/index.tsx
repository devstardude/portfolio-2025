"use client"
import { useState } from "react"
import Image from "next/image"
import * as C from "../../../shared/lib/chakraComponents"
import { Mail, Copy, Check } from "lucide-react"
import SectionWrapper from "../../../shared/components/SectionWrapper"

export default function Contact() {
  const [isCopied, setIsCopied] = useState(false)

  const handleEmailClick = async () => {
    try {
      await navigator.clipboard.writeText("arunshekhar001@gmail.com")
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000) // Reset after 2 seconds
    } catch (err) {
      console.error("Failed to copy email:", err)
    }
  }

  return (
    <SectionWrapper
      id="contact"
      title="Let's Connect"
      Icon={Mail}
      iconColor="#22c55e"
      bgColor="rgba(34, 197, 94, 0.05)"
      description="Ready to bring your ideas to life? Let's collaborate and create something amazing together"
    >
      {/* Contact Container */}
      <C.Box maxW="2xl" mx="auto" textAlign="center">
        {/* Email Contact Card */}
        <C.Box
          bg="rgba(255, 255, 255, 0.05)"
          backdropFilter="blur(20px)"
          border="1px solid"
          borderColor="rgba(255, 255, 255, 0.1)"
          borderRadius="2xl"
          p={{ base: 8, md: 12 }}
          cursor="pointer"
          onClick={handleEmailClick}
          _hover={{
            bg: "rgba(34, 197, 94, 0.08)",
            borderColor: "#22c55e",
            transform: "translateY(-4px)",
            boxShadow: "0 20px 40px rgba(34, 197, 94, 0.2)",
          }}
          style={{
            transition: "all 0.4s ease",
          }}
          _before={{
            content: '""',
            position: "absolute",
            inset: 0,
            padding: "2px",
            background:
              "linear-gradient(135deg, rgba(34, 197, 94, 0.3), rgba(6, 182, 212, 0.3), rgba(168, 85, 247, 0.3))",
            borderRadius: "inherit",
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            maskComposite: "xor",
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            pointerEvents: "none",
          }}
          position="relative"
        >
          {/* Email Icon */}
          <C.Flex justify="center" mb={6}>
            <C.Box
              p={4}
              borderRadius="full"
              bg="rgba(34, 197, 94, 0.1)"
              border="1px solid rgba(34, 197, 94, 0.2)"
              backdropFilter="blur(10px)"
              _groupHover={{
                bg: "rgba(34, 197, 94, 0.15)",
                borderColor: "rgba(34, 197, 94, 0.4)",
                transform: "scale(1.1)",
              }}
              style={{
                transition: "all 0.3s ease",
              }}
            >
              <Mail
                width={32}
                height={32}
                color="#22c55e"
                style={{
                  filter: "drop-shadow(0 0 12px rgba(34, 197, 94, 0.6))",
                }}
              />
            </C.Box>
          </C.Flex>

          {/* Email Address */}
          <C.Text
            fontSize={{ base: "xl", md: "2xl" }}
            fontWeight="bold"
            color="white"
            mb={4}
            textShadow="0 0 10px rgba(255, 255, 255, 0.3)"
          >
            arunshekhar001@gmail.com
          </C.Text>

          {/* Call to Action */}
          <C.Flex
            align="center"
            justify="center"
            gap={3}
            opacity={0.8}
            _groupHover={{ opacity: 1 }}
            style={{ transition: "opacity 0.3s ease" }}
          >
            {isCopied ? (
              <>
                <Check width={16} height={16} color="#22c55e" />
                <C.Text
                  fontSize={{ base: "md", md: "lg" }}
                  color="#22c55e"
                  fontWeight="medium"
                >
                  Email copied to clipboard!
                </C.Text>
              </>
            ) : (
              <>
                <Copy width={16} height={16} color="#22c55e" />
                <C.Text
                  fontSize={{ base: "md", md: "lg" }}
                  color="gray.300"
                  fontWeight="medium"
                >
                  Click to copy email address
                </C.Text>
              </>
            )}
          </C.Flex>
        </C.Box>

        {/* Additional Contact Info */}

        {/* Vampire Picture - Portfolio Ending */}
        <C.Flex justify="center" mt={12}>
          <C.Box
            p={4}
            borderRadius="full"
            // bg="rgba(255, 255, 255, 0.05)"
            // border="1px solid rgba(255, 255, 255, 0.1)"
            backdropFilter="blur(10px)"
            _hover={{
              bg: "rgba(255, 255, 255, 0.08)",
              borderColor: "rgba(255, 255, 255, 0.2)",
              transform: "scale(1.05)",
            }}
            style={{
              transition: "all 0.3s ease",
            }}
          >
            <Image
              src="/vampireFace.png"
              alt="Arun - Portfolio Author"
              height={80}
              width={80}
              style={{ borderRadius: "50%" }}
            />
          </C.Box>
        </C.Flex>
      </C.Box>
    </SectionWrapper>
  )
}
