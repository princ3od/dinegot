"use client"

import { PropsWithChildren } from "react"
import bg from "@assets/png/search_bg.jpg" 

import { Spinner } from "@/components/ui/spinner"
import { useLoading } from "@/components/loading-provider"

import SubLayout from "../client/layout"

export default function Layout({ children }: PropsWithChildren) {
  const { loading } = useLoading() 

  return (
    <SubLayout
      params={{
        locale: "vi",
      }}
    >
      <div
        className="relative h-screen w-full overflow-hidden bg-background-container"
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {" "}
        <div className="absolute inset-0 z-10 bg-[#F7F7F7] opacity-70 backdrop-blur-sm" />{" "}
        <div className="items-top relative z-20 flex h-screen   w-screen  justify-center overflow-x-hidden overflow-y-scroll bg-white bg-opacity-70">
          {children}
        </div>
        {loading && (
          <div className="absolute inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <Spinner className="rounded-full bg-black" />
          </div>
        )}
      </div>
    </SubLayout>
  )
}
