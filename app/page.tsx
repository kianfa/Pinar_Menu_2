import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { CategoryTabs } from '@/components/category-tabs'
import { FeaturedItems } from '@/components/featured-items'
import { MenuSection } from '@/components/menu-section'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <CategoryTabs />
      <FeaturedItems />
      <MenuSection />
      <Footer />
    </main>
  )
}
