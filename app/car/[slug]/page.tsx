import { CarView } from '@/components/car-view';
import { ReserveCard } from '@/components/reserve-card';
import { getAllCars, getCarBySlug } from '@/lib/cars';
import { ICar } from '@/types/car';

export async function generateStaticParams() {
  return getAllCars().map((car) => ({ slug: car.slug }));
}

export default function CarPage({ params }: { params: { slug: string } }) {
  const car: ICar = getCarBySlug(params.slug);

  return (
    <div className="py-[var(--car-page-main-content-padding-y)]">
      <div className="mx-auto w-full max-w-none px-5 sm:max-w-[90%] sm:px-0 xl:max-w-6xl">
        <div className="grid w-full grid-cols-1 gap-24 md:grid-cols-[1fr_var(--card-reserve-width)]">
          <CarView car={car} />
          <ReserveCard car={car} />
        </div>
      </div>
    </div>
  );
}
