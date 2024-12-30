import Image from 'next/image'
import { Bed, Bath, Maximize } from 'lucide-react'

interface Property {
  id: number
  title: string
  location: string
  price: string
  bedrooms: number
  bathrooms: number
  area: string
  image: string
  status?: string
}

const properties: Property[] = [
  {
    id: 1,
    title: "Apartment - Central Luxembourg",
    location: "Luxembourg",
    price: "€ 2,500",
    bedrooms: 1,
    bathrooms: 1,
    area: "60m²",
    image: "/property-1.jpg",
    status: "Already Rented"
  },
  {
    id: 2,
    title: "Duplex - Strassen",
    location: "Strassen",
    price: "€2,200",
    bedrooms: 2,
    bathrooms: 1.5,
    area: "88m²",
    image: "/property-2.jpg"
  },
  {
    id: 3,
    title: "Apartment - Eischen",
    location: "Eischen",
    price: "€ 1,100,000",
    bedrooms: 1,
    bathrooms: 1,
    area: "50m²",
    image: "/property-3.jpg"
  }
]

export function FeaturedProperties() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-semibold">Featured Properties</h2>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Explore All
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div key={property.id} className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-48">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover"
                />
                {property.status && (
                  <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 rounded-full text-sm">
                    {property.status}
                  </div>
                )}
                <div className="absolute top-4 right-4 bg-white text-black px-3 py-1 rounded-full text-sm font-semibold">
                  {property.price}
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{property.title}</h3>
                <div className="flex items-center gap-4 text-gray-600">
                  <div className="flex items-center gap-1">
                    <Bed className="h-4 w-4" />
                    <span>{property.bedrooms}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath className="h-4 w-4" />
                    <span>{property.bathrooms}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Maximize className="h-4 w-4" />
                    <span>{property.area}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

