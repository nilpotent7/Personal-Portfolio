import '@/app/page.scss'
import Socials from '@/components/socials'
import OpenButton from '@/components/openButton'
import Link from "next/link"

export default function Home() {
    
    return <>
        <section className='intro' id='hero'>
            <div className="introImage"></div>
            <div className='introContent'>
                <h1>Behroz Khan</h1>
                <p>The Passionate Game Developer</p>
            </div>
        </section>

        <section className='longIntro'>
            <div className="longIntroCard" id='projects'>
                <div className='longIntroCardContent'>
                    <div className='longIntroMedia'>
                        <img className='longIntroAvatar' src='/Avatar.jpg' alt='Avatar'/>
                        <div className='longIntroSocials'><Socials size={40} width={300} /></div>
                    </div>
                    <div className="longIntroDescription">
                        <div className="longIntroText">
                            <h1>Behroz Khan</h1>
                            <p>Hello :D<br/>I&apos;m Behroz K. aka Nilpotent</p>
                            <p>I&apos;m a self-taught Game Developer & Programmer.</p>
                            <p>I&apos;m a student who began game development at the age of 9. Over the eight years, I&apos;ve worked with <b>Neural Networks</b>, <b>Sentimental Analysis</b>, <b>GPU Programming</b>, <b>Compute Shaders</b>, <b>Rendering Algorithms</b>, <b>Network Programming</b>, and more.</p>
                        </div>
                        <div className="longIntroButton">
                            <OpenButton title='View Portfolio' href='' arrowSpace={20}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className='portfolio'>
            <div className='portfolioHeading'>
                <h1>Portfolio</h1>
            </div>

            <div className="portfolioProjects">
                <Link href='' className='projectCard' style={{backgroundImage: "url('projects/ChronoStrike.png')"}}>
                    <div className="cardOverlay">
                        <h2>Chronostrike</h2>
                        <p>3D Endless Shooter made in 7 days</p>
                    </div>
                </Link>

                <Link href='' className='projectCardEnd' style={{backgroundImage: "url('projects/GluedTogether.png')"}}>
                    <div className="cardOverlay">
                        <h2>Glued Together</h2>
                        <p>Top Down Puzzler made with a team in 7 days</p>
                    </div>
                </Link>
            </div>

            <div className="portfolioViewAll">
                <OpenButton title='View all' href='portfolio' arrowSpace={20}/>
            </div>
        </section>
        
    </>
}