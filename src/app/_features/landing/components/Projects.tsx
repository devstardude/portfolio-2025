"use client"
import * as C from "../../shared/lib/chakraComponents"

export default function Projects() {
  return (
    <C.Flex
      h="100vh"
      w="full"
      align="center"
      justify="center"
      flexDir="column"
      bg="rgba(8, 145, 178, 0.2)"
    >
      <C.Text fontSize="4rem" fontWeight={600} color="cyan.500">
        {/* Projects */}
      </C.Text>
    </C.Flex>
  )
}
