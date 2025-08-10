"use client"
import * as C from "@/_features/shared/lib/chakraComponents"
import Image from "next/image"
import SocialLinks from "@/_features/shared/components/SocialLinks"

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
          <C.Text fontSize={{ base: "1.5rem", md: "2rem" }} fontWeight={400}>
            Hey, I'm{" "}
            <C.Text as="span" color="red.500">
              Arun.
            </C.Text>
          </C.Text>
          <C.Box mb={5} ml={2}>
            <Image src="/vampireFace.png" alt="me" height={50} width={50} />
          </C.Box>
        </C.Flex>
        <C.Text fontSize={{ base: "3rem", md: "5.5rem" }} fontWeight={600}>
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
