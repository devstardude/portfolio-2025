"use client"
import * as C from "../../../shared/lib/chakraComponents"
import StarBulletPoint from "../../../shared/components/StarBulletPoint"

interface ResponsibilityListProps {
  responsibilities: string[] | React.ReactNode[]
}

export default function ResponsibilityList({
  responsibilities,
}: ResponsibilityListProps) {
  return (
    <C.Box>
      <C.Heading
        fontSize={{ base: "lg", md: "xl" }}
        fontWeight="semibold"
        color="white"
        mb={4}
      >
        Responsibilities & Impact
      </C.Heading>
      <C.VStack align="stretch" gap={4}>
        {responsibilities.map((responsibility, idx) => (
          <StarBulletPoint
            key={idx}
            variant="cyan"
            fontSize={{ base: "sm", md: "sm" }}
          >
            {typeof responsibility === "string" ? (
              responsibility
            ) : (
              <>{responsibility}</>
            )}
          </StarBulletPoint>
        ))}
      </C.VStack>
    </C.Box>
  )
}
