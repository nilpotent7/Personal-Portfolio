import '@/app/projects/gummy-jump/page.scss'
import { Carousel } from '@/components/carousel'
import DescriptionCard from '@/components/DescriptionCard'

export const metadata = {
    metadataBase: new URL("https://nilpotent.vercel.app"),
    title: 'GummyJump | Behroz Khan',
    description: '2D Precise Platformer game made by Behroz Khan',
    openGraph: {
        title: 'GummyJump | Behroz Khan',
        description: '2D Precise Platformer game made by Behroz Khan',
        type: 'website',
        images: [
            {
                url: '/projects/GummyJump/CoverArt.jpg',
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
                    src: "/projects/GummyJump/Screenshot1.jpg",
                    alt: "In-game Screenshot",
                },
                {
                    type: 0,
                    size: [],
                    src: "/projects/GummyJump/Screenshot2.jpg",
                    alt: "In-game Screenshot",
                },
                {
                    type: 0,
                    size: [],
                    src: "/projects/GummyJump/Screenshot3.jpg",
                    alt: "In-game Screenshot",
                },
                {
                    type: 0,
                    size: [],
                    src: "/projects/GummyJump/Screenshot4.jpg",
                    alt: "In-game Screenshot",
                },
                {
                    type: 0,
                    size: [],
                    src: "/projects/GummyJump/Screenshot5.jpg",
                    alt: "In-game Screenshot",
                },
                {
                    type: 0,
                    size: [],
                    src: "/projects/GummyJump/Screenshot6.jpg",
                    alt: "In-game Screenshot",
                },
                {
                    type: 0,
                    size: [],
                    src: "/projects/GummyJump/Screenshot7.jpg",
                    alt: "In-game Screenshot",
                },
                
            ]}/>
        </section>
        <section className='aboutArtwork'>
            <DescriptionCard addButton={true} buttonText="View All" buttonLink="/portfolio?hook=games" addSocials={false} imageSource="/projects/GummyJump/CoverArt.jpg" imageSize={["3840px", "2160px"]} imageRounded={false} alignCenter={true} heading="GummyJump" tagline='August 2024' text={
                <>
                    <p>
                        2D Platformer with gritty graphics & precise movement. 
                        Leap and dodge through hazardous environments, landing precise jumps, in an attempt to escape the ominous factory. 
                    </p>
                    <p>Freelance Project | Made in Unity engine</p>
                </>
            }/>
        </section>
    </>
}