import '@/app/page.scss'
import Image from 'next/image'
import OpenButton from '@/components/openButton';
import Background from '@/components/background'

export const metadata = {
    title: 'Behroz Khan',
    description: 'Passionate Game Designer | Turning dreams into reality.',
    image: '/squiggle.png'
}

export default function Home() {
    return <>
    <meta property="og:site_name" content="BehrozK"/>
    <meta property="og:title" content="Behroz Khan's Portfolio"/>
    <meta property="og:description" content="Passionate Game Designer | Turning dreams into reality." />

    <Background/>

        <section className='intro' id='hero'>
            <div className="introImage"></div>
            <div className='introContent'>
                <h1>Behroz Khan</h1>
                <p>The Passionate Game Designer</p>
            </div>
        </section>

        <section className='post'>
            <div className='card' id='projects'>
                <div className='cardContent'>
                    <div className='description'>
                        <h3><a href="https://whoopdoop.com" target="_blank">Whoopdoop Labs</a></h3>
                        <h1>A Raffle System</h1>
                        <p> Designed & developed a cross chain raffle system for ERC-721 tokens, that facilitated over 100k ticket purchases. </p>
                        <OpenButton title='Read Case Study' href='raffle-case-study'/>
                    </div>
                    <Image className='splash' src='/raffleCard.webp' alt='Raffle Cards' width={2810/*2635*/} height={1600} style={{aspectRatio: '2810/1600' }}/>
                </div>
            </div>

            <div className='card'>
                <div className='cardContent'>
                    <div className='description'>
                        <h3><a href="https://omibio.netlify.app/" target="_blank">Omibio</a></h3>
                        <h1>A Web3 Music Aggregator</h1>
                        <p> ⚠️ WIP: Developed a Music Distribution Service that allows artists to mint their songs as on-chain trade-able tokens.</p>
                        <OpenButton title='Read Case Study' href='omibio-case-study' />
                    </div>
                    <Image className='omibio' src='/omibio.webp' alt='Omibio App Screens' width={3188/*2635*/} height={2048} style={{aspectRatio: '3188/2048'}} />
                </div>
            </div>

        </section>
    </>
}
