import Image from 'next/image'
import { Camera, Clock, MapPin, Phone } from 'lucide-react'
import { brand } from '@/lib/menu-data'

export function Footer() {
  return (
    <footer className="bg-charcoal text-cream">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="flex flex-col items-start gap-4">
            <div className="flex items-center gap-3">
              <Image
                src={brand.logo || '/placeholder.svg'}
                alt={brand.name}
                width={52}
                height={52}
                className="size-12 rounded-full bg-cream/95 object-contain p-1"
              />
              <div>
                <p className="font-heading text-xl font-extrabold">{brand.name}</p>
                <p className="text-sm text-cream/70">{'طعمی که فراموش نمی‌کنید'}</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-cream/70">{brand.slogan}</p>
          </div>

          <div className="space-y-4">
            <h3 className="font-heading text-lg font-bold">{'اطلاعات تماس'}</h3>
            <ul className="space-y-3 text-sm text-cream/80">
              <li className="flex items-center gap-3">
                <MapPin className="size-5 shrink-0 text-accent" aria-hidden="true" />
                {brand.address}
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-5 shrink-0 text-accent" aria-hidden="true" />
                <a href={brand.phoneHref} className="transition hover:text-accent" dir="ltr">
                  {brand.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="size-5 shrink-0 text-accent" aria-hidden="true" />
                {brand.hours}
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-heading text-lg font-bold">{'تماس مستقیم'}</h3>
            <p className="text-sm leading-relaxed text-cream/70">
              {'برای سفارش یا پرسش درباره منو، مستقیم با موبایل پینار تماس بگیرید.'}
            </p>
            <a
              href={brand.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Phone className="size-5" aria-hidden="true" />
              {'تماس با موبایل'}
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-cream/15 pt-6">
          <div className="flex flex-col-reverse items-center justify-between gap-4 text-center text-sm text-cream/60 sm:flex-row">
            <p>
              {'© '}
              {brand.name}
              {' — تمامی حقوق محفوظ است'}
            </p>
            <a
              href={brand.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-cream/15 px-4 py-2 text-cream/70 transition hover:border-accent/50 hover:text-accent"
            >
              <Camera className="size-4" aria-hidden="true" />
              {'اینستاگرام پینار'}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
