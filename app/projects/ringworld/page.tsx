import '@/app/projects/ringworld/page.scss'
import { Carousel } from '@/components/carousel'
import DescriptionCard from '@/components/DescriptionCard'
import ImageComparison from '@/components/image-comparison'

export const metadata = {
    metadataBase: new URL("https://nilpotent.vercel.app"),
    title: 'Ringworld Artwork | Behroz Khan',
    description: 'Artwork made in Unity HDRP with Quixel Assets by Behroz Khan',
    openGraph: {
        title: 'Ringworld Artwork | Behroz Khan',
        description: 'Artwork made in Unity HDRP with Quixel Assets by Behroz Khan',
        type: 'website',
        images: [
            {
                url: '/projects/RingWorld/Shot 2.png',
                width: 3840,
                height: 2160,
            },
        ],
    },
  }

export default function RingWorld() {
    return <>
        <section className='slideshow'>
            <Carousel slides={[
                {
                    type: 0,
                    size: [],
                    src: "/projects/RingWorld/Shot 1.png",
                    alt: "RingWorld Artwork Shot 1",
                },
                {
                    type: 0,
                    size: [],
                    src: "/projects/RingWorld/Shot 2.png",
                    alt: "RingWorld Artwork Shot 2",
                },
                {
                    type: 0,
                    size: [],
                    src: "/projects/RingWorld/Shot 3.png",
                    alt: "RingWorld Artwork Shot 3",
                },
                {
                    type: 0,
                    size: [],
                    src: "/projects/RingWorld/Shot 4.png",
                    alt: "RingWorld Artwork Shot 4",
                }
                
            ]}/>
        </section>
        <section className='aboutArtwork'>
            <DescriptionCard addButton={true} buttonText="View All Artworks" buttonLink="/portfolio?hook=artworks" addSocials={false} imageSource="/projects/RingWorld/Shot 4.png" imageSize={["1280px", "1000px"]} imageRounded={false} alignCenter={true} heading="RingWorld" tagline="June 2025" text={
                <>
                    <p>An alien world on the surface of an unexplainable ring structure</p>
                    <p>This is a complete remaster of a map from 2001 game, Halo. See comparison below. <br/>Developed in Unity HDRP with Quixel assets over a period of about a week</p>
                </>
            }/>
        </section>

        <section className='comparison'>
            <div className='comparison-item'>
                <ImageComparison
                    beforeImage="/projects/RingWorld/Shot 4 Original.png"
                    afterImage="/projects/RingWorld/Shot 4.png"
                    beforeAlt="Original Halo map"
                    afterAlt="Remastered RingWorld"
                    initialPosition={50}
                />
            </div>
            
            <div className='comparison-item'>
                <ImageComparison
                    beforeImage="/projects/RingWorld/Shot 1 Original.png"
                    afterImage="/projects/RingWorld/Shot 1.png"
                    beforeAlt="Original Halo map"
                    afterAlt="Remastered RingWorld"
                    initialPosition={50}
                />
            </div>

            <div className='comparison-item'>
                <ImageComparison
                    beforeImage="/projects/RingWorld/Shot 2 Original.png"
                    afterImage="/projects/RingWorld/Shot 2.png"
                    beforeAlt="Original Halo map"
                    afterAlt="Remastered RingWorld"
                    initialPosition={50}
                />
            </div>

            <div className='comparison-item'>
                <ImageComparison
                    beforeImage="/projects/RingWorld/Shot 3 Original.png"
                    afterImage="/projects/RingWorld/Shot 3.png"
                    beforeAlt="Original Halo map"
                    afterAlt="Remastered RingWorld"
                    initialPosition={50}
                />
            </div>
        </section>
    </>
}