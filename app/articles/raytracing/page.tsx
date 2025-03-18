import '@/app/articles/raytracing/page.scss'
import ScrollToTop from '@/components/scrollToTop'
import Image from 'next/image'

export const metadata = {
    metadataBase: new URL("https://nilpotent.vercel.app"),
    title: 'Raytracing Case Study | Behroz Khan',
    description: 'A comprehensive case study into raytracing, rendering algorithm, GPU Compute, performance, and best practices.',
    openGraph: {
        title: 'Raytracing Case Study | Behroz Khan',
        description: 'A comprehensive case study into raytracing, rendering algorithm, GPU Compute, performance, and best practices.',
        type: 'website',
        images: [
            {
                url: '/CaseStudies/NeuralNetworks/CoverArt.png',
                width: 2048,
                height: 1080,
            },
        ],
    },
  }

export default function RaytracingCaseStudy() {
    return <>
        <section className='intro'>
            <h1>Raytracing</h1>
            <Image src='/CaseStudies/Raytracing/CoverArt.png' alt='Raytraced Artwork' height={3840} width={1750} style={{aspectRatio: '3840/1750' }}/>
            <div className='introBox'>
                <p>A RayTracer implementation in Unity ComputeShader</p>
            </div>
        </section>
        <div className='caseStudyWrapper'>
            <section>
                <h3 style={{marginTop: '3rem'}}>Rendering Techniques</h3>
                <p>
                    Over the 50 years of video gaming history, people have developed various ingenious techniques for visualizing their imaginary worlds. These techniques include rendering 2D lines & shapes, or rendering pre-rendered isometric sprites, or using linear algebra to render 3D geometry.
                    However, some of the less commonly used techniques include Raymarching & Raytracing. Despite being slow, these techniques have a lot more control. Only until recently has Raytracing picked up in popularity. 
                </p>

                <h5 style={{marginTop: '2rem'}}>May 2024</h5>
                <h3 style={{marginBottom: '0.5rem', marginTop: '0'}}>THE PROJECT</h3>
                <p>
                    I developed a Raytracer which performs Monte-Carlo approximation of light rays to render a beautiful & realistic depiction of a scene featuring accurate Global Illumination, Reflections, and Emission.
                    The Raytracer is implemented in Unity Engine with custom rendering pipeline using ComputeShader to perform calculations on the GPU.
                </p>

                <h3>THE ARTICLE</h3>
                <p>
                    With this article, I aim to showcase the capabilities of Raytracing and provide an introduction to the rendering algorithms, and provide a visualized explanation of the algorithms and techniques used.
                </p>

                <div className='barrier'>
                    ⚠️ Work In Progress
                </div>
            </section>
        </div>
        <ScrollToTop />
    </>
}