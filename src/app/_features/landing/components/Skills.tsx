"use client"
import * as C from "../../shared/lib/chakraComponents"

const techs = [
  {
    title: "Front-End",
    desc: "React, Redux, Next.js, TypeScript, Jest Testing",
  },
  {
    title: "Back-End",
    desc: "Node, Express, REST, GraphQL, Go API",
  },
  {
    title: "Database",
    desc: "MongoDB, Firestore, DynamoDB ",
  },
  {
    title: "UI/UX",
    desc: "Tailwind CSS, Material UI, Framer motion",
  },
  {
    title: "Cloud Services",
    desc: "Firebase, AWS",
  },
  {
    title: "Version Tracking",
    desc: "Git, GitHub, GitLab",
  },
  {
    title: "Languages",
    desc: "Python, JavaScript, C++, Go, TypeScript, Solidity",
  },
  {
    title: "Misc",
    desc: "Blockchain, NFTs applications, Fully Functional Bot in Discord.js",
  },
  {
    title: "Project Management",
    desc: "Notion, Asana, Trello, Slack",
  },
]

function SkillBox({ title, desc }: { title: string; desc: string }) {
  return (
    <C.Flex flexDir="column" align="center" gap={2}>
      <C.Text
        fontSize="2rem"
        fontWeight={600}
        textAlign="center"
        color="cyan.500"
      >
        {title}
      </C.Text>
      <C.Text fontSize="1.2rem" fontWeight={200} textAlign="center">
        {desc}
      </C.Text>
    </C.Flex>
  )
}

export default function Skills() {
  return (
    <C.Flex
      minH="100vh"
      justify="center"
      align="center"
      py={12}
      px={6}
      flexDir="column"
      gap={8}
    >
      <C.Text fontSize="4rem" fontWeight={600} color="red.500">
        Skills
      </C.Text>
      <C.Grid
        templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
        gap={20}
        justifyContent="center"
        alignItems="start"
        w="full"
        py={6}
        px={10}
      >
        {techs.map((tech) => (
          <SkillBox key={tech.title} title={tech.title} desc={tech.desc} />
        ))}
      </C.Grid>
    </C.Flex>
  )
}
