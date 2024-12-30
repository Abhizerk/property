import { NavBar } from '@/components/nav-bar'
import { ContactForm } from '@/components/contact-form'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <NavBar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
        <div className="max-w-2xl">
          <ContactForm />
        </div>
      </div>
    </main>
  )
}

