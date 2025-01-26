import '@/app/page.scss'
import Image from 'next/image'
import Socials from '@/components/socials'
import OpenButton from '@/components/openButton'

export const metadata = {
    title: 'Behroz Khan',
    description: 'Passionate Game Designer | Turning dreams into reality.',
    image: '/../public/Avatar.jpg'
}

export default function Home() {
    
    return <>
    <meta property="og:site_name" content="BehrozK"/>
    <meta property="og:title" content="Behroz Khan's Portfolio"/>
    <meta property="og:description" content="Passionate Game Designer | Turning dreams into reality." />

        <section className='intro' id='hero'>
            <div className="introImage"></div>
            <div className='introContent'>
                <h1>Behroz Khan</h1>
                <p>The Passionate Game Designer</p>
            </div>
        </section>

        <section className='longIntro'>
            <div className="longIntroCard" id='projects'>
                <div className='longIntroCardContent'>
                    <div className='longIntroMedia'>
                        <img className='longIntroAvatar' src='/Avatar.jpg' alt='Avatar' style={{width: '360px', height: '360px'}}/>
                        <div className='longIntroSocials'><Socials size={40} width={300} /></div>
                    </div>
                    <div className="longIntroDescription">
                        <div className="longIntroText">
                            <h1>Behroz Khan</h1>
                            <p>Hello :D<br/>I&apos;m Behroz K. aka Nilpotent</p>
                            <p>I&apos;m a self-taught Game Developer & Programmer and I&apos;ve worked with <b>Neural Networks</b>, <b>Sentimental Analysis</b>, <b>GPU Programming</b>, <b>Compute Shaders</b>, <b>Rendering Algorithms</b>, <b>Network Programming</b>, and more.</p>
                            <p>I&apos;m a student who began game development at the age of 9. Over the eight years, I&apos;ve acquired technical skills, creativity, and problem-solving through exploring game development &amp; advanced computer science.</p>
                        </div>
                        <div className="longIntroButton">
                            <OpenButton title='View Portfolio' href='' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}