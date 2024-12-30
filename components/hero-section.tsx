import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-sky-600 mix-blend-multiply" />
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero-bg.jpg')"
        }}
      />
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Beyond Real Estate,<br />Building Trust
            </h1>
            <Button size="lg" className="bg-black text-white hover:bg-black/90">
              Get a Quote
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

