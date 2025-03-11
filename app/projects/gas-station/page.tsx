import '@/app/projects/gas-station/page.scss'
import { Carousel } from '@/components/carousel'
import DescriptionCard from '@/components/DescriptionCard'

export default function GasStation() {
    return <>
        <section className='slideshow'>
            <Carousel slides={[
                {
                    video: false,
                    size: [],
                    src: "/projects/GasStation/Day.png",
                    alt: "Gas Station Artwork Shot 1 Day time",
                },
                {
                    video: false,
                    size: [],
                    src: "/projects/GasStation/Smoggy.png",
                    alt: "Gas Station Artwork Shot 1 with Smoggy weather",
                },
                {
                    video: false,
                    size: [],
                    src: "/projects/GasStation/Night.png",
                    alt: "Gas Station Artwork Shot 1 Night time",
                },
                {
                    video: false,
                    size: [],
                    src: "/projects/GasStation/Night3.png",
                    alt: "Gas Station Artwork Shot 2 Night time",
                },
                {
                    video: false,
                    size: [],
                    src: "/projects/GasStation/Day2.png",
                    alt: "Gas Station Artwork Shot 2 Day time",
                },
                {
                    video: false,
                    size: [],
                    src: "/projects/GasStation/Night2.png",
                    alt: "Gas Station Artwork Shot 1 Night time",
                },
                
            ]}/>
        </section>
        <section className='aboutArtwork'>
            <DescriptionCard addButton={true} buttonText="View All Artworks" buttonLink="/portfolio?hook=artworks" addSocials={false} imageSource="/projects/GasStation/Extra.png" imageSize={["600px", "720px"]} imageRounded={false} alignCenter={true} heading="Gas Station" text={
                <>
                    <p>The only gas station in the middle of vast wilderness</p>
                    <p>Developed in Unity HDRP with Quixel assets over a period of about 3 weeks</p>
                </>
            }/>
        </section>
    </>
}