"use client"
import * as C from "../../shared/lib/chakraComponents"
import Image from "next/image"

function SocialLinks() {
  return (
    <C.Flex
      position="absolute"
      top={0}
      left={0}
      h="full"
      gap={4}
      align="flex-start"
      flexDir="column"
      justify="center"
      pl={6}
    >
      {[1, 2, 3, 4].map((item, idx) => (
        <C.Flex
          key={idx}
          align="center"
          px={4}
          cursor="pointer"
          w="auto"
          _hover={{ boxShadow: "lg", borderColor: "cyan.700" }}
        >
          <C.Box
            w={10}
            h={10}
            rounded="full"
            borderWidth={2}
            borderColor="cyan.800"
            bg="transparent"
            transition="all 0.2s"
          />
        </C.Flex>
      ))}
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
          <C.Text fontSize="2rem" fontWeight={400}>
            Hey, I'm{" "}
            <C.Text as="span" color="red.500">
              Arun.
            </C.Text>
          </C.Text>
          <C.Box mb={5} ml={2}>
            <Image src="/vampireFace.png" alt="me" height={50} width={50} />
          </C.Box>
        </C.Flex>
        <C.Text fontSize="5.5rem" fontWeight={600}>
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
