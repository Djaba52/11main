import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Fibo Pizza Catalog',
  description: 'Каталог пиццы с пагинацией на Next.js, SQLite и Drizzle ORM.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
