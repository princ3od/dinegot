const restaurants = {
  changkangkum: {
    id: "changkangkum",
    name: "Chang Kang Kum",
    location: "Kuala Lumpur",
  },
  "sushi-king": {
    id: "sushi-king",
    name: "Sushi King",
    location: "Ho Chi Minh City",
  },
} as Record<string, { id: string; name: string }>

export const getRestaurant = async (id: string) => {
  await new Promise((res) => setTimeout(res, 500))
  const restaurant = id in restaurants ? restaurants[id] : null
  return restaurant
}
