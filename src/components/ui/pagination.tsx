import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

function buildPageHref(page: number) {
  return page <= 1 ? '/' : `/?page=${page}`;
}

function getVisiblePages(currentPage: number, totalPages: number) {
  const start = Math.max(1, currentPage - 2);
  const end = Math.min(totalPages, currentPage + 2);
  const pages: number[] = [];

  for (let page = start; page <= end; page += 1) {
    pages.push(page);
  }

  return pages;
}

type PaginationProps = {
  currentPage: number;
  totalPages: number;
};

export function Pagination({ currentPage, totalPages }: PaginationProps) {
  if (totalPages <= 1) {
    return null;
  }

  const visiblePages = getVisiblePages(currentPage, totalPages);

  return (
    <nav className="mt-10 flex flex-wrap items-center justify-center gap-2" aria-label="Пагинация каталога">
      <Link
        href={buildPageHref(Math.max(1, currentPage - 1))}
        className={cn(
          'inline-flex h-11 items-center gap-2 rounded-full border border-border bg-white px-4 text-sm font-semibold transition hover:border-accent hover:bg-accent/20',
          currentPage === 1 && 'pointer-events-none opacity-50'
        )}
      >
        <ChevronLeft className="h-4 w-4" /> Назад
      </Link>

      {visiblePages.map((page) => (
        <Link
          key={page}
          href={buildPageHref(page)}
          className={cn(
            'inline-flex h-11 min-w-11 items-center justify-center rounded-full border border-border bg-white px-4 text-sm font-semibold transition hover:border-accent hover:bg-accent/20',
            currentPage === page && 'border-accent bg-accent text-dark shadow-card'
          )}
        >
          {page}
        </Link>
      ))}

      <Link
        href={buildPageHref(Math.min(totalPages, currentPage + 1))}
        className={cn(
          'inline-flex h-11 items-center gap-2 rounded-full border border-border bg-white px-4 text-sm font-semibold transition hover:border-accent hover:bg-accent/20',
          currentPage === totalPages && 'pointer-events-none opacity-50'
        )}
      >
        Вперед <ChevronRight className="h-4 w-4" />
      </Link>
    </nav>
  );
}
