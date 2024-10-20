import { Icons } from "@/components/icons"

import { Button } from "./ui/button"

const FilterBar = () => {
  return (
    <div className="mb-8 mt-3  flex items-start space-x-2 self-start border-gray-200 bg-transparent">
      <Button
        variant="ghost"
        className="flex items-center justify-center space-x-2 bg-neutral-100 px-2 py-[6px] "
      >
        <Icons.listFilter className="size-4 bg-transparent" />
        <strong className="bg-transparent">Filter</strong>
      </Button>

      <Button variant="ghost" className="bg-neutral-100 px-2 py-[6px]">
        <strong className=" bg-transparent">Nearby</strong>
      </Button>

      <Button variant="ghost" className="bg-neutral-100 px-2 py-[6px] ">
        <strong className=" bg-transparent">High rating</strong>
      </Button>
    </div>
  )
}

export default FilterBar
