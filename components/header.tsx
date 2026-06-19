'use client'

import Image from 'next/image'
import { Phone } from 'lucide-react'
import { brand } from '@/lib/menu-data'

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/55 bg-background/94 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-3 sm:h-16 sm:px-6">
        <a href="#top" className="flex min-w-0 items-center gap-2 rounded-full">
          <Image
            src={brand.logo || '/placeholder.svg'}
            alt={brand.name}
            width={44}
            height={44}
            className="size-10 shrink-0 rounded-full bg-cream object-contain p-1 shadow-sm ring-1 ring-border/70 sm:size-11"
          />
          <span className="truncate font-heading text-sm font-black text-foreground sm:text-base">
            {brand.name}
          </span>
        </a>

        <a
          href={brand.phoneHref}
          aria-label="تماس با موبایل پینار فست‌فود"
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-border/75 bg-card/85 px-3 py-2 text-xs font-bold text-foreground shadow-sm transition hover:border-primary/35 hover:bg-secondary hover:text-primary sm:px-4 sm:text-sm"
        >
          <Phone className="size-[17px]" aria-hidden="true" />
          <span className="sm:hidden">{'تماس'}</span>
          <span className="hidden sm:inline">{'تماس با موبایل'}</span>
        </a>
      </div>
    </header>
  )
}
