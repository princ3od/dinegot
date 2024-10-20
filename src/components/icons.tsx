import { Command, MapPin, Moon, SunMedium, ListFilter  } from "lucide-react"

export type IconKeys = keyof typeof icons

type IconsType = {
  [key in IconKeys]: React.ElementType
}

const icons = {
  logo: Command,
  sun: SunMedium,
  moon: Moon,
  mapPin: MapPin,
  listFilter: ListFilter,
}

export const Icons: IconsType = icons
