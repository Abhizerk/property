'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Minus, Plus, Search } from 'lucide-react'

export function PropertySearch() {
  return (
    <Card className="max-w-6xl mx-auto -mt-8 relative z-10 shadow-lg">
      <div className="flex space-x-1 p-1 bg-gray-100 rounded-t-lg">
        <Button variant="ghost" className="flex-1 rounded-none">For Sale</Button>
        <Button variant="ghost" className="flex-1 rounded-none">To Rent</Button>
        <Button variant="ghost" className="flex-1 rounded-none">Of Plan</Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Location" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="luxembourg">Luxembourg</SelectItem>
            <SelectItem value="strassen">Strassen</SelectItem>
            <SelectItem value="eischen">Eischen</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Type of Property" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="apartment">Apartment</SelectItem>
            <SelectItem value="house">House</SelectItem>
            <SelectItem value="duplex">Duplex</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Budget" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="0-500000">€0 - €500,000</SelectItem>
            <SelectItem value="500000-1000000">€500,000 - €1,000,000</SelectItem>
            <SelectItem value="1000000+">€1,000,000+</SelectItem>
          </SelectContent>
        </Select>

        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon">
            <Minus className="h-4 w-4" />
          </Button>
          <span className="flex-1 text-center">Bedrooms</span>
          <Button variant="outline" size="icon">
            <Plus className="h-4 w-4" />
          </Button>
          <Button size="icon" className="bg-black hover:bg-black/90">
            <Search className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  )
}

