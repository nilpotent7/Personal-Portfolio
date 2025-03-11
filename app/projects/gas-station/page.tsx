import '@/app/projects/gas-station/page.scss'
import { Carousel } from '@/components/carousel'
import DescriptionCard from '@/components/DescriptionCard'

export default function RaffleCaseStudy() {
    return <>
        <section className='slideshow'>
            <Carousel images={[
                {
                    src: "/projects/GasStation/Day.png",
                    alt: "Gas Station Artwork Day time",
                },
                {
                    src: "/projects/GasStation/Smoggy.png",
                    alt: "Gas Station Artwork with Smoggy weather",
                },
                {
                    src: "/projects/GasStation/Night.png",
                    alt: "Gas Station Artwork Night time",
                },
                {
                    src: "/projects/GasStation/Night3.png",
                    alt: "Gas Station Artwork 2 Night time",
                },
                {
                    src: "/projects/GasStation/Day2.png",
                    alt: "Gas Station Artwork 2 Day time",
                },
                {
                    src: "/projects/GasStation/Night2.png",
                    alt: "Gas Station Artwork 3 Night time",
                },
                
            ]}/>
        </section>
        <section className='aboutArtwork'>
            <DescriptionCard addButton={true} buttonText="View All Artworks" buttonLink="/portfolio?hook=artworks" addSocials={false} imageSource="/projects/GasStation/Extra.png" imageSize={["600px", "720px"]} imageRounded={false} alignCenter={true} heading="Gas Station" text={
                <>
                    <p>The only gas station in the middle of vast wilderness</p>
                    <p>Developed in Unity HDRP with Quixel assets over a period of about 2 weeks</p>
                </>
            }/>
        </section>
    </>
}