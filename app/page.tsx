import '@/app/page.scss'
import OpenButton from '@/components/openButton'
import DescriptionCard from '@/components/DescriptionCard'
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
            <DescriptionCard addButton={true} buttonText="View Portfolio" buttonLink="/portfolio" addSocials={true} imageSource="/Avatar.jpg" imageSize={["300px", "360px"]} imageRounded={true} alignCenter={false} heading="Behroz Khan" tagline='' text={
                <>
                    <p>Hello :D<br/>I&apos;m Behroz K. aka Nilpotent</p>
                    <p>I&apos;m a self-taught Game Developer & Programmer.</p>
                    <p>I&apos;m a student who began game development at the age of 9. Over the eight years, I&apos;ve worked with <b>Neural Networks</b>, <b>Sentimental Analysis</b>, <b>GPU Programming</b>, <b>Compute Shaders</b>, <b>Rendering Algorithms</b>, <b>Network Programming</b>, and more.</p>
                </>
            }/>
        </section>

        <section className='portfolio'>
            <div className='portfolioHeading'>
                <h1>Portfolio</h1>
            </div>

            <div className="portfolioProjects">
                <Link href='/projects/chronostrike' className='projectCard' style={{backgroundImage: "url('projects/ChronoStrike.png')"}}>
                    <div className="cardOverlay">
                        <h2>Chronostrike</h2>
                        <p>3D Endless Shooter made in 7 days</p>
                    </div>
                </Link>

                <Link href='/projects/glued-together' className='projectCardEnd' style={{backgroundImage: "url('projects/GluedTogether.png')"}}>
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