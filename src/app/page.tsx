import { CatalogSection } from '@/components/sections/catalog-section';
import { DeliverySection } from '@/components/sections/delivery-section';
import { HeroSlider } from '@/components/sections/hero-slider';
import { NewItemsRow } from '@/components/sections/new-items-row';
import { PromotionsSection } from '@/components/sections/promotions-section';
import { SiteFooter } from '@/components/layout/site-footer';
import { SiteHeader } from '@/components/layout/site-header';
import { getFeaturedProducts, getPaginatedProducts, PAGE_SIZE } from '@/lib/server/products';

export default async function Home({
  searchParams,
}: {
  searchParams?: Promise<{ page?: string }>;
}) {
  const params = (await searchParams) ?? {};
  const page = Math.max(1, Number(params.page ?? '1') || 1);

  const [featuredProducts, paginatedProducts] = await Promise.all([
    getFeaturedProducts(4),
    getPaginatedProducts(page, PAGE_SIZE),
  ]);

  return (
    <main>
      <SiteHeader />
      <HeroSlider />
      <NewItemsRow items={featuredProducts} />
      <CatalogSection
        products={paginatedProducts.products}
        currentPage={paginatedProducts.currentPage}
        totalPages={paginatedProducts.totalPages}
      />
      <PromotionsSection />
      <DeliverySection />
      <SiteFooter />
    </main>
  );
}
