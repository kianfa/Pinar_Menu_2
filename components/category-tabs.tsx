'use client'

import { useEffect, useRef, useState } from 'react'
import { categories } from '@/lib/menu-data'

export function CategoryTabs() {
  const [active, setActive] = useState(categories[0].id)
  const navRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) {
          setActive(visible[0].target.id)
        }
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 1] },
    )

    categories.forEach((c) => {
      const el = document.getElementById(c.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const btn = navRef.current?.querySelector<HTMLElement>(
      `[data-cat="${active}"]`,
    )
    btn?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
  }, [active])

  return (
    <nav
      aria-label="دسته‌بندی منو"
      className="sticky top-14 sm:top-16 z-40 border-b border-border/60 bg-background/94 backdrop-blur-md"
    >
      <div
        ref={navRef}
        className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-3 py-2 sm:justify-center sm:px-6 sm:py-2.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {categories.map((cat) => (
          <a
            key={cat.id}
            href={`#${cat.id}`}
            data-cat={cat.id}
            className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-bold transition-colors ${
              active === cat.id
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground'
            }`}
          >
            {cat.title}
          </a>
        ))}
      </div>
    </nav>
  )
}
