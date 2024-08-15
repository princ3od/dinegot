"use client"

import { ReactQueryClientProvider } from "@/components/export/ReactQueryClientProvider"

export default function WebAppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ReactQueryClientProvider>{children}</ReactQueryClientProvider>
}
