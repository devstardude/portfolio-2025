"use client"
import * as C from "../../../shared/lib/chakraComponents"

interface ProjectCommunityProps {
  community: Array<{
    platform: string
    followers?: string
    members?: string
  }>
}

export default function ProjectCommunity({ community }: ProjectCommunityProps) {
  return (
    <C.Box>
      <C.Heading
        fontSize={{ base: "lg", md: "xl" }}
        fontWeight="semibold"
        color="white"
        mb={4}
      >
        Community Growth
      </C.Heading>
      <C.Flex gap={6} wrap="wrap">
        {community.map((social, idx) => (
          <C.Text key={idx} fontSize="md" color="gray.300">
            <C.Text as="span" fontWeight="bold">
              {social.platform}:
            </C.Text>{" "}
            {social.followers || social.members}
          </C.Text>
        ))}
      </C.Flex>
    </C.Box>
  )
}
