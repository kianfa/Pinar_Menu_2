import { categories } from '@/lib/menu-data'
import { ProductCard } from '@/components/product-card'

export function MenuSection() {
  return (
    <div id="menu" className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
      {categories.map((cat) => (
        <section
          key={cat.id}
          id={cat.id}
          className="scroll-mt-32 border-t border-border/60 py-12 first:border-t-0"
        >
          <div className="mb-7 flex items-center gap-3">
            <span className="h-7 w-1.5 rounded-full bg-primary" aria-hidden="true" />
            <h2 className="font-heading text-2xl font-black text-foreground sm:text-3xl">
              {cat.title}
            </h2>
            <span className="rounded-full bg-secondary px-2.5 py-1 text-xs font-bold text-muted-foreground">
              {cat.items.length} {'مورد'}
            </span>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cat.items.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
