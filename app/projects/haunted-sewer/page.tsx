import '@/app/projects/gas-station/page.scss'
import { Carousel } from '@/components/carousel'
import DescriptionCard from '@/components/DescriptionCard'

export const metadata = {
    metadataBase: new URL("https://nilpotent.vercel.app"),
    title: 'Haunted Sewer Artwork | Behroz Khan',
    description: 'Artwork made in Unity HDRP with Quixel Assets by Behroz Khan',
    openGraph: {
        title: 'Haunted Sewer Artwork | Behroz Khan',
        description: 'Artwork made in Unity HDRP with Quixel Assets by Behroz Khan',
        type: 'website',
        images: [
            {
                url: '/projects/HauntedSewer/LeftNoon.jpg',
                width: 3840,
                height: 2160,
            },
        ],
    },
  }

export default function HauntedSewer() {
    return <>
        <section className='slideshow'>
            <Carousel slides={[
                {
                    type: 0,
                    size: [],
                    src: "/projects/HauntedSewer/LeftNoon.jpg",
                    alt: "Haunted Sewer Artwork Shot 1 Noon",
                },
                {
                    type: 0,
                    size: [],
                    src: "/projects/HauntedSewer/LeftSunset.jpg",
                    alt: "Haunted Sewer Artwork Shot 1 Sunset",
                },
                {
                    type: 2,
                    size: ["100%", "100%"],
                    src: "/projects/HauntedSewer/Night.mp4",
                    alt: "Haunted Sewer Artwork Night Scene",
                },
                {
                    type: 0,
                    size: [],
                    src: "/projects/HauntedSewer/RightNoon.jpg",
                    alt: "Haunted Sewer Artwork Shot 2 Noon",
                },
                {
                    type: 0,
                    size: [],
                    src: "/projects/HauntedSewer/RightSunset.jpg",
                    alt: "Haunted Sewer Artwork Shot 2 Sunset",
                }
                
            ]}/>
        </section>
        <section className='aboutArtwork'>
            <DescriptionCard addButton={true} buttonText="View All" buttonLink="/portfolio?hook=artworks" addSocials={false} imageSource="/projects/HauntedSewer/Extra.jpg" imageSize={["600px", "720px"]} imageRounded={false} alignCenter={true} heading="Haunted Sewer" tagline="October 2024" text={
                <>
                    <p>Abandonded sewerage system rumoured to be connected with dark rituals</p>
                    <p>My first attempt at photorealism.<br/>Developed in Unity HDRP with Quixel assets over a period of about 2 weeks</p>
                </>
            }/>
        </section>
    </>
}