'use client'

import { useState } from 'react'
import { Mail } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)

    // Here you would typically handle the form submission
    // For now, we'll just simulate a delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitting(false)
  }

  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-6">
        <Mail className="h-5 w-5" />
        <h2 className="text-xl font-semibold">Contact Us</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="email">Your Email Address*</Label>
          <Input
            id="email"
            type="email"
            required
            className="border-0 border-b border-gray-200 rounded-none px-0 focus-visible:ring-0 focus-visible:border-black"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="subject">Subject*</Label>
          <Input
            id="subject"
            type="text"
            required
            className="border-0 border-b border-gray-200 rounded-none px-0 focus-visible:ring-0 focus-visible:border-black"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="content">Content</Label>
          <Textarea
            id="content"
            className="min-h-[150px] border-0 border-b border-gray-200 rounded-none px-0 focus-visible:ring-0 focus-visible:border-black"
          />
        </div>

        <div className="flex justify-end">
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="bg-black hover:bg-black/90 text-white px-8"
          >
            {isSubmitting ? 'Sending...' : 'Send'}
          </Button>
        </div>
      </form>
    </Card>
  )
}

