"use client"

import React, { createContext, ReactNode, useContext, useState } from "react"

interface LoadingContextProps {
  loading: boolean
  setLoading: (loading: boolean) => void
}

// Create the context
const LoadingContext = createContext<LoadingContextProps | undefined>(undefined)

// Create a provider component
export const LoadingProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [loading, setLoading] = useState<boolean>(false)

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  )
}

// Custom hook to use the loading context
export const useLoading = () => {
  const context = useContext(LoadingContext)
  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider")
  }
  return context
}
