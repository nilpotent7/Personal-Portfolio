import './globals.scss'
import {Poppins} from 'next/font/google'
import Footer from '@/components/footer'
import Navbar from "@/components/navbar";
import Background from '@/components/background'

const poppins = Poppins({ weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], subsets: ['latin'], variable: '--font-poppins', })

export const metadata = {
  metadataBase: new URL("https://nilpotent.vercel.app"),
  title: 'Behroz Khan',
  description: 'Passionate Game Developer | Turning dreams into reality.',
  openGraph: {
      title: 'Behroz Khan',
      description: 'Passionate Game Developer | Turning dreams into reality',
      type: 'website',
      images: [
          {
              url: '/Embed.jpg',
              width: 2048,
              height: 2048,
          },
      ],
  },
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
