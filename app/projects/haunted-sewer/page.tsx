import '@/app/projects/gas-station/page.scss'
import { Carousel } from '@/components/carousel'
import DescriptionCard from '@/components/DescriptionCard'

export default function HauntedSewer() {
    return <>
        <section className='slideshow'>
            <Carousel slides={[
                {
                    video: false,
                    size: [],
                    src: "/projects/HauntedSewer/LeftNoon.png",
                    alt: "Haunted Sewer Artwork Shot 1 Noon",
                },
                {
                    video: false,
                    size: [],
                    src: "/projects/HauntedSewer/LeftSunset.png",
                    alt: "Haunted Sewer Artwork Shot 1 Sunset",
                },
                {
                    video: true,
                    size: ["100%", "100%"],
                    src: "/projects/HauntedSewer/Night.mp4",
                    alt: "Haunted Sewer Artwork Night Scene",
                },
                {
                    video: false,
                    size: [],
                    src: "/projects/HauntedSewer/RightNoon.png",
                    alt: "Haunted Sewer Artwork Shot 2 Noon",
                },
                {
                    video: false,
                    size: [],
                    src: "/projects/HauntedSewer/RightSunset.png",
                    alt: "Haunted Sewer Artwork Shot 2 Sunset",
                }
                
            ]}/>
        </section>
        <section className='aboutArtwork'>
            <DescriptionCard addButton={true} buttonText="View All Artworks" buttonLink="/portfolio?hook=artworks" addSocials={false} imageSource="/projects/HauntedSewer/Extra.png" imageSize={["600px", "720px"]} imageRounded={false} alignCenter={true} heading="Haunted Sewer" text={
                <>
                    <p>Abandonded sewerage system rumoured to be connected with dark rituals</p>
                    <p>My first attempt at photorealism. Developed in Unity HDRP with Quixel assets over a period of about 2 weeks</p>
                </>
            }/>
        </section>
    </>
}