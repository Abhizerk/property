'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function NavBar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.svg"
                alt="MATimmo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link href="/for-sale" className="text-gray-900 hover:text-gray-600">
              For Sale
            </Link>
            <Link href="/to-rent" className="text-gray-900 hover:text-gray-600">
              To Rent
            </Link>
            <Link href="/of-plan" className="text-gray-900 hover:text-gray-600">
              Of Plan
            </Link>
            <Link href="/estimation" className="text-gray-900 hover:text-gray-600">
              Estimation
            </Link>
            <Link href="/contact" className="text-gray-900 hover:text-gray-600">
              Contact
            </Link>
            <Button variant="ghost" className="flex items-center gap-1">
              EN <ChevronDown className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

