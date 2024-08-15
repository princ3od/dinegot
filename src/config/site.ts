import { SiteConfig } from "@/types"

import { env } from "@/env.mjs"

export const siteConfig: SiteConfig = {
  name: "dinegot",
  author: "Trong Duong",
  description: "View and brose the menu of any restaurant or cafe",
  keywords: [],
  url: {
    base: env.NEXT_PUBLIC_APP_URL,
    author: "https://github.com/princ3od",
  },
  links: {
    github: "https://github.com/redpangilinan/next-entree",
  },
  ogImage: `${env.NEXT_PUBLIC_APP_URL}/og.jpg`,
}
