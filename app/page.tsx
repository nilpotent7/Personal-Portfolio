import '@/app/page.scss'
import Image from 'next/image'
import Socials from '@/components/socials'
import OpenButton from '@/components/openButton'

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
                        <Image className='longIntroAvatar' src='/Avatar.jpg' alt='Avatar' width={363} height={321}/>
                        <div className='longIntroSocials'><Socials size={50} width={300}/></div>
                    </div>
                    <div className="longIntroDescription">
                        <div className="longIntroText">
                            <h1 className='longIntroTitle'>Behroz Khan</h1>
                            <p className='longIntroTitle'>Hello :D<br/>I'm Behroz K. aka Nilpotent</p>
                            <p>I'm a passionate self-taught Game Designer & Programmer with a deep interest in creating engaging & memorable experiences. I have also worked with <b>neural networks</b>, <b>rendering algorithms</b>, <b>GPU Compute Shaders</b>, <b>sentimental analysis</b>, <b>networking</b>, etc.</p>
                            <p>I'm currently a student and started game development at the age of 9. Over the past eight years, I've explored various aspects of game development, as well as working on various aspects of advanced computer science. This has allowed me to develop not only technical skills but also creativity & problem-solving abilities that I bring to every project I undertake!</p>
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