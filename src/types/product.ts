export type Product = {
  id: number;
  slug: string;
  name: string;
  description: string;
  ingredients: string;
  price: number;
  weight: number;
  image: string;
  category: string;
  isNew: boolean;
};

export type PaginatedProducts = {
  products: Product[];
  totalPages: number;
  currentPage: number;
  totalCount: number;
};
