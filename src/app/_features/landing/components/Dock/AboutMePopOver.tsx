"use client"

import { motion } from "framer-motion"
import * as C from "@/_features/shared/lib/chakraComponents"
import GradientWrapper from "../../../shared/components/GradientWrapper"

// Constants
const ANIMATION_CONFIG = {
  duration: 0.4,
  delay: 0.2,
  ease: [0.25, 0.46, 0.45, 0.94] as const,
}

const BACKGROUND_ELEMENTS = [
  {
    opacity: 0.1,
    delay: 0.5,
    style: {
      top: "-15px",
      right: "-15px",
      width: "60px",
      height: "60px",
      background: "linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)",
      filter: "blur(25px)",
    },
  },
  {
    opacity: 0.1,
    delay: 0.7,
    style: {
      bottom: "-20px",
      left: "-20px",
      width: "80px",
      height: "80px",
      background: "linear-gradient(135deg, #EC4899 0%, #F59E0B 100%)",
      filter: "blur(30px)",
    },
  },
]

const ABOUT_CONTENT = [
  {
    text: "I'm a professional Full-stack Developer and Programmer, experienced in a vast range of technologies in Frontend, Backend, Databases, Blockchain, Programming languages, etc.",
    emoji: "💻",
    delay: 0.1,
  },
  {
    text: "I enjoy solving complex problems and building applications that solve real-world problems and learning new technology is always exciting for me.",
    emoji: "🚀",
    delay: 0.2,
  },
  {
    text: "Apart from programming, I like to run in the park on a nice evening, as it refreshes my mind and brings more creative ideas.",
    emoji: "🏃‍♂️",
    delay: 0.3,
  },
  {
    text: "In my journey of Programming, I go by the codename: Devstardude",
    emoji: "⭐",
    delay: 0.4,
  },
]

const CARD_STYLES = {
  bg: "rgba(71, 85, 105, 0.4)",
  border: "1px solid rgba(71, 85, 105, 0.25)",
  hoverBg: "rgba(71, 85, 105, 0.6)",
  hoverBorder: "rgba(59, 130, 246, 0.6)",
}

// Animation variants
const containerVariants = {
  initial: { opacity: 0, scale: 0.9, y: 20 },
  animate: { opacity: 1, scale: 1, y: 0 },
}

const itemVariants = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
}

const BackgroundElement = ({
  element,
  index,
}: {
  element: (typeof BACKGROUND_ELEMENTS)[0]
  index: number
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: element.opacity }}
    transition={{ delay: element.delay, duration: 0.8 }}
    style={{
      position: "absolute",
      borderRadius: "50%",
      zIndex: 0,
      ...element.style,
    }}
  />
)

const AnimatedEmoji = ({ emoji, index }: { emoji: string; index: number }) => (
  <motion.div
    animate={{
      rotate: [0, 8, -8, 0],
      scale: [1, 1.05, 1],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      delay: index * 0.5,
    }}
    style={{ fontSize: "16px", marginTop: "1px", flexShrink: 0 }}
  >
    {emoji}
  </motion.div>
)

const ContentCard = ({
  item,
  index,
}: {
  item: (typeof ABOUT_CONTENT)[0]
  index: number
}) => (
  <motion.div
    variants={itemVariants}
    transition={{
      delay: 0.5 + item.delay,
      duration: 0.5,
      ease: "easeOut",
    }}
  >
    <C.Flex
      gap={3}
      align="flex-start"
      p={2}
      borderRadius="md"
      bg={CARD_STYLES.bg}
      border={CARD_STYLES.border}
      cursor="pointer"
      _hover={{
        bg: CARD_STYLES.hoverBg,
        borderColor: CARD_STYLES.hoverBorder,
        transform: "translateY(-2px)",
        boxShadow: "0 4px 12px rgba(59, 130, 246, 0.2)",
      }}
      transition="all 0.3s ease"
    >
      <AnimatedEmoji emoji={item.emoji} index={index} />
      <C.Text
        fontSize={{ base: "md", md: "md" }}
        color="black"
        lineHeight="1.5"
        flex={1}
        fontWeight="medium"
      >
        {item.text}
      </C.Text>
    </C.Flex>
  </motion.div>
)

const AboutMePopover = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      transition={ANIMATION_CONFIG}
    >
      <GradientWrapper
        glassmorphism
        p={{ base: 2, md: 4 }}
        // borderColor="#fbbf24"
      >
        <C.Box
          maxW={{ base: "90vw", md: "500px" }}
          minW="360px"
          position="relative"
          overflow="hidden"
        >
          {/* Background Elements */}
          {BACKGROUND_ELEMENTS.map((element, index) => (
            <BackgroundElement key={index} element={element} index={index} />
          ))}

          {/* Content */}
          <C.Box position="relative" zIndex={1}>
            {/* Header */}

            {/* Content Section */}
            <C.Box>
              <C.VStack align="stretch" gap={2}>
                {ABOUT_CONTENT.map((item, index) => (
                  <ContentCard key={index} item={item} index={index} />
                ))}
              </C.VStack>
            </C.Box>
          </C.Box>
        </C.Box>
      </GradientWrapper>
    </motion.div>
  )
}

export default AboutMePopover
