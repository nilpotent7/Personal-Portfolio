import '@/app/omibio-case-study/page.scss'
import ScrollToTop from '@/components/scrollToTop'

export default function RaffleCaseStudy() {
    return <>
        <section className='omibioIntro'>
            <h1>A Web3 Music Aggregator</h1>
            <img src='/omibio.webp' alt='Omibio Screens' height={3188} width={2048} style={{aspectRatio: '3188/2048' }}/>
            <div className='introBox'>
                <p>Developing a Music Distribution Service that allows artists to mint their songs as on-chain trade-able tokens.</p>
            </div>
        </section>
        <div className='omibioCaseStudyWrapper'>
            <section>
                <h3 style={{marginTop: '0'}}>Omibio • 2023</h3>
                <p>
                    Omibio aims to empower artists by providing cost-free distribution services, enabling them to reach their full potential. Through Omibio, artists can presell their songs as NFT Shares, generating revenue for both the holders and the artists themselves. This approach allows artists to reward their true fans and participants while alleviating financial constraints.
                </p>
                <h3>THE PROBLEM</h3>
                <p>
                    Many artists struggle to enter the market due to challenges in distribution, royalty collection, and financial management. Exploitation by music labels is prevalent due to the unequal power dynamics between artists and labels. These obstacles significantly hinder artists&apos; ability to connect with their audience, receive fair compensation, and navigate the complexities of the music industry.
                </p>
                <h3>THE VISION</h3>
                <p>

                    Omibio aims to offer a seamless onboarding experience through its built-in wallet service, providing convenient on/off ramps for both artists and users. The platform will enable artists to mint their songs as NFTs and sell them as shares. Additionally, artists will have the ability to distribute royalties among participants and list the remaining shares on the market.
                </p>

                <div className='barrier'>
                    ⚠️ Work In Progress
                </div>
            </section>
        </div>
        <ScrollToTop />
    </>
}
