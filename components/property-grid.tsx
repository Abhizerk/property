import { PropertyCard } from './property-card'

const properties = [
  {
    title: "Apartment - Central Luxembourg",
    location: "Luxembourg",
    price: "2,500€",
    bedrooms: 1,
    bathrooms: 1,
    area: "60m²",
    image: "/property-1.jpg",
    status: "Already Rented"
  },
  {
    title: "Duplex - Strassen",
    location: "Strassen",
    price: "2,200€",
    bedrooms: 2,
    bathrooms: 1.5,
    area: "88m²",
    image: "/property-2.jpg"
  },
  {
    title: "Apartment - Eischen",
    location: "Eischen",
    price: "1,150€",
    bedrooms: 1,
    bathrooms: 1,
    area: "50m²",
    image: "/property-3.jpg"
  }
]

export function PropertyGrid() {
  return (
    <div className="mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property, index) => (
          <PropertyCard key={index} {...property} />
        ))}
      </div>
      <div className="mt-8 text-center">
        <button className="text-gray-600 hover:text-gray-900">
          View More
        </button>
      </div>
    </div>
  )
}

