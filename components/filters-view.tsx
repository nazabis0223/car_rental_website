'use client';

import { ChangeEvent, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Badge } from '@/components/badge';
import { CarPriceRangeFilters } from '@/components/car-price-range-filters';
import { CarTypeFilters } from '@/components/car-type-filters';
import { CarSeatingCapacityFilters } from '@/components/car-seating-capacity-filters';
import { CarTransmissionFilters } from '@/components/car-transmission-filters';
import { CarEngineTypeFilters } from '@/components/car-engine-type-filters';

import { createUrl } from '@/lib/utils';
import { IFilters } from '@/types/filters';
import { ECarEngineType, ECarTransmission, ECarType } from '@/types/car-specs';

export function FiltersView() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const MIN_PRICE = 0;
  const MAX_PRICE = 5000;
  const [open, setOpen] = useState<boolean>(false);
  const [selectedFilters, setSelectedFilters] = useState<IFilters>(
    getCurrentFilterSelection(),
  );

  function handleOpenChange() {
    if (!open) {
      setSelectedFilters(getCurrentFilterSelection());
    }
    setOpen(!open);
  }

  function getCurrentFilterSelection(): IFilters {
    const minPrice = Number(searchParams.get('min-price') || MIN_PRICE);
    const maxPrice = Number(searchParams.get('max-price') || MAX_PRICE);
    const priceRange: number[] = [minPrice, maxPrice];

    const carTypes: ECarType[] = searchParams
      .getAll('car-type')
      .filter((type) =>
        Object.values(ECarType).includes(type as ECarType),
      ) as ECarType[];

    const minSeats = searchParams.get('min-seats') || '';
    const transmission =
      (searchParams.get('transmission') as ECarTransmission) || '';
    const engineTypes =
      (searchParams.get('engine-type') as ECarEngineType) || '';

    return {
      priceRange,
      carTypes: carTypes.length > 0 ? carTypes : [],
      minSeats,
      engineTypes,
      transmission,
    };
  }

  function getCountSelectedFilters() {
    let count = 0;

    if (searchParams.has('min-price') || searchParams.has('max-price')) count++;
    if (searchParams.has('car-type')) {
      count += searchParams.getAll('car-type').length;
    }
    if (searchParams.has('min-seats')) count++;
    if (searchParams.has('transmission')) count++;
    if (searchParams.has('engine-type')) count++;

    return count;
  }

  function handleCarPriceRangeChange(priceRange: number[]) {
    setSelectedFilters({
      ...selectedFilters,
      priceRange: priceRange,
    });
  }

  function handleMinCarPriceChange(e: ChangeEvent<HTMLInputElement>) {
    setSelectedFilters({
      ...selectedFilters,
      priceRange: [Number(e.target.value), selectedFilters.priceRange[1]],
    });
  }

  function handleMaxCarPriceChange(e: ChangeEvent<HTMLInputElement>) {
    setSelectedFilters({
      ...selectedFilters,
      priceRange: [selectedFilters.priceRange[0], Number(e.target.value)],
    });
  }

  function handleCarTypeClick(slug: ECarType) {
    let newCarTypesSelected = [];

    if (selectedFilters.carTypes.includes(slug)) {
      newCarTypesSelected = selectedFilters.carTypes.filter(
        (selected) => selected !== slug,
      );
    } else {
      newCarTypesSelected = [...selectedFilters.carTypes, slug];
    }

    setSelectedFilters({ ...selectedFilters, carTypes: newCarTypesSelected });
  }

  function handleMinCarSeatsClick(slug: string) {
    setSelectedFilters({
      ...selectedFilters,
      minSeats: selectedFilters.minSeats === slug ? '' : slug,
    });
  }

  function handleCarTransmissionClick(slug: ECarTransmission) {
    setSelectedFilters({
      ...selectedFilters,
      transmission: selectedFilters.transmission === slug ? '' : slug,
    });
  }

  function handleCarEngineTypeClick(slug: ECarEngineType) {
    setSelectedFilters({
      ...selectedFilters,
      engineTypes: selectedFilters.engineTypes === slug ? '' : slug,
    });
  }

  function resetFilters() {
    setSelectedFilters({
      priceRange: [MIN_PRICE, MAX_PRICE],
      carTypes: [],
      minSeats: '',
      engineTypes: '',
      transmission: '',
    });
  }

  function applyFilters() {
    const newParams = new URLSearchParams(searchParams.toString());

    newParams.delete('min-price');
    newParams.delete('max-price');
    newParams.delete('car-type');
    newParams.delete('min-seats');
    newParams.delete('transmission');
    newParams.delete('engine-type');

    if (selectedFilters.priceRange[0] !== MIN_PRICE) {
      newParams.set('min-price', selectedFilters.priceRange[0].toString());
    }

    if (selectedFilters.priceRange[1] !== MAX_PRICE) {
      newParams.set('max-price', selectedFilters.priceRange[1].toString());
    }

    if (selectedFilters.carTypes.length) {
      selectedFilters.carTypes.forEach((type) => {
        newParams.append('car-type', type);
      });
    }
    if (selectedFilters.minSeats) {
      newParams.set('min-seats', selectedFilters.minSeats.toString());
    }
    if (selectedFilters.transmission) {
      newParams.set('transmission', selectedFilters.transmission);
    }

    if (selectedFilters.engineTypes) {
      newParams.set('engine-type', selectedFilters.engineTypes);
    }

    router.push(createUrl('/cars', newParams));

    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button variant="outline" className="relative">
          <Icons.filters className="mr-2 h-[14px] w-[14px]" />
          Filters
          <Badge count={getCountSelectedFilters()} />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[var(--modal-filters-max-width)] gap-0 !rounded-xl p-0">
        <DialogHeader className="flex min-h-[var(--modal-filters-header-height)] items-center justify-center px-6">
          <DialogTitle className="text-center text-base tracking-normal">
            Filters
          </DialogTitle>
        </DialogHeader>
        <div className="h-full max-h-[var(--modal-filters-content-max-height)] overflow-y-auto border-b border-t">
          <CarPriceRangeFilters
            minPrice={MIN_PRICE}
            maxPrice={MAX_PRICE}
            selectedFilters={selectedFilters}
            onSliderChange={handleCarPriceRangeChange}
            onMinPriceInputChange={handleMinCarPriceChange}
            onMaxPriceInputChange={handleMaxCarPriceChange}
          />
          <CarTypeFilters
            selectedFilters={selectedFilters}
            onClick={handleCarTypeClick}
          />
          <CarSeatingCapacityFilters
            selectedFilters={selectedFilters}
            onMinCarSeatsClick={handleMinCarSeatsClick}
          />
          <CarEngineTypeFilters
            selectedFilters={selectedFilters}
            onClick={handleCarEngineTypeClick}
          />
          <CarTransmissionFilters
            selectedFilters={selectedFilters}
            onClick={handleCarTransmissionClick}
          />
        </div>
        <DialogFooter className="flex min-h-[var(--modal-filters-footer-height)] items-center justify-center px-6">
          <div className="flex w-full items-center justify-between gap-x-2">
            <Button
              variant="ghost"
              className="-ml-2 px-2.5 text-[15px] font-semibold underline"
              onClick={resetFilters}
            >
              Clear all
            </Button>
            <Button
              size="xl"
              className="text-[15px] font-semibold"
              onClick={applyFilters}
            >
              Show cars
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
