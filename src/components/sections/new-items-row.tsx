import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/types/product';
import { formatPrice } from '@/lib/utils';

type NewItemsRowProps = {
  items: Product[];
};

export function NewItemsRow({ items }: NewItemsRowProps) {
  return (
    <section className="container mt-10">
      <div className="grid gap-6 lg:grid-cols-[110px_1fr] lg:items-center">
        <div className="hidden lg:block">
          <Image src="/assets/person-left.png" alt="Декоративная иллюстрация" width={510} height={920} className="w-full" />
        </div>
        <div>
          <h2 className="mb-5 text-2xl font-extrabold">Новинки</h2>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {items.map((item) => (
              <Link
                key={item.id}
                href={`/product/${item.slug}`}
                className="group flex items-center gap-4 rounded-[22px] border border-border bg-white px-4 py-4 shadow-soft transition hover:-translate-y-1 hover:shadow-card"
              >
                <div className="relative h-14 w-14 overflow-hidden rounded-full">
                  <Image src={`/assets/${item.image}`} alt={item.name} fill className="object-cover" />
                </div>
                <div>
                  <div className="text-sm font-bold transition group-hover:text-accent">{item.name}</div>
                  <div className="mt-1 text-sm font-extrabold text-accent">{formatPrice(120)}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
