import './globals.scss'
import {Poppins, Ubuntu_Condensed, JetBrains_Mono} from 'next/font/google'
import Footer from '@/components/footer'
import Navbar from "@/components/navbar";
import Background from '@/components/background'

const poppins = Poppins({ weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], subsets: ['latin'], variable: '--font-poppins', })
const ubuntu = Ubuntu_Condensed({ weight: ['400'], subsets: ['latin'], variable: '--font-alt', })
const monospace = JetBrains_Mono({ weight: ['100', '200', '300', '400', '500', '600', '700', '800'], subsets: ['latin'], variable: '--font-monospace', })

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
      <body className={`${poppins.variable} ${ubuntu.variable} ${monospace.variable}`}>
      <Navbar/>
      <Background/>
      {children}
      <Footer />
      </body>
    </html>
  )
}