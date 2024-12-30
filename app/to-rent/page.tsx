import { NavBar } from '@/components/nav-bar'
import { PropertyFilters } from '@/components/property-filters'
import { PropertyGrid } from '@/components/property-grid'

export default function ToRentPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <NavBar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <h1 className="text-4xl font-bold mb-8">Properties To Rent</h1>
        <PropertyFilters />
        <PropertyGrid />
      </div>
    </main>
  )
}

