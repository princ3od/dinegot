import { PropsWithChildren } from "react"
import { getI18n } from "@locales/server"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export default async function Layout({ children }: PropsWithChildren) {
  const t = await getI18n()

  return (
    <div className="h-screen w-full bg-background-container">
      <nav className="">
        <div className="container flex items-center justify-between p-3">
          <div className="flex items-center gap-1">
            <Icons.logo className="h-6 w-6" />
            <p>dinegot</p>
          </div>
          <Button variant="outline">{t("navbar.loginSignUp")}</Button>
        </div>
      </nav>

      {children}
    </div>
  )
}
