import { NavBar } from '@/components/nav-bar'
import { EstimationForm } from '@/components/estimation-form'

export default function EstimationPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <NavBar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <h1 className="text-4xl font-bold mb-8">Property Estimation</h1>
        <div className="max-w-3xl">
          <EstimationForm />
        </div>
      </div>
    </main>
  )
}

