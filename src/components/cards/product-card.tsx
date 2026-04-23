import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { formatPrice } from '@/lib/utils';
import type { Product } from '@/types/product';

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group rounded-[28px] px-2 py-3 transition">
      <Link href={`/product/${product.slug}`} className="block">
        <div className="relative mx-auto flex aspect-square w-full max-w-[240px] items-center justify-center overflow-hidden">
          <Image
            src={`/assets/${product.image}`}
            alt={product.name}
            width={420}
            height={420}
            className="object-contain drop-shadow-[0_16px_20px_rgba(0,0,0,0.16)] transition duration-300 group-hover:scale-105"
          />
        </div>
      </Link>

      <div className="mx-auto mt-2 max-w-[240px]">
        <Link href={`/product/${product.slug}`}>
          <h3 className="min-h-[52px] text-[29px] font-extrabold leading-[1.05] tracking-[-0.03em] transition group-hover:text-accent sm:text-[31px]">
            {product.name}
          </h3>
        </Link>
        <p className="mt-3 min-h-[56px] text-xs leading-4 text-muted">{product.ingredients}. {product.weight} г.</p>
        <div className="mt-4 flex items-center justify-between gap-3">
          <span className="text-[28px] font-extrabold tracking-[-0.04em]">{formatPrice(product.price)}</span>
          <Button size="sm">В корзину</Button>
        </div>
      </div>
    </article>
  );
}
