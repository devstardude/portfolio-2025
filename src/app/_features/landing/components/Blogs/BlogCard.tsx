"use client"
import * as C from "../../../shared/lib/chakraComponents"
import { motion } from "framer-motion"
import { ArrowRight, ExternalLink } from "lucide-react"
import GlassTag from "../../../shared/components/GlassTag"
import ActionButton from "../../../shared/components/ActionButton"

interface BlogCardProps {
  blog: {
    name: string
    description: string
    image: string
    ribbon: string
    link: string
  }
}

export default function BlogCard({ blog }: BlogCardProps) {
  const handleCardClick = () => {
    window.open(blog.link, "_blank", "noopener,noreferrer")
  }

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <C.Box
        position="relative"
        cursor="pointer"
        onClick={handleCardClick}
        bg="rgba(255, 255, 255, 0.05)"
        backdropFilter="blur(10px)"
        border="1px solid rgba(255, 255, 255, 0.1)"
        borderRadius="xl"
        overflow="hidden"
        _hover={{
          bg: "rgba(255, 255, 255, 0.08)",
          borderColor: "rgba(255, 255, 255, 0.2)",
        }}
      >
        {/* Ribbon */}
        <C.Box
          position="absolute"
          top={4}
          left={4}
          bg="purple.500"
          color="white"
          px={3}
          py={1}
          borderRadius="md"
          fontSize="xs"
          fontWeight="bold"
          zIndex={2}
        >
          {blog.ribbon}
        </C.Box>

        {/* Blog Image */}
        <C.Box h="200px" overflow="hidden">
          <C.Image
            src={blog.image}
            alt={blog.name}
            w="full"
            h="full"
            objectFit="cover"
          />
        </C.Box>

        {/* Content */}
        <C.Box p={6}>
          <C.Heading
            fontSize={{ base: "lg", md: "xl" }}
            color="cyan.300"
            fontWeight="bold"
            textShadow="0 0 15px rgba(34, 211, 238, 0.5)"
            letterSpacing="tight"
            lineHeight="tight"
            mb={2}
            overflow="hidden"
            textOverflow="ellipsis"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
            }}
          >
            {blog.name}
          </C.Heading>

          <C.Text
            color="gray.300"
            fontSize={{ base: "md", md: "lg" }}
            mb={4}
            overflow="hidden"
            textOverflow="ellipsis"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
            }}
          >
            {blog.description}
          </C.Text>

          {/* Platform Tag */}
          <C.Flex wrap="wrap" gap={2} mb={6}>
            <GlassTag>{blog.ribbon}</GlassTag>
          </C.Flex>

          {/* Read Article Button */}
          <ActionButton
            icon={<ExternalLink width={16} height={16} color="#22c55e" />}
          >
            Read Article
          </ActionButton>
        </C.Box>
      </C.Box>
    </motion.div>
  )
}
