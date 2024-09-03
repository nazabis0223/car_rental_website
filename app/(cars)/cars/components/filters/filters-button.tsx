"use client"

import {
  cloneElement,
  isValidElement,
  ReactElement,
  useCallback,
  useMemo,
  useState,
} from "react"
import { useRouter, useSearchParams } from "next/navigation"

import { FiltersIcon } from "@/app/components/icons/filters"
import { ResponsiveModal } from "@/app/components/responsive-modal"
import { Badge } from "@/app/components/ui/badge"
import { Button } from "@/app/components/ui/button"
import { buildUrlWithQueryParams } from "@/app/lib/utils"

import { FiltersContent } from "./filters-content"
import {
  calculateTotalFiltersFromParams,
  getInitialFilters,
  updateSearchParams,
} from "./lib/utils"
import { SelectedFilters } from "./types"

interface FiltersButtonProps {
  initialMinPrice: number
  initialMaxPrice: number
  trigger?: React.ReactNode
}

export function FiltersButton({
  initialMinPrice,
  initialMaxPrice,
  trigger,
}: FiltersButtonProps) {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const initialFilters = useMemo(
    () => getInitialFilters(searchParams, initialMinPrice, initialMaxPrice),
    [searchParams, initialMinPrice, initialMaxPrice]
  )

  const [selectedFilters, setSelectedFilters] =
    useState<SelectedFilters>(initialFilters)

  const totalSelectedFilters = useMemo(
    () =>
      calculateTotalFiltersFromParams(
        searchParams,
        initialMinPrice,
        initialMaxPrice
      ),
    [searchParams, initialMinPrice, initialMaxPrice]
  )

  const handleFiltersReset = useCallback(() => {
    setSelectedFilters({
      minPrice: initialMinPrice,
      maxPrice: initialMaxPrice,
      bodyStyles: [],
      powertrain: undefined,
      seats: undefined,
      transmissions: [],
    })
  }, [initialMinPrice, initialMaxPrice])

  const handleFiltersApply = useCallback(() => {
    const newParams = new URLSearchParams(searchParams.toString())
    updateSearchParams(
      newParams,
      selectedFilters,
      initialMinPrice,
      initialMaxPrice
    )
    router.push(buildUrlWithQueryParams("/cars", newParams))
    setIsModalOpen(false)
  }, [searchParams, selectedFilters, initialMinPrice, initialMaxPrice, router])

  const triggerWithBadge = useMemo(() => {
    const badge = totalSelectedFilters > 0 && (
      <Badge variant="counter" className="absolute -right-2 -top-2">
        {totalSelectedFilters}
      </Badge>
    )

    if (isValidElement(trigger)) {
      return cloneElement(
        trigger as ReactElement<{
          className?: string
          children?: React.ReactNode
        }>,
        {
          className: `${trigger.props.className || ""} relative`, // Ensure it's positioned correctly for the badge
          children: (
            <>
              {trigger.props.children}
              {badge}
            </>
          ),
        }
      )
    }

    return (
      <Button
        variant="outline"
        className="relative flex h-[46px] items-center justify-center gap-x-2.5 rounded-[10px] px-4 text-[13px]"
      >
        <FiltersIcon className="size-5" />
        <span>Filters</span>
        {badge}
      </Button>
    )
  }, [trigger, totalSelectedFilters])

  return (
    <ResponsiveModal
      open={isModalOpen}
      onOpenChange={setIsModalOpen}
      title="Filters"
      description="Refine your search by adjusting the filters below to find your perfect match."
      trigger={triggerWithBadge}
      footer={
        <div className="flex w-full items-center justify-between gap-x-2">
          <ResetFiltersButton onReset={handleFiltersReset} />
          <ApplyFiltersButton onApply={handleFiltersApply} />
        </div>
      }
    >
      <FiltersContent
        selectedFilters={selectedFilters}
        setSelectedFilters={setSelectedFilters}
        initialMinPrice={initialMinPrice}
        initialMaxPrice={initialMaxPrice}
      />
    </ResponsiveModal>
  )
}

export function ApplyFiltersButton({ onApply }: { onApply: () => void }) {
  return (
    <Button size="lg" className="text-[15px]" onClick={onApply}>
      Show cars
    </Button>
  )
}

export function ResetFiltersButton({ onReset }: { onReset: () => void }) {
  return (
    <Button
      variant="ghost"
      size={"lg"}
      className="-ml-4 text-[15px]"
      onClick={onReset}
    >
      Clear all
    </Button>
  )
}
