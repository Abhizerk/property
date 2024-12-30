import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card } from "@/components/ui/card"
import { Quote } from 'lucide-react'

export function AboutSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12">
          {/* About Us */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold">About Us</h2>
            <div className="space-y-6 text-lg text-gray-600">
              <p>
                At MATimmo Luxembourg, we offer comprehensive real estate and property management
                services for sales, rentals, and investments.
              </p>
              <p>
                Your property holds emotional value beyond numbers. With over 10 years of experience in real
                estate and construction, our advisors provide free, expert valuations to guide your decisions.
              </p>
              <p>
                We ensure a rigorous approach at every step: market analysis, valuation, marketing, and
                communication.
              </p>
              <p>
                Our expertise combines in-depth knowledge of the Luxembourg market and its players with
                proven construction expertise to maximize your property's value.
              </p>
            </div>
          </div>

          {/* Valuation Form */}
          <Card className="p-8 bg-white rounded-xl shadow-lg">
            <h3 className="text-3xl font-bold mb-8">Start Your Free Property Valuation</h3>
            <div className="flex gap-4">
              <Select>
                <SelectTrigger className="flex-1">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="luxembourg">Luxembourg</SelectItem>
                  <SelectItem value="strassen">Strassen</SelectItem>
                  <SelectItem value="eischen">Eischen</SelectItem>
                </SelectContent>
              </Select>
              <Button size="lg" className="bg-black text-white hover:bg-black/90">
                Start Evaluation
              </Button>
            </div>
          </Card>

          {/* Testimonial */}
          <div className="bg-black text-white p-8 rounded-xl">
            <div className="flex gap-8">
              <Quote className="h-12 w-12 text-gray-400" />
              <div className="space-y-4">
                <p className="text-lg">
                  Mario guided us expertly through selling our Strassen property
                  with outstanding professionalism. His market knowledge,
                  transparent communication, and negotiation skills secured us
                  an excellent deal. A trustworthy agent who delivers results -
                  highly recommended!
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-400">
                  <div className="space-y-2">
                    <p className="flex items-center gap-2">
                      <span>📞</span>
                      <a href="tel:+352691444420" className="hover:text-white">
                        +352 691 444 420
                      </a>
                    </p>
                    <p className="flex items-center gap-2">
                      <span>📧</span>
                      <a href="mailto:mario@matimmo.lu" className="hover:text-white">
                        mario@matimmo.lu
                      </a>
                    </p>
                  </div>
                  <div>
                    <p className="flex items-center gap-2">
                      <span>📍</span>
                      170 Rue Cessange,<br />
                      L-1321, Luxembourg
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

