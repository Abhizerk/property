import { Inter } from 'next/font/google'
import { NavBar } from '@/components/nav-bar'
import { Footer } from '@/components/footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MATimmo - Real Estate Agency',
  description: 'Your trusted real estate partner in Luxembourg',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <NavBar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

