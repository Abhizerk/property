import Image from 'next/image'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center">
                <Image
                  src="/logo.svg"
                  alt="MATimmo"
                  width={120}
                  height={40}
                  className="h-10 w-auto brightness-0 invert"
                />
              </Link>
              <p className="text-sm text-gray-400">
                © Copyright {new Date().getFullYear()} All Right Reserved.
              </p>
            </div>

            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-400">
              <Link href="/for-sale" className="hover:text-white transition-colors">
                For Sale
              </Link>
              <Link href="/to-rent" className="hover:text-white transition-colors">
                To Rent
              </Link>
              <Link href="/of-plan" className="hover:text-white transition-colors">
                Of Plan
              </Link>
              <Link href="/estimation" className="hover:text-white transition-colors">
                Estimation
              </Link>
              <Link href="/contact" className="hover:text-white transition-colors">
                Contact
              </Link>
            </nav>

            <div className="flex gap-4 text-sm text-gray-400">
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms Of Use
              </Link>
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

