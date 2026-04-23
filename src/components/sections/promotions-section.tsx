import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function PromotionsSection() {
  return (
    <section className="container mt-20">
      <h2 className="section-title text-center">Наши <span className="accent">акции</span></h2>
      <div className="mt-8 grid gap-5 lg:grid-cols-[1.2fr_1fr_250px] lg:items-end">
        <div className="overflow-hidden rounded-[28px] shadow-soft">
          <Image src="/assets/promo-big.png" alt="Большой баннер акции" width={1190} height={900} className="h-full w-full object-cover" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="overflow-hidden rounded-[24px] shadow-soft">
              <Image src="/assets/promo-small.png" alt="Карточка акции" width={690} height={490} className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
        <div className="hidden lg:block">
          <Image src="/assets/person-right.png" alt="Декоративная иллюстрация" width={750} height={1600} className="ml-auto max-h-[360px] w-auto" />
        </div>
      </div>
      <div className="mt-6 flex justify-center">
        <Button>Все акции</Button>
      </div>
    </section>
  );
}
