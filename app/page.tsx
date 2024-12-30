import { NavBar } from '@/components/nav-bar'
import { HeroSection } from '@/components/hero-section'
import { PropertySearch } from '@/components/property-search'
import { FeaturedProperties } from '@/components/featured-properties'
import { AboutSection } from '@/components/about-section'

export default function Home() {
  return (
    <main>
      <NavBar />
      <HeroSection />
      <PropertySearch />
      <FeaturedProperties />
      <AboutSection />
    </main>
  )
}

