import Image from 'next/image'
import { Bed, Bath, Maximize } from 'lucide-react'
import { Card } from '@/components/ui/card'

interface PropertyCardProps {
  title: string
  location: string
  price: string
  bedrooms: number
  bathrooms: number
  area: string
  image: string
  status?: string
}

export function PropertyCard({
  title,
  location,
  price,
  bedrooms,
  bathrooms,
  area,
  image,
  status
}: PropertyCardProps) {
  return (
    <Card className="overflow-hidden group cursor-pointer">
      <div className="relative aspect-[4/3]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 rounded-sm text-sm">
          {price}
        </div>
        {status && (
          <div className="absolute top-0 left-0 bg-blue-500 text-white px-4 py-1 rotate-[-45deg] translate-x-[-30%] translate-y-[60%]">
            {status}
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600 mb-4">{location}</p>
        <div className="flex items-center gap-6 text-gray-600">
          <div className="flex items-center gap-2">
            <Bed className="h-4 w-4" />
            <span>{bedrooms}</span>
          </div>
          <div className="flex items-center gap-2">
            <Bath className="h-4 w-4" />
            <span>{bathrooms}</span>
          </div>
          <div className="flex items-center gap-2">
            <Maximize className="h-4 w-4" />
            <span>{area}</span>
          </div>
        </div>
      </div>
    </Card>
  )
}

