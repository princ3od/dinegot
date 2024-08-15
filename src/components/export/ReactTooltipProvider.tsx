"use client"

import React from "react"

import { TooltipProvider } from "../ui/tooltip"

export const ReactTooltipProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return <TooltipProvider>{children}</TooltipProvider>
}
