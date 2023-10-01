import dynamic from 'next/dynamic';
import { Filters } from '@/components/filters';
import { CarCard } from '@/components/car-card';

const DynamicMap = dynamic(
  async () => {
    const { Map: DynamicMap } = await import('@/components/map');
    return { default: DynamicMap };
  },
  {
    loading: () => (
      <div className="flex h-[var(--map-height)] items-center justify-center gap-x-2.5 bg-neutral-100">
        <div className="dot-pulse"></div>
      </div>
    ),
    ssr: false,
  },
);

export default function CarsPage() {
  return (
    <section>
      <div className="mx-auto w-full max-w-none">
        <main className="flex">
          <div className="w-full max-w-[1184px] shrink-0 grow-0 flex-col overflow-y-auto md:min-h-[var(--cars-page-main-content-height)] md:w-[55%] xl:w-[63%]">
            <div className="mx-5 my-4 flex items-center justify-between sm:mx-6">
              <p className="text-[13px] font-semibold text-neutral-800">
                Over 45 cars
              </p>
              <Filters />
            </div>
            <div className="mx-5 mb-12 sm:mx-6">
              <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] items-center justify-center gap-6">
                <CarCard
                  title="Premium SUV"
                  capacity={{ seats: 6, bags: 4 }}
                  transmission="Automatic"
                  rating={4.1}
                  reviews={59}
                  price={{
                    discountedPrice: '$999',
                    previousPrice: '$1,400',
                    currency: 'MXN',
                  }}
                  image={{
                    src: 'https:mediaim.expedia.com/cars/42/24e24b9a-0dc5-4630-8893-41decc62b2b9.jpg?impolicy=resizecrop&ra=fit&rh=165&rw=165',
                    alt: '',
                  }}
                  unlimitedMileage
                />
                <CarCard
                  title="Premium SUV"
                  capacity={{ seats: 6, bags: 4 }}
                  transmission="Automatic"
                  rating={4.1}
                  reviews={59}
                  price={{
                    discountedPrice: '$999',
                    previousPrice: '$1,400',
                    currency: 'MXN',
                  }}
                  image={{
                    src: 'https:mediaim.expedia.com/cars/42/24e24b9a-0dc5-4630-8893-41decc62b2b9.jpg?impolicy=resizecrop&ra=fit&rh=165&rw=165',
                    alt: '',
                  }}
                  unlimitedMileage
                />
                <CarCard
                  title="Premium SUV"
                  capacity={{ seats: 6, bags: 4 }}
                  transmission="Automatic"
                  rating={4.1}
                  reviews={59}
                  price={{
                    discountedPrice: '$999',
                    previousPrice: '$1,400',
                    currency: 'MXN',
                  }}
                  image={{
                    src: 'https:mediaim.expedia.com/cars/42/24e24b9a-0dc5-4630-8893-41decc62b2b9.jpg?impolicy=resizecrop&ra=fit&rh=165&rw=165',
                    alt: '',
                  }}
                  unlimitedMileage
                />
                <CarCard
                  title="Premium SUV"
                  capacity={{ seats: 6, bags: 4 }}
                  transmission="Automatic"
                  rating={4.1}
                  reviews={59}
                  price={{
                    discountedPrice: '$999',
                    previousPrice: '$1,400',
                    currency: 'MXN',
                  }}
                  image={{
                    src: 'https:mediaim.expedia.com/cars/42/24e24b9a-0dc5-4630-8893-41decc62b2b9.jpg?impolicy=resizecrop&ra=fit&rh=165&rw=165',
                    alt: '',
                  }}
                  unlimitedMileage
                />
                <CarCard
                  title="Premium SUV"
                  capacity={{ seats: 6, bags: 4 }}
                  transmission="Automatic"
                  rating={4.1}
                  reviews={59}
                  price={{
                    discountedPrice: '$999',
                    previousPrice: '$1,400',
                    currency: 'MXN',
                  }}
                  image={{
                    src: 'https:mediaim.expedia.com/cars/42/24e24b9a-0dc5-4630-8893-41decc62b2b9.jpg?impolicy=resizecrop&ra=fit&rh=165&rw=165',
                    alt: '',
                  }}
                  unlimitedMileage
                />
                <CarCard
                  title="Premium SUV"
                  capacity={{ seats: 6, bags: 4 }}
                  transmission="Automatic"
                  rating={4.1}
                  reviews={59}
                  price={{
                    discountedPrice: '$999',
                    previousPrice: '$1,400',
                    currency: 'MXN',
                  }}
                  image={{
                    src: 'https:mediaim.expedia.com/cars/42/24e24b9a-0dc5-4630-8893-41decc62b2b9.jpg?impolicy=resizecrop&ra=fit&rh=165&rw=165',
                    alt: '',
                  }}
                  unlimitedMileage
                />
                <CarCard
                  title="Premium SUV"
                  capacity={{ seats: 6, bags: 4 }}
                  transmission="Automatic"
                  rating={4.1}
                  reviews={59}
                  price={{
                    discountedPrice: '$999',
                    previousPrice: '$1,400',
                    currency: 'MXN',
                  }}
                  image={{
                    src: 'https:mediaim.expedia.com/cars/42/24e24b9a-0dc5-4630-8893-41decc62b2b9.jpg?impolicy=resizecrop&ra=fit&rh=165&rw=165',
                    alt: '',
                  }}
                  unlimitedMileage
                />
              </div>
            </div>
          </div>
          <div className="hidden flex-auto md:block">
            <div className="sticky top-[var(--site-header-and-search-offset)] z-10 basis-auto">
              <DynamicMap />
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}
