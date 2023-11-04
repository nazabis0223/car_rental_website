'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { PriceRangeFilters } from '@/components/cars/price-range-filters';
import { BodyStyleFilters } from '@/components/cars/body-style-filters';
import { EngineTypeFilters } from '@/components/cars/engine-type-filters';
import { SeatingCapacityFilters } from '@/components/cars/seating-capacity-filters';
import { TransmissionFilters } from '@/components/cars/transmission-filters';
import { ResetFilters } from '@/components/cars/reset-filters';
import { ApplyFilters } from '@/components/cars/apply-filters';
import { Badge } from '@/components/badge';
import { Icons } from '@/components/icons';
import {
  BodyStyle,
  EngineType,
  SearchParams,
  SelectedFilters,
  Transmission,
} from '@/lib/definitions';

interface FiltersModalProps {
  minPrice: number;
  maxPrice: number;
}

export function FiltersModal({ minPrice, maxPrice }: FiltersModalProps) {
  const searchParams = useSearchParams();
  const [open, setOpen] = useState<boolean>(false);
  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>(
    fetchSelectedFilters(),
  );
  const [count, setCount] = useState<number>(0);

  function handleOpenChange() {
    if (!open) {
      setSelectedFilters(fetchSelectedFilters());
    }
    setOpen(!open);
  }

  function fetchSelectedFilters() {
    const selectedMinPrice =
      Number(searchParams.get(SearchParams.MIN_PRICE)) || minPrice;
    const selectedMaxPrice =
      Number(searchParams.get(SearchParams.MAX_PRICE)) || maxPrice;
    const seats = Number(searchParams.get(SearchParams.MIN_SEATS)) || undefined;
    const bodyStyles = searchParams.getAll(
      SearchParams.BODY_STYLE,
    ) as BodyStyle[];
    const engineTypes = searchParams.getAll(
      SearchParams.ENGINE_TYPE,
    ) as EngineType[];
    const transmissions = searchParams.getAll(
      SearchParams.TRANSMISSION,
    ) as Transmission[];

    return {
      minPrice: selectedMinPrice,
      maxPrice: selectedMaxPrice,
      seats,
      bodyStyles: bodyStyles.length > 0 ? bodyStyles : [],
      engineTypes: engineTypes.length > 0 ? engineTypes : [],
      transmissions: transmissions.length > 0 ? transmissions : [],
    };
  }

  useEffect(() => {
    function getSelectedFiltersCount() {
      let count = 0;

      if (searchParams.has(SearchParams.MIN_SEATS)) count++;
      if (
        searchParams.has(SearchParams.MIN_PRICE) ||
        searchParams.has(SearchParams.MAX_PRICE)
      )
        count++;
      if (searchParams.has(SearchParams.BODY_STYLE)) {
        count += searchParams.getAll(SearchParams.BODY_STYLE).length;
      }
      if (searchParams.has(SearchParams.TRANSMISSION)) {
        count += searchParams.getAll(SearchParams.TRANSMISSION).length;
      }
      if (searchParams.has(SearchParams.ENGINE_TYPE)) {
        count += searchParams.getAll(SearchParams.ENGINE_TYPE).length;
      }

      return count;
    }

    setCount(getSelectedFiltersCount());

    return () => {
      setCount(0);
    };
  }, [searchParams]);

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="relative flex items-center justify-center"
        >
          <Icons.filters className="mr-2.5 h-[22px] w-[22px]" />
          <span>Filters</span>
          <Badge count={count} />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[var(--modal-filters-max-width)] gap-0 !rounded-xl p-0">
        <DialogHeader className="flex min-h-[var(--modal-filters-header-height)] items-center justify-center px-6">
          <DialogTitle className="text-center text-base tracking-normal">
            Filters
          </DialogTitle>
        </DialogHeader>
        <div className="h-full max-h-[var(--modal-filters-content-max-height)] overflow-y-auto border-y">
          <PriceRangeFilters
            minPrice={minPrice}
            maxPrice={maxPrice}
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
          />
          <BodyStyleFilters
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
          />
          <EngineTypeFilters
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
          />
          <SeatingCapacityFilters
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
          />
          <TransmissionFilters
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
          />
        </div>
        <DialogFooter className="flex min-h-[var(--modal-filters-footer-height)] items-center justify-center px-6">
          <div className="flex w-full items-center justify-between gap-x-2">
            <ResetFilters
              minPrice={minPrice}
              maxPrice={maxPrice}
              setSelectedFilters={setSelectedFilters}
            />
            <ApplyFilters
              minPrice={minPrice}
              maxPrice={maxPrice}
              selectedFilters={selectedFilters}
              setOpen={setOpen}
            />
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
