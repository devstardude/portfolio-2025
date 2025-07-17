import type { Metadata } from "next"
import Landing from "../_features/landing/page"

export const metadata: Metadata = {
  title: "Arun Shekhar",
  description: "Portfolio website",
}
export default function Page() {
  return <Landing />
}
