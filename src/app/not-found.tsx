import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <main className="container flex min-h-screen flex-col items-center justify-center text-center">
      <p className="text-sm font-bold uppercase tracking-[0.3em] text-muted">404</p>
      <h1 className="mt-4 text-5xl font-black tracking-tight">Страница не найдена</h1>
      <p className="mt-4 max-w-xl text-muted">Похоже, этой страницы нет в каталоге. Вернись на главную и выбери пиццу из списка.</p>
      <Button asChild className="mt-8">
        <Link href="/">На главную</Link>
      </Button>
    </main>
  );
}
