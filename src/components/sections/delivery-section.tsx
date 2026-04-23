import Image from 'next/image';
import { CreditCard, FileText, Mail, Truck } from 'lucide-react';

const features = [
  { icon: CreditCard, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
  { icon: FileText, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
  { icon: Mail, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
  { icon: Truck, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
];

export function DeliverySection() {
  return (
    <section className="container mt-20">
      <div className="rounded-[36px] bg-panel px-5 py-10 shadow-soft lg:px-14 lg:py-12">
        <h2 className="section-title text-center text-[34px]"><span className="accent">Оплата</span> и доставка</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {features.map(({ icon: Icon, text }, index) => (
            <div key={index} className="rounded-[24px] bg-white px-5 py-4 text-center shadow-soft">
              <Icon className="mx-auto h-6 w-6 text-[#f0a1b4]" />
              <p className="mt-2 text-xs leading-5 text-muted">{text}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 overflow-hidden rounded-[24px] border border-white/50 bg-white/40 shadow-soft">
          <Image src="/assets/map.png" alt="Карта доставки" width={2320} height={1200} className="h-full w-full object-cover" />
        </div>
      </div>
    </section>
  );
}
