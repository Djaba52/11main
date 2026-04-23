import { ProductCard } from '@/components/cards/product-card';
import { Pagination } from '@/components/ui/pagination';
import type { Product } from '@/types/product';

type CatalogSectionProps = {
  products: Product[];
  currentPage: number;
  totalPages: number;
};

export function CatalogSection({ products, currentPage, totalPages }: CatalogSectionProps) {
  return (
    <section id="pizza-catalog" className="container mt-10 scroll-mt-6">
      <h2 className="text-[44px] font-black leading-none text-accent tracking-[-0.04em] sm:text-[52px]">Пицца</h2>
      <div className="mt-5 grid gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </section>
  );
}
