import Image from 'next/image'
import { Flame, Star } from 'lucide-react'
import { badgeLabels, type MenuItem } from '@/lib/menu-data'

function Badge({ type }: { type: 'popular' | 'spicy' }) {
  const isSpicy = type === 'spicy'
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold shadow-sm ${
        isSpicy
          ? 'bg-primary text-primary-foreground'
          : 'bg-accent text-accent-foreground'
      }`}
    >
      {isSpicy ? (
        <Flame className="size-3" aria-hidden="true" />
      ) : (
        <Star className="size-3 fill-current" aria-hidden="true" />
      )}
      {badgeLabels[type]}
    </span>
  )
}

export function ProductCard({ item }: { item: MenuItem }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
        <Image
          src={item.image || '/placeholder.svg'}
          alt={item.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {item.badges && item.badges.length > 0 && (
          <div className="absolute right-3 top-3 flex flex-wrap gap-2">
            {item.badges.map((b) => (
              <Badge key={b} type={b} />
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="font-heading text-lg font-bold text-card-foreground text-balance">
          {item.name}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
          {item.description}
        </p>
        {item.ingredients && (
          <p className="text-xs leading-relaxed text-muted-foreground/80">
            <span className="font-semibold text-card-foreground/70">{'مواد: '}</span>
            {item.ingredients}
          </p>
        )}
        <div className="mt-auto flex items-center justify-between gap-2 pt-2">
          <span className="font-heading text-lg font-extrabold text-primary">
            {item.price}
            <span className="mr-1 text-sm font-medium text-muted-foreground">{'تومان'}</span>
          </span>
        </div>
      </div>
    </article>
  )
}
