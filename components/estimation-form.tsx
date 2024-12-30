'use client'

import { useState } from 'react'
import { MapPin, Search } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'

type PropertyType = 'apartment' | 'house' | 'land' | null

export function EstimationForm() {
  const [propertyType, setPropertyType] = useState<PropertyType>(null)

  return (
    <Card className="p-6">
      <form className="space-y-8">
        {/* Location Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-blue-600" />
            <Label className="text-lg font-medium">Location</Label>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2 relative">
              <Input
                type="text"
                placeholder="Location"
                className="pr-10"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
            
            <Input
              type="text"
              placeholder="Postal Code"
            />
            
            <Input
              type="text"
              placeholder="Street Name"
            />
            
            <Input
              type="text"
              placeholder="Street Number"
            />
          </div>
        </div>

        {/* Property Type Selection */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button
            type="button"
            variant={propertyType === 'apartment' ? 'default' : 'outline'}
            className="w-full"
            onClick={() => setPropertyType('apartment')}
          >
            Apartment
          </Button>
          
          <Button
            type="button"
            variant={propertyType === 'house' ? 'default' : 'outline'}
            className="w-full"
            onClick={() => setPropertyType('house')}
          >
            House
          </Button>
          
          <Button
            type="button"
            variant={propertyType === 'land' ? 'default' : 'outline'}
            className="w-full"
            onClick={() => setPropertyType('land')}
          >
            Land
          </Button>
        </div>

        {/* Next Button */}
        <div className="flex justify-end">
          <Button 
            type="submit"
            className="bg-black hover:bg-black/90"
          >
            Next
          </Button>
        </div>
      </form>
    </Card>
  )
}

