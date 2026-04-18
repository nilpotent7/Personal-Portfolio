import '@/app/projects/themyth/page.scss'
import { Carousel } from '@/components/carousel'
import DescriptionCard from '@/components/DescriptionCard'

export const metadata = {
    metadataBase: new URL("https://nilpotent.vercel.app"),
    title: 'TheMyth | Behroz Khan',
    description: 'Unravel the mysteries of an abandoned World War 2 Ship, in this horror first-person shooter.',
    openGraph: {
        title: 'TheMyth | Behroz Khan',
        description: 'Unravel the mysteries of an abandoned World War 2 Ship, in this horror first-person shooter.',
        type: 'website',
        images: [
            {
                url: '/projects/TheMyth/CoverArt.png',
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
                    src: "/projects/TheMyth/Screenshot1.png",
                    alt: "In-game Screenshot",
                },
                {
                    type: 0,
                    size: [],
                    src: "/projects/TheMyth/Screenshot2.png",
                    alt: "In-game Screenshot",
                },
                {
                    type: 0,
                    size: [],
                    src: "/projects/TheMyth/Screenshot3.png",
                    alt: "In-game Screenshot",
                },
                {
                    type: 0,
                    size: [],
                    src: "/projects/TheMyth/Screenshot4.png",
                    alt: "In-game Screenshot",
                },
            ]}/>
        </section>
        <section className='aboutArtwork'>
            <DescriptionCard addButton={true} buttonText="View All" buttonLink="/portfolio?hook=games" addSocials={false} imageSource="/projects/TheMyth/CoverArt.png" imageSize={["1920px", "1080px"]} imageRounded={false} alignCenter={true} heading="TheMyth" tagline='February 2026' text={
                <>
                    <p>
                        Unravel the mysteries of an abandoned World War 2 Ship, in this horror first-person shooter.
                    </p>
                    <p>Feelance Project | Made in Unreal Engine</p>
                </>
            }/>
        </section>
    </>
}