import { Metadata, ResolvingMetadata } from "next"
import { notFound } from "next/navigation"
import { getI18n } from "@locales/server"

import { env } from "@/env.mjs"
import { Icons } from "@/components/icons"
import InfoItem from "@/components/modules/restaurants/info-item"

export const revalidate = 60 * 5 * 1 // 5 minutes

type Props = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const response = await fetch(
    `${env.NEXT_PUBLIC_APP_URL}/api/restaurants/${params.slug}`
  )

  if (!response.ok) {
    return notFound()
  }

  const restaurant = (await response.json()) as Restaurant

  return {
    title: restaurant.name,
  }
}

export default async function RestaurantPage({
  params,
}: {
  params: { slug: string }
}) {
  const response = await fetch(
    `${env.NEXT_PUBLIC_APP_URL}/api/restaurants/${params.slug}`
  )

  if (!response.ok) {
    return notFound()
  }

  const restaurant = (await response.json()) as Restaurant

  const t = await getI18n()

  return (
    <main className="">
      <div className="p-3">
        <div className="container m-auto">
          <h1 className="md:text-4xlp pb-2 text-3xl">{restaurant.name}</h1>
          <InfoItem
            icon={<Icons.mapPin className="h-4 w-4 md:h-5 md:w-5" />}
            ariaLabel={t("restaurants.info.address")}
          >
            {restaurant.location}
          </InfoItem>
        </div>
      </div>
    </main>
  )
}
