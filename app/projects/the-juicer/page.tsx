import '@/app/projects/gas-station/page.scss'
import { Carousel } from '@/components/carousel'
import DescriptionCard from '@/components/DescriptionCard'

export const metadata = {
    metadataBase: new URL("https://nilpotent.vercel.app"),
    title: 'TheJuicer | Behroz Khan',
    description: 'TheJuicer2 levels showcase designed by Behroz Khan',
    openGraph: {
        title: 'TheJuicer | Behroz Khan',
        description: 'TheJuicer2 levels showcase designed by Behroz Khan',
        type: 'website',
        images: [
            {
                url: '/projects/TheJuicer/CoverArt.jpg',
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
                    src: "/projects/TheJuicer/Screenshot1.jpg",
                    alt: "In-game Screenshot",
                },
                {
                    type: 0,
                    size: [],
                    src: "/projects/TheJuicer/Screenshot2.jpg",
                    alt: "In-game Screenshot",
                },
                {
                    type: 0,
                    size: [],
                    src: "/projects/TheJuicer/Screenshot3.jpg",
                    alt: "In-game Screenshot",
                },
                {
                    type: 0,
                    size: [],
                    src: "/projects/TheJuicer/Screenshot4.jpg",
                    alt: "In-game Screenshot",
                },    
                {
                    type: 0,
                    size: [],
                    src: "/projects/TheJuicer/Screenshot5.jpg",
                    alt: "In-game Screenshot",
                },
                {
                    type: 0,
                    size: [],
                    src: "/projects/TheJuicer/Screenshot6.jpg",
                    alt: "In-game Screenshot",
                },
                {
                    type: 0,
                    size: [],
                    src: "/projects/TheJuicer/Screenshot7.jpg",
                    alt: "In-game Screenshot",
                },
                {
                    type: 0,
                    size: [],
                    src: "/projects/TheJuicer/Screenshot8.jpg",
                    alt: "In-game Screenshot",
                },
                {
                    type: 0,
                    size: [],
                    src: "/projects/TheJuicer/Screenshot9.jpg",
                    alt: "In-game Screenshot",
                },
            ]}/>
        </section>
        <section className='aboutArtwork'>
            <DescriptionCard addButton={true} buttonText="View All" buttonLink="/portfolio?hook=games" addSocials={false} imageSource="/projects/TheJuicer/Extra.jpg" imageSize={["3840px", "2160px"]} imageRounded={false} alignCenter={true} heading="The Juicer 2" tagline='November 2024' text={
                <>
                    <p>
                        3D Shooter with stylized graphics & arcade gameplay. 
                        Use weapons at your disposal to eliminate the horde of malicious fruitlings, and survive for as long as you can.
                        Scavange coins to upgrade weapons & powerups to even the odds.
                    </p>
                    <p>Designed & Optimized levels for the game</p>
                    <p>Freelance Project | Made in Unity engine</p>
                </>
            }/>
        </section>
    </>
}