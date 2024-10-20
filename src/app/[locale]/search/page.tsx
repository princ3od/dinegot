"use client"

import React, { useState } from "react"
import { getRestaurant } from "@/apis/search/use-search"
import SmallLogo from "@assets/svgs/logo-sm.svg"
import Logo from "@assets/svgs/logo.svg"
import { useI18n } from "@locales/client"
import { FiSearch, FiX } from "react-icons/fi"

import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import FilterBar from "@/components/filter_bar"
import { useLoading } from "@/components/loading-provider"
import RestaurantItem from "@/components/restaurant-item"

interface Restaurant {
  id: string
  name: string
  location: string
  stars: number
  views: number
  snapUrl: string
}

export default function SearchPage() {
  const { setLoading } = useLoading()
  const [query, setQuery] = useState<string | null>("")
  const [restaurants, setRestaurants] = useState<Restaurant[] | null>(null)

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }

  const handleSearchSubmit = async () => {
    if (!query) return
    setLoading(true)
    const fetchedRestaurants = await getRestaurant(query)

    if (fetchedRestaurants) {
      setRestaurants(fetchedRestaurants)
    } else {
      setRestaurants([])
    }

    setLoading(false)
  }

  const clearSearch = () => {
    setQuery("")
    setRestaurants(null)
  }

  const t = useI18n()

  return (
    <div
      className={cn(
        "items-top flex  h-fit  min-h-svh w-full justify-center bg-transparent",
        {
          "bg-background px-0 ": restaurants?.length ?? -1 > 0,
        }
      )}
    >
      <div
        className={cn(
          "flex w-screen max-w-6xl flex-col items-center justify-start bg-transparent  px-4 xl:px-0"
        )}
      >
        <Logo
          className={cn(
            "mb-[24px] mt-[164px] block bg-transparent md:mt-[168px]",
            {
              " hidden": restaurants,
            }
          )}
        />
        <SmallLogo
          className={cn("mb-6 mt-14 hidden min-h-[30px] bg-transparent", {
            " block md:my-4 md:self-start": restaurants,
          })}
        />
        <div
          className={cn(
            "relative  flex w-full max-w-[480px] items-center bg-transparent xl:max-w-[600px]",
            {
              "md:self-start":
                restaurants &&
                Array.isArray(restaurants) &&
                restaurants.length > 0,
            }
          )}
        >
          <FiSearch className="absolute left-4 size-5 bg-transparent" />
          <Input
            type="text"
            value={query ?? ""}
            onChange={handleSearchChange}
            placeholder={t("search.restaurants.hint")}
            className="px-11 py-4 text-[16px] leading-[28px]"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearchSubmit()
              }
            }}
          />
          {query && (
            <FiX
              className="absolute right-4 size-5 cursor-pointer bg-transparent"
              onClick={clearSearch}
            />
          )}
        </div>

        {(restaurants?.length ?? -1) > 0 && <FilterBar />}

        {(restaurants?.length ?? -1) > 0 && (
          <div className="flex w-full flex-col gap-4 bg-transparent">
            {restaurants!.map((restaurant) => (
              <RestaurantItem key={restaurant.id} restaurant={restaurant} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
