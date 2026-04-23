import Link from 'next/link';
import { CircleUserRound, Clock3, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = ['Пицца', 'Паста', 'Супы', 'Салаты', 'Напитки', 'Десерты', 'Бакалея', 'Антипасти', 'Акции', 'Комбо', 'Контакты'];

export function SiteHeader() {
  return (
    <header className="pt-3">
      <div className="container">
        <div className="flex flex-col gap-4 rounded-[30px] bg-white px-5 py-4 shadow-soft lg:px-7">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-dark text-sm font-black uppercase text-white">
                fibo
              </div>
              <div>
                <div className="text-sm font-semibold">
                  Доставка пиццы <span className="text-accent">Москва</span>
                </div>
                <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-muted">
                  <span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> Яндекс еда 4.8</span>
                  <span className="inline-flex items-center gap-1"><Clock3 className="h-3.5 w-3.5" /> Время доставки от 31 мин</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 lg:justify-end">
              <Button variant="outline" size="sm">Заказать звонок</Button>
              <a href="tel:+74993918449" className="inline-flex items-center gap-2 text-lg font-bold text-accent transition hover:opacity-80">
                <Phone className="h-4 w-4" /> 8 499 391-84-49
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-3 border-t border-border pt-4 lg:flex-row lg:items-center lg:justify-between">
            <nav className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-medium">
              {navItems.map((item) => (
                <Link key={item} href="#pizza-catalog" className="transition hover:text-accent">
                  {item}
                </Link>
              ))}
            </nav>

            <Button variant="ghost" size="sm" className="w-fit gap-2 px-0 lg:px-4">
              <CircleUserRound className="h-4 w-4" /> Войти
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
