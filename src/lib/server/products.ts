import 'server-only';

import { and, asc, count, desc, eq } from 'drizzle-orm';
import { db } from '@/db';
import { products } from '@/db/schema';
import type { PaginatedProducts, Product } from '@/types/product';

const PAGE_SIZE = 6;

function normalizeProduct(product: typeof products.$inferSelect): Product {
  return {
    id: product.id,
    slug: product.slug,
    name: product.name,
    description: product.description,
    ingredients: product.ingredients,
    price: product.price,
    weight: product.weight,
    image: product.image,
    category: product.category,
    isNew: Boolean(product.isNew),
  };
}

export async function getPaginatedProducts(page = 1, pageSize = PAGE_SIZE): Promise<PaginatedProducts> {
  const safePage = Number.isFinite(page) && page > 0 ? page : 1;
  const safePageSize = Number.isFinite(pageSize) && pageSize > 0 ? pageSize : PAGE_SIZE;
  const totalResult = db.select({ value: count() }).from(products).where(eq(products.category, 'pizza')).get();
  const totalCount = totalResult?.value ?? 0;
  const totalPages = Math.max(1, Math.ceil(totalCount / safePageSize));
  const currentPage = Math.min(safePage, totalPages);
  const offset = (currentPage - 1) * safePageSize;

  const rows = db
    .select()
    .from(products)
    .where(eq(products.category, 'pizza'))
    .orderBy(desc(products.isNew), asc(products.id))
    .limit(safePageSize)
    .offset(offset)
    .all();

  return {
    products: rows.map(normalizeProduct),
    totalPages,
    currentPage,
    totalCount,
  };
}

export async function getFeaturedProducts(limit = 4): Promise<Product[]> {
  const rows = db
    .select()
    .from(products)
    .where(and(eq(products.category, 'pizza'), eq(products.isNew, true)))
    .orderBy(asc(products.id))
    .limit(limit)
    .all();

  return rows.map(normalizeProduct);
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const row = db.select().from(products).where(eq(products.slug, slug)).get();
  return row ? normalizeProduct(row) : null;
}

export async function getRelatedProducts(currentId: number, limit = 4): Promise<Product[]> {
  const rows = db
    .select()
    .from(products)
    .where(eq(products.category, 'pizza'))
    .orderBy(desc(products.isNew), asc(products.id))
    .limit(limit + 1)
    .all()
    .filter((item) => item.id !== currentId)
    .slice(0, limit);

  return rows.map(normalizeProduct);
}

export { PAGE_SIZE };
