"use client"
import * as C from "../../../shared/lib/chakraComponents"
import { blogs } from "../../../shared/data/Content"
import { BookText } from "lucide-react"
import BlogCard from "./BlogCard"
import SectionWrapper from "../../../shared/components/SectionWrapper"
import { SECTION_BG_COLORS } from "@/_features/shared/data"

export default function Blogs() {
  return (
    <SectionWrapper
      id="blogs"
      title="Blog Posts"
      Icon={BookText}
      iconColor="#8872ed"
      bgColor={SECTION_BG_COLORS.blogs}
      description="Technical articles and insights about web development, blockchain, and emerging technologies"
    >
      {/* Blogs Grid */}
      <C.SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8}>
        {blogs.map((blog, index) => (
          <BlogCard key={index} blog={blog} />
        ))}
      </C.SimpleGrid>
    </SectionWrapper>
  )
}
