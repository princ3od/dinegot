"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import { duration } from "@/lib/utils"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      retry: 3,
      staleTime: duration.minutes(5),
      retryDelay(failureCount) {
        return duration.seconds(0.8 * failureCount)
      },
    },
  },
})

export const ReactQueryClientProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
