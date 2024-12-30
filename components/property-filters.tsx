'use client'

import { Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export function PropertyFilters() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
      <Select>
        <SelectTrigger className="bg-white">
          <SelectValue placeholder="Location" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="luxembourg">Luxembourg</SelectItem>
          <SelectItem value="strassen">Strassen</SelectItem>
          <SelectItem value="eischen">Eischen</SelectItem>
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger className="bg-white">
          <SelectValue placeholder="Type of Property" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apartment">Apartment</SelectItem>
          <SelectItem value="house">House</SelectItem>
          <SelectItem value="duplex">Duplex</SelectItem>
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger className="bg-white">
          <SelectValue placeholder="Budget" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="0-1000">€0 - €1,000</SelectItem>
          <SelectItem value="1000-2000">€1,000 - €2,000</SelectItem>
          <SelectItem value="2000+">€2,000+</SelectItem>
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger className="bg-white">
          <SelectValue placeholder="Rooms" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">1 Room</SelectItem>
          <SelectItem value="2">2 Rooms</SelectItem>
          <SelectItem value="3">3+ Rooms</SelectItem>
        </SelectContent>
      </Select>

      <Button size="icon" className="bg-black hover:bg-black/90">
        <Search className="h-4 w-4" />
      </Button>
    </div>
  )
}

