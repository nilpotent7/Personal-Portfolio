import '@/app/projects/gas-station/page.scss'
import { Carousel } from '@/components/carousel'
import DescriptionCard from '@/components/DescriptionCard'
import Link from 'next/link'

export default function GasStation() {
    return <>
        <section className='slideshow'>
            <Carousel slides={[
                {
                    video: false,
                    size: [],
                    src: "/projects/GluedTogether/Screenshot1.png",
                    alt: "Screenshot 1",
                },
                {
                    video: false,
                    size: [],
                    src: "/projects/GluedTogether/Screenshot2.png",
                    alt: "Screenshot 2",
                },
                {
                    video: false,
                    size: [],
                    src: "/projects/GluedTogether/Screenshot3.png",
                    alt: "Screenshot 3",
                },
                {
                    video: false,
                    size: [],
                    src: "/projects/GluedTogether/Screenshot4.png",
                    alt: "Screenshot 4",
                },
                {
                    video: false,
                    size: [],
                    src: "/projects/GluedTogether/Screenshot5.png",
                    alt: "Screenshot 5",
                },
                {
                    video: false,
                    size: [],
                    src: "/projects/GluedTogether/Screenshot6.png",
                    alt: "Screenshot 6",
                },
                
                
            ]}/>
        </section>
        <section className='aboutArtwork'>
            <DescriptionCard addButton={true} buttonText="Play" buttonLink="https://nilpotent.itch.io/glued-together" addSocials={false} imageSource="/projects/GluedTogether/CoverArt.png" imageSize={["1280px", "720px"]} imageRounded={false} alignCenter={true} heading="Glued Together" tagline='August 2022' text={
                <>
                    <p>
                    Avoid obstacles making sure the powerline is not interrupted in this puzzle game.<br/>Find strategic ways to get to the finish line.
                    </p>
                    <p>Developed in a week for a game jam, in a team of 4</p>
                    <p>
                        <Link style={{ color: 'var(--secondary-hover)', textDecoration: 'underline', marginRight: '1rem'}} href='https://ilyasdev.itch.io/'>IlyasDev</Link>
                        <Link style={{ color: 'var(--secondary-hover)', textDecoration: 'underline', marginRight: '1rem'}} href='https://astutos.itch.io/'>Astutos</Link>
                        <Link style={{ color: 'var(--secondary-hover)', textDecoration: 'underline', marginRight: '1rem'}} href='https://itch.io/profile/tizianmusic/'>TizianMusic</Link>
                        <Link style={{ color: 'var(--secondary-hover)', textDecoration: 'underline', marginRight: '0rem'}} href='https://nilpotent.itch.io/'>Nilpotent</Link>
                    </p>
                </>
            }/>
        </section>
    </>
}