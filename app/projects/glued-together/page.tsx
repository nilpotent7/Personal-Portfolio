import '@/app/projects/glued-together/page.scss'
import { Carousel } from '@/components/carousel'
import DescriptionCard from '@/components/DescriptionCard'
import Link from 'next/link'

export const metadata = {
    metadataBase: new URL("https://nilpotent.vercel.app"),
    title: 'Glued Together | Behroz Khan',
    description: '3D Topdown Puzzle game made by Behroz Khan',
    openGraph: {
        title: 'Glued Together | Behroz Khan',
        description: '3D Topdown Puzzle game made by Behroz Khan',
        type: 'website',
        images: [
            {
                url: '/projects/GluedTogether/CoverArt.jpg',
                width: 1280,
                height: 720,
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
                    src: "/projects/GluedTogether/Screenshot1.jpg",
                    alt: "In-game Screenshot",
                },
                {
                    type: 0,
                    size: [],
                    src: "/projects/GluedTogether/Screenshot2.jpg",
                    alt: "In-game Screenshot",
                },
                {
                    type: 0,
                    size: [],
                    src: "/projects/GluedTogether/Screenshot3.jpg",
                    alt: "In-game Screenshot",
                },
                {
                    type: 0,
                    size: [],
                    src: "/projects/GluedTogether/Screenshot4.jpg",
                    alt: "In-game Screenshot",
                },
                {
                    type: 0,
                    size: [],
                    src: "/projects/GluedTogether/Screenshot5.jpg",
                    alt: "In-game Screenshot",
                },
                {
                    type: 0,
                    size: [],
                    src: "/projects/GluedTogether/Screenshot6.jpg",
                    alt: "In-game Screenshot",
                },
                
                
            ]}/>
        </section>
        <section className='aboutArtwork'>
            <DescriptionCard addButton={true} buttonText="Play" buttonLink="https://nilpotent.itch.io/glued-together" addSocials={false} imageSource="/projects/GluedTogether/CoverArt.jpg" imageSize={["1280px", "1100px"]} imageRounded={false} alignCenter={true} heading="Glued Together" tagline='August 2022' text={
                <>
                    <p>
                    In this puzzle game, you have to avoid obstacles while making sure the powerline is not interrupted.<br/>Find strategic ways to get to the finish line.
                    </p>
                    <p>Developed in one week for a game jam</p>
                    <p>Developed by:<br/>
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