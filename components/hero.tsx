import Image from 'next/image'
import { brand } from '@/lib/menu-data'

export function Hero() {
  return (
    <section id="top" className="bg-background px-3 pb-3 pt-3 sm:px-6 sm:pb-5 sm:pt-5 lg:pb-8">
      <div className="mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-[1.75rem] bg-secondary shadow-2xl shadow-primary/15 ring-1 ring-border/70 sm:rounded-[2rem] lg:rounded-[2.5rem]">
          <div className="relative h-[78vw] min-h-[286px] max-h-[356px] sm:h-[48vw] sm:max-h-[440px] lg:h-[540px] lg:max-h-[540px]">
            <Image
              src={brand.storefront || '/placeholder.svg'}
              alt="نمای بیرونی رستوران پینار فست‌فود"
              fill
              priority
              sizes="(min-width: 1024px) 1152px, (min-width: 640px) calc(100vw - 48px), calc(100vw - 24px)"
              className="origin-bottom scale-[1.045] object-cover object-bottom brightness-[1.04] contrast-[1.05] saturate-[1.1] sm:scale-[1.025] sm:object-[center_66%] lg:scale-100 lg:object-center"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
