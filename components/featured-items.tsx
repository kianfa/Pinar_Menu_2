import { Sparkles } from 'lucide-react'
import { featured } from '@/lib/menu-data'
import { ProductCard } from '@/components/product-card'

export function FeaturedItems() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
      <div className="mb-8 flex flex-col items-center text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-1.5 text-sm font-bold text-accent-foreground">
          <Sparkles className="size-4" aria-hidden="true" />
          {'پرفروش‌ترین‌ها'}
        </span>
        <h2 className="mt-3 font-heading text-3xl font-black text-foreground text-balance sm:text-4xl">
          {'پیشنهاد ویژه پینار'}
        </h2>
        <p className="mt-3 max-w-md text-muted-foreground text-pretty">
          {'محبوب‌ترین انتخاب‌های مشتریان ما را امتحان کنید'}
        </p>
      </div>

      <div
        dir="rtl"
        className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain px-4 pb-2 scroll-smooth [scroll-padding-inline:1rem] [scrollbar-width:none] sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-4 [&::-webkit-scrollbar]:hidden"
      >
        {featured.map((item) => (
          <div
            key={item.id}
            className="w-[82%] max-w-[330px] flex-none snap-start sm:w-auto sm:max-w-none"
          >
            <ProductCard item={item} />
          </div>
        ))}
      </div>
    </section>
  )
}
