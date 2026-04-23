import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Flame, Pizza, Weight } from 'lucide-react';
import { SiteFooter } from '@/components/layout/site-footer';
import { SiteHeader } from '@/components/layout/site-header';
import { ProductCard } from '@/components/cards/product-card';
import { Button } from '@/components/ui/button';
import { formatPrice } from '@/lib/utils';
import { getProductBySlug, getRelatedProducts } from '@/lib/server/products';

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = await getRelatedProducts(product.id, 4);

  return (
    <main>
      <SiteHeader />
      <section className="container mt-8">
        <Link href="/" className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-3 text-sm font-semibold shadow-soft transition hover:border-accent hover:text-accent">
          <ArrowLeft className="h-4 w-4" /> Вернуться к каталогу
        </Link>

        <div className="mt-6 grid gap-8 rounded-[38px] bg-white p-6 shadow-soft lg:grid-cols-[1.05fr_0.95fr] lg:p-10">
          <div className="relative flex min-h-[420px] items-center justify-center overflow-hidden rounded-[30px] bg-background">
            <Image src={`/assets/${product.image}`} alt={product.name} width={720} height={720} className="object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.18)]" />
          </div>

          <div>
            <h1 className="text-5xl font-black leading-none tracking-[-0.05em] sm:text-6xl">{product.name}</h1>
            <p className="mt-5 text-lg leading-8 text-muted">{product.description}</p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="rounded-[24px] bg-background p-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-muted"><Pizza className="h-4 w-4" /> Формат</div>
                <div className="mt-2 text-lg font-bold">Пицца</div>
              </div>
              <div className="rounded-[24px] bg-background p-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-muted"><Weight className="h-4 w-4" /> Вес</div>
                <div className="mt-2 text-lg font-bold">{product.weight} г</div>
              </div>
              <div className="rounded-[24px] bg-background p-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-muted"><Flame className="h-4 w-4" /> Состав</div>
                <div className="mt-2 text-lg font-bold">Авторский</div>
              </div>
            </div>

            <div className="mt-8 rounded-[30px] bg-background p-6">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">Ингредиенты</div>
              <p className="mt-3 text-lg leading-8">{product.ingredients}</p>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-5xl font-black tracking-[-0.05em]">{formatPrice(product.price)}</div>
              <Button className="h-14 px-8 text-base">В корзину</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container mt-16">
        <h2 className="section-title">Похожие <span className="accent">пиццы</span></h2>
        <div className="mt-8 grid gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {relatedProducts.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
