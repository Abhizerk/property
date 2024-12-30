import { Check } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export function PropertyDetails() {
  return (
    <div className="space-y-8">
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Details</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <p>Non-furnished Appartment</p>
            <p>Monthly Rent: <span className="font-semibold">2,500 €</span></p>
            <p>Monthly Charges: <span className="font-semibold">150 €</span></p>
            <p>Availability: <span className="font-semibold">Direct</span></p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span>Energy Class:</span>
              <Badge className="bg-green-500">A</Badge>
            </div>
            <div className="flex items-center gap-2">
              <span>Heat Isolation:</span>
              <Badge className="bg-red-500">G</Badge>
            </div>
          </div>
        </div>
        
        <div className="mt-6 grid grid-cols-2 gap-4">
          {[
            'Chimney Insert',
            'Radiators',
            'Water',
            'Gas',
            'Double Glazed'
          ].map((feature) => (
            <div key={feature} className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Property Details</h2>
        <p className="text-gray-600">
          Modern spacious apartment featuring contemporary design and premium finishes. 
          Located in the heart of Luxembourg, this property offers convenient access to 
          all city amenities while maintaining a peaceful residential atmosphere.
        </p>
      </Card>
    </div>
  )
}

