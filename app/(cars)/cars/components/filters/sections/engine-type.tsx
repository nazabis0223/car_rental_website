import { Dispatch, SetStateAction } from "react"

import { Separator } from "@/app/components/ui/separator"
import { ToggleGroup, ToggleGroupItem } from "@/app/components/ui/toggle-group"

import { EngineType, SelectedFilters } from "../types"

const engineTypes: {
  slug: EngineType
  name: string
}[] = [
  {
    slug: "gas",
    name: "Gas",
  },
  { slug: "hybrid", name: "Hybrid" },
  {
    slug: "electric",
    name: "Electric",
  },
]

interface EngineTypeSectionProps {
  selectedFilters: SelectedFilters
  setSelectedFilters: Dispatch<SetStateAction<SelectedFilters>>
}

export function EngineTypeSection({
  selectedFilters,
  setSelectedFilters,
}: EngineTypeSectionProps) {
  const handleEngineTypeChange = (engineType: EngineType | null) => {
    if (engineType) {
      setSelectedFilters({
        ...selectedFilters,
        engineTypes: [engineType],
      })
    } else {
      setSelectedFilters({
        ...selectedFilters,
        engineTypes: [],
      })
    }
  }

  return (
    <section>
      <h3 className="text-lg font-semibold">Engine type</h3>
      <div className="pt-5">
        <ToggleGroup
          type="single"
          value={selectedFilters.engineTypes[0] || null}
          onValueChange={(value) =>
            handleEngineTypeChange(value as EngineType | null)
          }
          className="grid min-h-14 w-full auto-cols-fr grid-flow-col gap-0 rounded-2xl border border-black/[0.12] p-1"
        >
          {engineTypes.map(({ slug, name }) => (
            <ToggleGroupItem
              key={slug}
              value={slug}
              className="group relative m-0 size-full rounded-none p-0 first:rounded-l-xl last:rounded-r-xl hover:bg-none [&>span]:data-[state=off]:border-transparent [&>span]:data-[state=on]:border-black [&>span]:data-[state=off]:bg-transparent [&>span]:data-[state=on]:bg-neutral-50"
            >
              <span className="text-medium flex size-full items-center justify-center rounded-xl border-2 border-transparent text-[15px] group-hover:bg-neutral-50">
                {name}
              </span>
              <Separator
                orientation="vertical"
                className="h-1/2 group-last:hidden"
              />
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>
    </section>
  )
}
