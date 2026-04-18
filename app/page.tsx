import '@/app/page.scss'
import OpenButton from '@/components/openButton'
import Link from "next/link"
import Image from 'next/image'
import DescriptionCardCustom from '@/components/DescriptionCardCustom'

export default function Home() {

    return <>
        <section className='intro' id='hero'>
            <div className="introImage"></div>
            <div className='introContent'>
                <h1>Behroz Khan</h1>
                <p>Software Engineer | Game Developer</p>
            </div>
        </section>

        <section className='longIntro'>
            <DescriptionCardCustom
                rightContent={
                    <>
                        <div className="descriptionCardMainText">

                            <h1>Behroz Khan</h1>
                            <h3 style={{ marginBottom: '32px' }}>aka Nilpotent</h3>
                            <p>
                                I'm a <b>Software Engineer</b> and <b>Game Developer</b>,
                                with 6 years of experience delivering end-to-end software solutions & systems. <br />
                                I'm now expanding into <b>Artificial Inteligence</b>.
                            </p>

                            <p style={{ marginBottom: "6px" }}>
                                Over the past 6 years, I've developed numerous production-grade software solutions, and successfully released 7 video game titles.
                            </p>
                            <p>
                                Things I've worked on:
                            </p>
                            <ul style={{ marginLeft: "24px" }}>
                                <li>
                                    Neural Networks & Machine Learning
                                </li>
                                <li>
                                    Advanced Analytical Tools (including NLP and Sentiment analysis),
                                </li>
                                <li>
                                    High Performance Rendering Algorithms (Raytracing & Raymarching),
                                </li>
                                <li>
                                    GPU-accelerated Parallel Computing tasks
                                </li>
                                <li>
                                    Web Apps & Native Desktop Apps
                                </li>
                                <li>
                                    Web Automation systems, integrated with external webhooks
                                </li>
                            </ul>
                        </div>
                        <div className="descriptionCardButton">
                            <OpenButton title="View Portfolio" href="/portfolio" arrowSpace={20} />
                        </div>
                    </>
                }

                leftContent={
                    <>
                        <img className='descriptionCardImage' src="/Avatar.jpg" alt='Avatar'
                            style={{
                                maxWidth: "400px",
                                maxHeight: "350px",
                                border: "1px solid rgb(255 255 255 / 5%)",
                                borderRadius: "1rem",
                                marginBottom: "12px"
                            }}
                        />


                        <div className='descriptionCardMainText'>
                            <Image unoptimized width={390} height={65} src="https://skillicons.dev/icons?i=py,cpp,c,cs,ts,js,java" alt="Languages" />
                            <hr style={{ backgroundColor: "#404040", border: "0", height: "1px", marginTop: "3px", marginBottom: "3px" }} />
                            <Image unoptimized width={390} height={65} src="https://skillicons.dev/icons?i=unity,unreal,visualstudio,blender,github,git,linux" alt="Tools" />
                        </div>
                    </>
                }
            />
        </section>

        <section className='portfolio'>
            <div className='portfolioHeading'>
                <h1>Portfolio</h1>
            </div>

            <div className="portfolioProjects">
                <Link href='/geodyssey' className='projectCard'>
                    <Image src='/projects/Geodyssey/SquareCapsuleHighRes.png' alt='Geodyssey Thumbnail' fill />
                    <div className="cardOverlay">
                        <h2>Geodyssey</h2>
                        <p>A perplexing Non-Euclidean 3D experience</p>
                    </div>
                </Link>

                <Link href='/projects/themyth' className='projectCard'>
                    <Image src='/projects/TheMyth.png' alt='TheMyth Thumbnail' fill/>
                    <div className="cardOverlay">
                        <h2>TheMyth</h2>
                        <p>Unravel the mysteries of an abandoned World War 2 Ship</p>
                    </div>
                </Link>
            </div>

            <div className="portfolioViewAll">
                <OpenButton title='View all' href='portfolio' arrowSpace={20} />
            </div>
        </section>

    </>
}