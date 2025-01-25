import './globals.scss'
import {Inter, Poppins} from 'next/font/google'
import Footer from '@/components/footer'
import Navbar from "@/components/navbar";
import Background from '@/components/background'

//const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], subsets: ['latin'], variable: '--font-poppins', })

export const metadata = {
  title: 'Shehroz K.',
  description: 'A FrontEnd Web3 Developer',
  image: '/squiggle.png'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
      <Navbar/>
      <Background/>
      {children}
      <Footer />
      </body>
    </html>
  )
}
