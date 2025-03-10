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
                    <Link href='' className='projectCard' style={{backgroundImage: "url('projects/TheJuicer2.png')"}}>
                    </Link>

                    <Link href='' className='projectCard' style={{backgroundImage: "url('projects/GummyJump.png')"}}>
                    </Link>

                    <Link href='' className='projectCard' style={{backgroundImage: "url('projects/Chronostrike.png')"}}>
                    </Link>

                    <Link href='' className='projectCard' style={{backgroundImage: "url('projects/GluedTogether.png')"}}>
                    </Link>
                </div>
            </section>

            <section className='projectType'>
                <h1>Artworks</h1>

                <div className="projectTypeGrid">
                    <Link href='' className='projectCard' style={{backgroundImage: "url('projects/GasStation.png')"}}>
                    </Link>

                    <Link href='' className='projectCardEnd' style={{backgroundImage: "url('projects/HauntedSewer.png')"}}>
                    </Link>
                </div>
            </section>

            <section className='projectType'>
                <h1>Programming</h1>

                <div className="projectTypeGrid">
                    <Link href='' className='projectCard' style={{backgroundImage: "url('projects/GasStation.png')"}}>
                    </Link>

                    <Link href='' className='projectCardEnd' style={{backgroundImage: "url('projects/HauntedSewer.png')"}}>
                    </Link>
                </div>
            </section>
        </section>
        <ScrollToTop />
    </>
}
