import { Icons } from '@/components/icons';

export function Features() {
  return (
    <section className="mt-10 border-t bg-neutral-50">
      <div className="mx-auto max-w-none px-5 py-14 sm:max-w-[90%] sm:px-0 lg:max-w-4xl">
        <h2 className="text-center text-2xl font-bold">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta.
        </h2>
        <div className="mt-12 grid grid-cols-1 items-center justify-center gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center justify-center text-center md:items-start md:text-left">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border bg-white">
              <Icons.gift className="h-6 w-6 text-neutral-500" />
            </div>
            <p className="mt-6 font-semibold">Lorem, ipsum dolor.</p>
            <p className="mt-2 max-w-sm text-sm leading-6 text-neutral-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est odit
              quos vel excepturi iusto.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center text-center md:items-start md:text-left">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border bg-white">
              <Icons.shield className="h-6 w-6 text-neutral-500" />
            </div>
            <p className="mt-6 font-semibold">Lorem, ipsum dolor.</p>
            <p className="mt-2 max-w-sm text-sm leading-6 text-neutral-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est odit
              quos vel excepturi iusto.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center text-center md:items-start md:text-left">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border bg-white">
              <Icons.navigate className="h-6 w-6 text-neutral-500" />
            </div>
            <p className="mt-6 font-semibold">Lorem, ipsum dolor.</p>
            <p className="mt-2 max-w-sm text-sm leading-6 text-neutral-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est odit
              quos vel excepturi iusto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
