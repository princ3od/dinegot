import Image from "next/image"

interface RestaurantItemProps {
  restaurant: Restaurant
}

const RestaurantItem: React.FC<RestaurantItemProps> = ({ restaurant }) => {
  return (
    <div className="mb-4 mt-4 flex rounded-lg  bg-transparent">
      {/* Restaurant Image */}
      <div className="h-32 w-32 flex-shrink-0 overflow-hidden rounded-lg bg-transparent">
        <Image
          src={restaurant.snapUrl}
          alt={restaurant.name}
          className="h-full w-full object-cover"
          layout="fixed"
          width={128}
          height={128}
          priority={true}
        />
      </div>

      {/* Restaurant Details */}
      <div className="ml-4 flex flex-col justify-start bg-transparent">
        {/* Restaurant Name */}
        <h3 className="bg-transparent text-xl  font-semibold">
          {restaurant.name}
        </h3>

        {/* Rating and Views */}
        <div className="mt-1 flex items-center bg-transparent  text-gray-600">
          <span className="bg-transparent text-lg  text-yellow-500">⭐</span>
          <span className="ml-1 bg-transparent  font-medium">
            {restaurant.stars}
          </span>
          <span className="ml-1 bg-transparent  text-sm">
            ({restaurant.views})
          </span>
        </div>

        {/* Restaurant Location */}
        <p className="mt-2 bg-transparent  text-gray-500">
          {restaurant.location}
        </p>
      </div>
    </div>
  )
}

export default RestaurantItem
