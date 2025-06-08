import '@/app/projects/gas-station/page.scss'
import { Carousel } from '@/components/carousel'
import DescriptionCard from '@/components/DescriptionCard'

export const metadata = {
    metadataBase: new URL("https://nilpotent.vercel.app"),
    title: 'Gas Station Artwork | Behroz Khan',
    description: 'Artwork made in Unity HDRP with Quixel Assets by Behroz Khan',
    openGraph: {
        title: 'Gas Station Artwork | Behroz Khan',
        description: 'Artwork made in Unity HDRP with Quixel Assets by Behroz Khan',
        type: 'website',
        images: [
            {
                url: '/projects/GasStation/Day.jpg',
                width: 3840,
                height: 2160,
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
                    src: "/projects/GasStation/Day.jpg",
                    alt: "Gas Station Artwork Shot 1 Day time",
                },
                {
                    type: 0,
                    size: [],
                    src: "/projects/GasStation/Smoggy.jpg",
                    alt: "Gas Station Artwork Shot 1 with Smoggy weather",
                },
                {
                    type: 0,
                    size: [],
                    src: "/projects/GasStation/Night.jpg",
                    alt: "Gas Station Artwork Shot 1 Night time",
                },
                {
                    type: 0,
                    size: [],
                    src: "/projects/GasStation/Night3.jpg",
                    alt: "Gas Station Artwork Shot 2 Night time",
                },
                {
                    type: 0,
                    size: [],
                    src: "/projects/GasStation/Day2.jpg",
                    alt: "Gas Station Artwork Shot 2 Day time",
                },
                {
                    type: 0,
                    size: [],
                    src: "/projects/GasStation/Night2.jpg",
                    alt: "Gas Station Artwork Shot 1 Night time",
                },
                
            ]}/>
        </section>
        <section className='aboutArtwork'>
            <DescriptionCard addButton={true} buttonText="View All" buttonLink="/portfolio?hook=artworks" addSocials={false} imageSource="/projects/GasStation/Extra.jpg" imageSize={["600px", "720px"]} imageRounded={false} alignCenter={true} heading="Gas Station" tagline='December 2024' text={
                <>
                    <p>The only gas station in the middle of vast wilderness</p>
                    <p>Developed in Unity HDRP with Quixel assets over a period of about 3 weeks</p>
                </>
            }/>
        </section>
    </>
}