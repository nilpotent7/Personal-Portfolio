'use client'

import '@/app/portfolio/page.scss'
import ScrollToTop from '@/components/scrollToTop'
import Link from "next/link"
import Image from 'next/image'
import { useEffect } from "react";


export default function PortfolioPage() {
    useEffect(() => {
      if (typeof window !== "undefined") {
        const urlParams = new URLSearchParams(window.location.search);
        const hookParam = urlParams.get("hook");
  
        if (hookParam) {
          const section = document.getElementById(hookParam);
          if (section) {
            section.scrollIntoView({ behavior: "smooth", block: 'center' });
          }
        }
      }
    }, []);


    return <>
        <section className='portfolio'>
            <h1>Portfolio</h1>

            <section className='projectType' id='games'>
                <h1>Games</h1>

                <div className="projectTypeGrid">
                    <Link href='/projects/the-juicer' className='projectCard'>
                        <Image src='/projects/TheJuicer2.jpg' alt='TheJuicer2 Thumbnail' fill/>
                        <div className="cardOverlay">
                            <h2>The Juicer 2</h2>
                            <p>3D Shooter with stylized graphics & arcade gameplay</p>
                        </div>
                    </Link>

                    <Link href='/projects/gummy-jump' className='projectCard'>
                        <Image src='/projects/GummyJump.jpg' alt='GummyJump Thumbnail' fill/>
                        <div className="cardOverlay">
                            <h2>Gummy Jump 2</h2>
                            <p>2D Platformer with gritty graphics & precise movement</p>
                        </div>
                    </Link>

                    <Link href='/projects/chronostrike' className='projectCard'>
                        <Image src='/projects/ChronoStrike.jpg' alt='ChronoStrike Thumbnail' fill/>
                        <div className="cardOverlay">
                            <h2>Chronostrike</h2>
                            <p>3D Endless Shooter made in 7 days</p>
                        </div>
                    </Link>

                    <Link href='/projects/glued-together' className='projectCard'>
                        <Image src='/projects/GluedTogether.jpg' alt='GluedTogether Thumbnail' fill/>
                        <div className="cardOverlay">
                            <h2>Glued Together</h2>
                            <p>Top Down Puzzler made with a team in 7 days</p>
                        </div>
                    </Link>
                </div>
            </section>

            <section className='projectType' id='artworks'>
                <h1>Artworks</h1>

                <div className="projectTypeGrid">
                    <Link href='/projects/gas-station' className='projectCard'>
                        <Image src='/projects/GasStation.jpg' alt='GasStation Artwork' fill/>
                        <div className="cardOverlay">
                            <h2>Gas Station</h2>
                            <p>The only gas station in the middle of vast wilderness</p>
                        </div>
                    </Link>

                    <Link href='/projects/haunted-sewer' className='projectCard'>
                        <Image src='/projects/HauntedSewer.jpg' alt='HauntedSewer Artwork' fill/>
                        <div className="cardOverlay">
                            <h2>Haunted Sewer</h2>
                            <p>Abandonded sewerage rumoured to be connected with dark rituals</p>
                        </div>
                    </Link>

                    <Link href='/projects/ringworld' className='projectCard'>
                        <Image src='/projects/RingWorld.jpg' alt='RingWorld Artwork' fill/>
                        <div className="cardOverlay">
                            <h2>RingWorld</h2>
                            <p>An alien world on the surface of an unexplainable ring structure</p>
                        </div>
                    </Link>
                </div>
            </section>

            <section className='projectType' id='programming'>
                <h1>Programming</h1>

                <div className="projectTypeGrid">
                    <Link href='/articles/neural-networks' className='projectCard'>
                        <Image src='/projects/NeuralNetwork.jpg' alt='NeuralNetwork Thumbnail' fill/>
                        <div className="cardOverlay">
                            <h2>Machine Learning</h2>
                            <p>Neural Networks trained to classify handwritten digits & alphabets from typefaces</p>
                        </div>
                    </Link>

                    <Link href='/articles/raytracing' className='projectCard'>
                        <Image src='/projects/Raytracer.jpg' alt='Raytracer Thumbnail' fill/>
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
