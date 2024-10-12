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

// Define the Restaurant type according to your data structure
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
  const [query, setQuery] = useState<string>("")
  const [restaurants, setRestaurants] = useState<Restaurant[] | null>(null) // Initialize as an empty array

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }

  const handleSearchSubmit = async () => {
    setLoading(true)
    const fetchedRestaurants = await getRestaurant(query)

    // Check if fetchedRestaurants is not null before updating state
    if (fetchedRestaurants) {
      setRestaurants(fetchedRestaurants)
    } else {
      setRestaurants([]) // Set to empty array if no results found
    }

    setLoading(false)
  }

  const clearSearch = () => {
    setQuery("")
    setRestaurants([]) // Clear the restaurants when the search is reset
  }

  const t = useI18n()

  return (
    <div
      className={cn(
        "items-top flex  h-fit  min-h-svh w-full justify-center bg-transparent",
        {
          "bg-white px-0 ": restaurants?.length ?? -1 > 0,
        }
      )}
    >
      <div
        className={cn(
          "flex w-screen max-w-6xl flex-col items-center justify-start bg-transparent  px-4"
        )}
      >
        <Logo
          className={cn("hidden  bg-transparent", {
            "mt-32 md:block": !restaurants,
            "mb-0 ml-4 mt-4  min-h-14 self-start md:block":
              restaurants &&
              Array.isArray(restaurants) &&
              restaurants.length > 0,
            "mb-0 ml-4 mt-32  md:block":
              restaurants &&
              Array.isArray(restaurants) &&
              restaurants.length == 0,
          })}
        />

        <SmallLogo
          className={cn("mb-6 mt-3 block min-h-7 bg-transparent md:hidden", {
            " hidden": !restaurants,
          })}
        />
        <div
          className={cn(
            "relative   flex w-full max-w-[480px] items-center bg-transparent p-4",
            {
              "md:self-start":
                restaurants &&
                Array.isArray(restaurants) &&
                restaurants.length > 0,
            }
          )}
        >
          <FiSearch className="absolute left-8 bg-transparent" />
          <Input
            type="text"
            value={query}
            onChange={handleSearchChange}
            placeholder={t("search.restaurants.hint")}
            className="text-ellipsis pl-10 pr-10"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearchSubmit() // Calls the search function
              }
            }}
          />
          {query && (
            <FiX
              className="absolute right-8 cursor-pointer bg-transparent"
              onClick={clearSearch}
            />
          )}
        </div>

        {(restaurants?.length ?? -1) > 0 && <FilterBar />}

        {(restaurants?.length ?? -1) > 0 && (
          <div className="w-full bg-white p-4">
            {restaurants!.map((restaurant) => (
              <RestaurantItem key={restaurant.id} restaurant={restaurant} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
