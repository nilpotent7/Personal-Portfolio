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
                    src: "/projects/ChronoStrike/Purple.png",
                    alt: "Screenshot 1",
                },
                {
                    video: false,
                    size: [],
                    src: "/projects/ChronoStrike/Orange.png",
                    alt: "Screenshot 1",
                },
                {
                    video: false,
                    size: [],
                    src: "/projects/ChronoStrike/Reflection.png",
                    alt: "Screenshot 1",
                },
                {
                    video: false,
                    size: [],
                    src: "/projects/ChronoStrike/Explosion.png",
                    alt: "Screenshot 1",
                },
                {
                    video: false,
                    size: [],
                    src: "/projects/ChronoStrike/Corridor.png",
                    alt: "Screenshot 1",
                },
                {
                    video: false,
                    size: [],
                    src: "/projects/ChronoStrike/Blue.png",
                    alt: "Screenshot 1",
                },
                
            ]}/>
        </section>
        <section className='aboutArtwork'>
            <DescriptionCard addButton={true} buttonText="Play" buttonLink="https://nilpotent.itch.io/chronostrike" addSocials={false} imageSource="/projects/ChronoStrike/CoverArt.png" imageSize={["3840px", "2160px"]} imageRounded={false} alignCenter={true} heading="ChronoStrike" tagline='February 2023' text={
                <>
                    <p>
                        Explore procedurally generated environments with unique variations and layouts. 
                        Similar to a gungame, you get kills to switch to better weapons. 
                        Earn as high of a score you can. Good luck :D
                    </p>
                    <p>Developed in a week for a game jam, and then remastered the game in a month.</p>
                </>
            }/>
        </section>
    </>
}