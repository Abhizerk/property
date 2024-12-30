'use client'

import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Mail, Phone, MapPin } from 'lucide-react'

export function PropertyContact() {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
        <Mail className="h-5 w-5" />
        Contact Us
      </h2>
      
      <form className="space-y-4">
        <div>
          <Input
            type="email"
            placeholder="Your Email Address*"
            required
          />
        </div>
        <div>
          <Input
            type="text"
            placeholder="Subject*"
            required
          />
        </div>
        <div>
          <Textarea
            placeholder="Content"
            className="min-h-[100px]"
          />
        </div>
        <Button className="w-full bg-black hover:bg-black/90">
          Send
        </Button>
      </form>

      <div className="mt-8 space-y-4 text-sm">
        <div className="flex items-center gap-2">
          <Phone className="h-4 w-4" />
          <a href="tel:+352691444420" className="hover:underline">
            +352 691 444 420
          </a>
        </div>
        <div className="flex items-center gap-2">
          <Mail className="h-4 w-4" />
          <a href="mailto:mario@matimmo.lu" className="hover:underline">
            mario@matimmo.lu
          </a>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4" />
          <address className="not-italic">
            170 Rue Cessange,<br />
            L-1321, Luxembourg
          </address>
        </div>
      </div>
    </Card>
  )
}

