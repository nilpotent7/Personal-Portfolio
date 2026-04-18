import '@/app/projects/gellyjump/page.scss'
import { Carousel } from '@/components/carousel'
import DescriptionCard from '@/components/DescriptionCard'

export const metadata = {
    metadataBase: new URL("https://nilpotent.vercel.app"),
    title: 'GellyJump | Behroz Khan',
    description: 'Avoid unavoidable obstacles with lightning reflexes, in an endless runner',
    openGraph: {
        title: 'GellyJump | Behroz Khan',
        description: 'Avoid unavoidable obstacles with lightning reflexes, in an endless runner',
        type: 'website',
        images: [
            {
                url: '/projects/GellyJump/CoverArt.png',
                width: 1536,
                height: 1024,
            },
        ],
    },
  }


export default function GasStation() {
    return <>
        <section className='slideshow'>
            <Carousel slides={[
                {
                    type: 0,
                    size: [],
                    src: "/projects/GellyJump/Screenshot1.png",
                    alt: "In-game Screenshot",
                },
                {
                    type: 0,
                    size: [],
                    src: "/projects/GellyJump/Screenshot2.png",
                    alt: "In-game Screenshot",
                },
                {
                    type: 0,
                    size: [],
                    src: "/projects/GellyJump/Screenshot3.png",
                    alt: "In-game Screenshot",
                },
                {
                    type: 0,
                    size: [],
                    src: "/projects/GellyJump/Screenshot4.png",
                    alt: "In-game Screenshot",
                },
            ]}/>
        </section>
        <section className='aboutArtwork'>
            <DescriptionCard addButton={true} buttonText="View All" buttonLink="/portfolio?hook=games" addSocials={false} imageSource="/projects/GellyJump/CoverArt.png" imageSize={["3840px", "2160px"]} imageRounded={false} alignCenter={true} heading="GellyJump" tagline='December 2024' text={
                <>
                    <p>
                        Run through unpredictable obstacles that require lightning reflexes. Use powerups in this endless runner and earn as high of a score you can.
                        <br/>
                        Collect coins to buy powerups to get an edge.
                    </p>
                    <p>Made in Unity Engine</p>
                </>
            }/>
        </section>
    </>
}