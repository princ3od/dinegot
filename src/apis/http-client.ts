import ky from "ky"

import { env } from "@/env.mjs"
import { duration } from "@/lib/utils"

const attachToken = async (req: Request) => {
  // if (!authUser) return req
  // const idToken = await authUser.getIdToken()
  // req.headers.set("Authorization", `Bearer ${idToken}`)
}

const MainApi = ky.create({
  retry: 0,
  prefixUrl: env.NEXT_PUBLIC_APP_URL,
  timeout: duration.seconds(60),
  hooks: {
    beforeRequest: [attachToken],
  },
})

export const MainApiClient = MainApi
