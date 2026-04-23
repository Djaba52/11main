import { Button } from '@/components/ui/button';

export function SiteFooter() {
  return (
    <footer className="pb-10 pt-8">
      <div className="container">
        <div className="grid gap-8 rounded-[34px] bg-white px-6 py-8 shadow-soft lg:grid-cols-[180px_1fr_360px] lg:px-10">
          <div>
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-dark text-sm font-black uppercase text-white">fibo</div>
          </div>

          <div className="grid gap-6 text-sm text-muted sm:grid-cols-3">
            <div>
              <div className="mb-3 font-semibold text-text">Калорийность и состав</div>
              <div className="space-y-2">
                <p>Мы в соцсетях</p>
                <p>ВКонтакте</p>
              </div>
            </div>
            <div>
              <div className="mb-3 font-semibold text-text">Правовая информация</div>
              <div className="space-y-2">
                <p>Max</p>
                <p>Москва ул. Проспект Вернадского 86В</p>
              </div>
            </div>
            <div>
              <div className="mb-3 font-semibold text-text">Все права защищены © 2026</div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-text">Остались вопросы? А мы всегда на связи:</h3>
            <div className="mt-4 grid grid-cols-3 gap-3">
              <div className="rounded-full border border-border bg-background px-4 py-3 text-center text-sm font-semibold">VK</div>
              <div className="rounded-full border border-border bg-background px-4 py-3 text-center text-sm font-semibold">@</div>
              <div className="rounded-full border border-border bg-background px-4 py-3 text-center text-sm font-semibold">IG</div>
            </div>
            <div className="mt-3 rounded-full border border-border bg-background px-4 py-3 text-center text-sm font-semibold">Написать нам</div>
            <div className="mt-6 text-3xl font-extrabold text-accent">8 499 391-84-49</div>
            <Button variant="outline" className="mt-4">Заказать звонок</Button>
            <div className="mt-6 text-right text-5xl font-black uppercase leading-none text-dark/60">pizza<br />pasta<br />fibo</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
