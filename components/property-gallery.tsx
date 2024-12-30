'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

const images = [
  '/property-main.jpg',
  '/property-back.jpg',
  '/property-garage.jpg',
  '/property-interior-1.jpg',
  '/property-interior-2.jpg',
]

export function PropertyGallery() {
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-video">
        <Image
          src={images[selectedImage]}
          alt="Property view"
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4 grid grid-cols-5 gap-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={cn(
              "relative aspect-video overflow-hidden rounded-md",
              selectedImage === index && "ring-2 ring-black"
            )}
          >
            <Image
              src={image}
              alt={`Property view ${index + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </Card>
  )
}

