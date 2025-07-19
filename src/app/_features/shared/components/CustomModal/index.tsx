"use client"
import { ReactNode } from "react"
import * as C from "../../lib/chakraComponents"
import { X } from "lucide-react"

interface CustomModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: ReactNode
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "cover" | "full"
  maxWidth?: object | string
}

export default function CustomModal({
  isOpen,
  onClose,
  title,
  children,
  size = "xl",
  maxWidth,
}: CustomModalProps) {
  // Consistent responsive maxWidth - fixed values for better consistency
  const responsiveMaxWidth = maxWidth || {
    base: "90vw",
    sm: "85vw",
    md: "750px",
    lg: "850px",
    xl: "950px",
  }

  return (
    <C.Dialog.Root
      open={isOpen}
      onOpenChange={({ open }) => !open && onClose()}
      placement="center"
    >
      <C.Portal>
        <C.Dialog.Backdrop bg="rgba(0, 0, 0, 0.8)" backdropFilter="blur(2px)" />
        <C.Dialog.Positioner
          display="flex"
          alignItems="center"
          justifyContent="center"
          p={{ base: 4, md: 6 }}
        >
          <C.Dialog.Content
            maxW={responsiveMaxWidth}
            w="full"
            mx="auto"
            my="auto"
          >
            <C.Box
              bg="linear-gradient(135deg, rgba(6, 182, 212, 0.05), rgba(239, 68, 68, 0.05))"
              border="2px solid"
              borderColor="rgba(6, 182, 212, 0.3)"
              borderRadius="xl"
              backdropFilter="blur(20px)"
              overflow="hidden"
              maxH={{ base: "90vh", md: "85vh" }}
              minH={{ base: "400px", md: "500px" }}
              position="relative"
              w="full"
              display="flex"
              flexDirection="column"
              boxShadow="0 20px 60px rgba(6, 182, 212, 0.2)"
              _before={{
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "2px",
                bg: "linear-gradient(90deg, transparent, cyan.400, red.400, transparent)",
                borderRadius: "xl xl 0 0",
                zIndex: 1,
              }}
            >
              {/* Header */}
              <C.Dialog.Header
                p={{ base: 4, md: 6 }}
                borderBottom="1px solid"
                borderColor="rgba(255, 255, 255, 0.1)"
                position="relative"
                flexShrink={0}
              >
                <C.Dialog.Title
                  color="cyan.300"
                  fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
                  fontWeight="bold"
                  pr={10}
                  lineHeight="tight"
                  textShadow="0 0 15px rgba(34, 211, 238, 0.5)"
                  letterSpacing="tight"
                >
                  {title}
                </C.Dialog.Title>
                <C.Dialog.CloseTrigger
                  asChild
                  position="absolute"
                  top={{ base: 4, md: 6 }}
                  right={{ base: 4, md: 6 }}
                >
                  <C.Button
                    variant="ghost"
                    size="sm"
                    color="gray.400"
                    _hover={{
                      color: "white",
                      bg: "rgba(255, 255, 255, 0.1)",
                    }}
                    p={2}
                    borderRadius="md"
                  >
                    <X width={18} height={18} />
                  </C.Button>
                </C.Dialog.CloseTrigger>
              </C.Dialog.Header>

              {/* Body */}
              <C.Dialog.Body
                p={{ base: 4, md: 6 }}
                overflowY="auto"
                overflowX="hidden"
                flex="1"
                css={{
                  "&::-webkit-scrollbar": {
                    width: "6px",
                  },
                  "&::-webkit-scrollbar-track": {
                    background: "rgba(255, 255, 255, 0.1)",
                    borderRadius: "3px",
                  },
                  "&::-webkit-scrollbar-thumb": {
                    background: "rgba(255, 255, 255, 0.3)",
                    borderRadius: "3px",
                  },
                  "&::-webkit-scrollbar-thumb:hover": {
                    background: "rgba(255, 255, 255, 0.5)",
                  },
                }}
              >
                {children}
              </C.Dialog.Body>
            </C.Box>
          </C.Dialog.Content>
        </C.Dialog.Positioner>
      </C.Portal>
    </C.Dialog.Root>
  )
}
