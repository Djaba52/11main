'use client';

import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Button } from '@/components/ui/button';

type Slide = {
  id: number;
  image: string;
  title: string;
};

const saleSlides: Slide[] = [
  { id: 1, image: '/assets/banner-sale-left.png', title: 'Слайс за 149 ₽' },
  { id: 2, image: '/assets/banner-main-yellow.png', title: 'Fibo Pasta Bar' },
  { id: 3, image: '/assets/banner-main-dark.png', title: 'Fibo Pasta Bar dark' },
  { id: 4, image: '/assets/banner-sale-right.png', title: 'Слайс за 149 ₽ второй баннер' },
];

export function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const visibleSlides = useMemo(() => {
    return saleSlides.map((_, index) => saleSlides[(activeIndex + index) % saleSlides.length]);
  }, [activeIndex]);

  return (
    <section className="container mt-6">
      <div className="grid gap-4 lg:grid-cols-[170px_1fr_1fr_170px]">
        {visibleSlides.map((slide, index) => (
          <div key={slide.id} className="relative overflow-hidden rounded-[24px] bg-white shadow-soft">
            <Image src={slide.image} alt={slide.title} width={1120} height={750} className="h-full w-full object-cover transition duration-300 hover:scale-[1.01]" />

            {index === 0 ? (
              <button
                type="button"
                onClick={() => setActiveIndex((value) => (value - 1 + saleSlides.length) % saleSlides.length)}
                className="absolute right-3 top-1/2 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-accent text-dark transition hover:scale-105 lg:inline-flex"
                aria-label="Предыдущий баннер"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
            ) : null}

            {index === visibleSlides.length - 1 ? (
              <button
                type="button"
                onClick={() => setActiveIndex((value) => (value + 1) % saleSlides.length)}
                className="absolute left-3 top-1/2 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-accent text-dark transition hover:scale-105 lg:inline-flex"
                aria-label="Следующий баннер"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            ) : null}
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-center gap-3 lg:hidden">
        <Button variant="outline" size="icon" onClick={() => setActiveIndex((value) => (value - 1 + saleSlides.length) % saleSlides.length)}>
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" onClick={() => setActiveIndex((value) => (value + 1) % saleSlides.length)}>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </section>
  );
}
