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
                url: '/projects/RingWorld/Shot 2.jpg',
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
                    src: "/projects/RingWorld/Shot 1.jpg",
                    alt: "RingWorld Artwork Shot 1",
                },
                {
                    type: 0,
                    size: [],
                    src: "/projects/RingWorld/Shot 2.jpg",
                    alt: "RingWorld Artwork Shot 2",
                },
                {
                    type: 0,
                    size: [],
                    src: "/projects/RingWorld/Shot 3.jpg",
                    alt: "RingWorld Artwork Shot 3",
                },
                {
                    type: 0,
                    size: [],
                    src: "/projects/RingWorld/Shot 4.jpg",
                    alt: "RingWorld Artwork Shot 4",
                }
                
            ]}/>
        </section>
        <section className='aboutArtwork'>
            <DescriptionCard addButton={true} buttonText="View All" buttonLink="/portfolio?hook=artworks" addSocials={false} imageSource="/projects/RingWorld/Shot 4.jpg" imageSize={["1280px", "1000px"]} imageRounded={false} alignCenter={true} heading="RingWorld" tagline="June 2025" text={
                <>
                    <p>An alien world on the surface of an unexplainable ring structure</p>
                    <p>This is a complete remaster of a map from a game from 2001, Halo.<br/>See comparison below.</p>
                    <p>Developed in Unity HDRP with Quixel assets over a period of about a week</p>
                </>
            }/>
        </section>

        <section className='comparison'>
            <div className='comparison-item'>
                <ImageComparison
                    beforeImage="/projects/RingWorld/Shot 4 Original.jpg"
                    afterImage="/projects/RingWorld/Shot 4.jpg"
                    beforeAlt="Original Halo map"
                    afterAlt="Remastered RingWorld"
                    initialPosition={50}
                />
            </div>
            
            <div className='comparison-item'>
                <ImageComparison
                    beforeImage="/projects/RingWorld/Shot 1 Original.jpg"
                    afterImage="/projects/RingWorld/Shot 1.jpg"
                    beforeAlt="Original Halo map"
                    afterAlt="Remastered RingWorld"
                    initialPosition={50}
                />
            </div>

            <div className='comparison-item'>
                <ImageComparison
                    beforeImage="/projects/RingWorld/Shot 2 Original.jpg"
                    afterImage="/projects/RingWorld/Shot 2.jpg"
                    beforeAlt="Original Halo map"
                    afterAlt="Remastered RingWorld"
                    initialPosition={50}
                />
            </div>

            <div className='comparison-item'>
                <ImageComparison
                    beforeImage="/projects/RingWorld/Shot 3 Original.jpg"
                    afterImage="/projects/RingWorld/Shot 3.jpg"
                    beforeAlt="Original Halo map"
                    afterAlt="Remastered RingWorld"
                    initialPosition={50}
                />
            </div>
        </section>
    </>
}