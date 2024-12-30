import { NavBar } from '@/components/nav-bar'
import { PropertyDetails } from '@/components/property-details'
import { PropertyGallery } from '@/components/property-gallery'
import { PropertyContact } from '@/components/property-contact'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function PropertyPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <NavBar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <h1 className="text-4xl font-bold mb-8">Apartment - Central Luxembourg</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <PropertyGallery />
            <PropertyDetails />
          </div>
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <PropertyContact />
            </div>
          </div>
        </div>
        
        <div className="mt-8">
          <Button asChild variant="outline">
            <Link href="/to-rent">
              Back to Properties To Rent
            </Link>
          </Button>
        </div>
      </div>
    </main>
  )
}

