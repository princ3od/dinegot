import { Icons } from "@/components/icons"

import { Button } from "./ui/button"

const FilterBar = () => {
  return (
    <div className="flex items-start  space-x-4 self-start border-gray-200 bg-transparent px-4">
      <Button
        variant="ghost"
        className="flex items-center justify-center space-x-2 bg-neutral-100"
      >
        <Icons.listFilter className="h-4 w-4 bg-transparent" />
        <strong className="bg-transparent">Filter</strong>
      </Button>

      <Button variant="ghost" className="bg-neutral-100">
        <strong className="bg-transparent">Nearby</strong>
      </Button>

      <Button variant="ghost" className="bg-neutral-100">
        <strong className="bg-transparent">High rating</strong>
      </Button>
    </div>
  )
}

export default FilterBar
