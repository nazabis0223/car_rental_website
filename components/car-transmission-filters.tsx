import { Filter } from '@/components/filter';
import { transmissions } from '@/data/car-specs';
import { IFilters } from '@/types/filters';

interface CarTransmissionFiltersProps {
  selectedFilters: IFilters;
  onClick: Function;
}

export function CarTransmissionFilters({
  selectedFilters,
  onClick,
}: CarTransmissionFiltersProps) {
  return (
    <div className="mb-2 px-6 py-8">
      <section>
        <h3 className="pb-6 text-xl font-semibold">Transmission</h3>
        <div className="grid grid-cols-2 items-center gap-4">
          {transmissions.map(({ id, slug, value, icon }) => (
            <Filter
              key={id}
              area
              selected={selectedFilters.transmission === slug}
              onClick={() => onClick(slug)}
            >
              <div className="flex h-32 min-h-full w-full flex-col items-start justify-between p-4">
                {icon}
                <span className="text-base font-medium">{value}</span>
              </div>
            </Filter>
          ))}
        </div>
      </section>
    </div>
  );
}
