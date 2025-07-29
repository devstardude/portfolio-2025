"use client"
import * as C from "../../../shared/lib/chakraComponents"
import { blogs } from "../../../shared/data/Content"
import { BookOpen } from "lucide-react"
import BlogCard from "./BlogCard"
import SectionWrapper from "../../../shared/components/SectionWrapper"

export default function Blogs() {
  return (
    <SectionWrapper
      title="Blog Posts"
      Icon={BookOpen}
      iconColor="#9ca3af"
      bgColor="rgba(168, 85, 247, 0.05)"
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
