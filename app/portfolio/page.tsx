import '@/app/portfolio/page.scss'
import ScrollToTop from '@/components/scrollToTop'
import Link from "next/link"

export default function RaffleCaseStudy() {
    return <>
        <section className='portfolio'>
            <h1>Portfolio</h1>

            <section className='projectType'>
                <h1>Games</h1>

                <div className="projectTypeGrid">
                    {/* <Link href='' className='projectCard' style={{backgroundImage: "url('projects/TheJuicer2.png')"}}>
                        <div className="cardOverlay">
                            <h2>The Juicer 2</h2>
                            <p>3D Shooter with stylized graphics & arcade gameplay</p>
                        </div>
                    </Link>

                    <Link href='' className='projectCard' style={{backgroundImage: "url('projects/GummyJump.png')"}}>
                        <div className="cardOverlay">
                            <h2>Gummy Jump 2</h2>
                            <p>2D Platformer with gritty graphics & precise movement</p>
                        </div>
                    </Link> */}

                    <Link href='' className='projectCard' style={{backgroundImage: "url('projects/ChronoStrike.png')"}}>
                        <div className="cardOverlay">
                            <h2>Chronostrike</h2>
                            <p>3D Endless Shooter made in 7 days</p>
                        </div>
                    </Link>

                    <Link href='' className='projectCard' style={{backgroundImage: "url('projects/GluedTogether.png')"}}>
                        <div className="cardOverlay">
                            <h2>Glued Together</h2>
                            <p>Top Down Puzzler made with a team in 7 days</p>
                        </div>
                    </Link>
                </div>
            </section>

            <section className='projectType'>
                <h1>Artworks</h1>

                <div className="projectTypeGrid">
                    <Link href='' className='projectCard' style={{backgroundImage: "url('projects/GasStation.png')"}}>
                        <div className="cardOverlay">
                            <h2>Gas Station</h2>
                            <p>The only gas station in the middle of vast wilderness</p>
                        </div>
                    </Link>

                    <Link href='' className='projectCard' style={{backgroundImage: "url('projects/HauntedSewer.png')"}}>
                        <div className="cardOverlay">
                            <h2>Haunted Sewer</h2>
                            <p>Abandonded sewerage rumoured to be connected with dark rituals</p>
                        </div>
                    </Link>
                </div>
            </section>

            <section className='projectType'>
                <h1>Programming</h1>

                <div className="projectTypeGrid">
                    <Link href='' className='projectCard' style={{backgroundImage: "url('projects/NeuralNetwork.png')"}}>
                        <div className="cardOverlay">
                            <h2>Machine Learning</h2>
                            <p>Neural Networks trained to classify handwritten digits & alphabets from typefaces</p>
                        </div>
                    </Link>

                    <Link href='' className='projectCard' style={{backgroundImage: "url('projects/Raytracer.png')"}}>
                        <div className="cardOverlay">
                            <h2>Raytracing</h2>
                            <p>Raytracer written as ComputeShader in Unity</p>
                        </div>
                    </Link>
                </div>
            </section>
        </section>
        <ScrollToTop />
    </>
}
