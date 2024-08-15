import { error } from "console"

import { admin } from "@/lib/firebase"

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug
  const restaurant = await admin
    .firestore()
    .collection("restaurants")
    .doc(slug)
    .get()
  if (!restaurant.data()) {
    return Response.json({ error: "Not found" }, { status: 404 })
  }
  return Response.json({ ...restaurant.data(), id: restaurant.id })
}
