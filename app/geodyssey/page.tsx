import '@/app/geodyssey/page.scss'
import Link from "next/link"
import CustomButton from '@/components/customButton'

export const metadata = {
    metadataBase: new URL("https://nilpotent.vercel.app"),
    title: 'Geodyssey | Behroz Khan',
    description: 'Geodyssey is a mind-bending first-person adventure game that challenges your perception with confusing environments.',
    openGraph: {
        title: 'Geodyssey | Behroz Khan',
        description: 'Geodyssey is a mind-bending first-person adventure game that challenges your perception with confusing environments.',
        type: 'website',
        images: [
            {
                url: '/projects/Geodyssey/SquareCapsule.png',
                width: 512,
                height: 512,
            },
        ],
    },
  }


export default function Geodyssey() {
    return <>
        <section className='hero' id='hero'>
            <div className="heroBackground"></div>
            <div className='heroContent'>
                <img
                    src="/projects/Geodyssey/Logo.png"
                    alt="Geodyssey Logo"
                    className="heroImage"
                    sizes="(max-width: 768px) 100vw, 800px"
                />
            </div>
        </section>

        <section className='written'>
            <div className='sidebar'>
                <h2>Factsheet</h2>

                <h3>Official Game Title</h3>
                <p>Geodyssey</p>

                <h3>Developer</h3>
                <p>
                    Nilpotent
                </p>
                <p>
                    Based in Pakistan
                </p>
                <p>
                    Self-Published
                </p>

                <h3>Genre</h3>
                <p>Surreal / Adventure</p>

                <h3>Release Status</h3>
                <p><Link href='https://store.steampowered.com/app/3893550/Geodyssey_Demo/' style={{ color: "#FF8A00"}}>Playable Demo</Link></p>

                <h3>Platforms</h3>
                <p>PC</p>

                <h3>Number of Players</h3>
                <p>Single Player</p>

                <h3>Release Regions</h3>
                <p>Worldwide</p>

                <h3>Store</h3>
                <p><Link href='https://store.steampowered.com/app/3878850/Geodyssey/' style={{ color: "#FF8A00"}}>Available on Steam</Link></p>

                <h3>Features</h3>
                <ul>
                    <li>
                        Curved Geometries
                    </li>
                    <li>
                        Non-Euclidean World
                    </li>
                    <li>
                        Escher-like Architecture
                    </li>
                    <li>
                        Mind-Bending Puzzles
                    </li>
                    <li>
                        Surreal Ambience
                    </li>
                </ul>
            </div>


            <div className='mainContent'>

                <div className='description'>
                    <h2>Description</h2>
                    <p>
                        Geodyssey is a mind-bending surreal adventure game that challenges your perception with perplexing Escher-like environments. Explore spaces that defy logic, and experience a reality that cannot exist. A game that subverts expectations, and turns the familiar into something perplexing.
                    </p>
                    <p>
                        <b>Experience the perplexing impossible.</b>
                    </p>
                </div>

                <div className='headerCapsule'>
                    <img
                        src="/projects/Geodyssey/HeaderCapsule.png"
                        alt="Geodyssey Header Banner"
                    />
                </div>

                <iframe src="https://store.steampowered.com/widget/3878850/"
                    frameBorder="0"
                    width="646"
                    height="190"
                    style={{ colorScheme: 'light' }}
                />

                <iframe src="https://store.steampowered.com/widget/3893550/"
                    frameBorder="0"
                    width="646"
                    height="190"
                    style={{ colorScheme: 'light' }}
                />
            </div>
        </section>

        

        <section className='logoAssets'>
            <div className='heading'>
                <h1>Logos & Assets</h1>
                <CustomButton
                    title='Download' href='https://drive.google.com/drive/folders/13Cksi0ksSONSMej7cdsDQkAIdqnEJzLW?usp=sharing' arrowSpace={1}
                    border={2} primary='#FF8A00' secondary='#FF4E00' text='var(--text-color)'
                />
            </div>
            <div className='assets'>
                <img src='/projects/Geodyssey/Logo.png' alt='Geodyssey Logo'/>
                <img src='/projects/Geodyssey/Background.png' alt='Geodyssey Key Art'/>
            </div>
        </section>

        <section className='screenshotSection'>
            <div className='heading'>
                <h1>Screenshots</h1>
                <CustomButton
                    title='Download' href='https://drive.google.com/drive/folders/1fF2q_6kfuHWfIryI46nJ2ezCMsHnVdNF?usp=sharing' arrowSpace={1}
                    border={2} primary='#FF8A00' secondary='#FF4E00' text='var(--text-color)'
                />
            </div>
            <div className='screenshots'>
                <img
                    src="/projects/Geodyssey/Screenshot1.png"
                    alt="In-game Screenshot"
                />
                <img
                    src="/projects/Geodyssey/Screenshot6.png"
                    alt="In-game Screenshot"
                />
                <img
                    src="/projects/Geodyssey/Screenshot3.png"
                    alt="In-game Screenshot"
                />
                <img
                    src="/projects/Geodyssey/Screenshot4.png"
                    alt="In-game Screenshot"
                />
                <img
                    src="/projects/Geodyssey/Screenshot5.png"
                    alt="In-game Screenshot"
                />
                <img
                    src="/projects/Geodyssey/Screenshot2.png"
                    alt="In-game Screenshot"
                />
                <img
                    src="/projects/Geodyssey/Screenshot7.png"
                    alt="In-game Screenshot"
                />
                <img
                    src="/projects/Geodyssey/Screenshot8.png"
                    alt="In-game Screenshot"
                />
            </div>
        </section>

        <section className='license'>
            <div className='heading'>
                <h1>License</h1>
            </div>
            <div className='licenseText'>
                <p>All content on this page is licensed under <Link style={{ color: "#FF8A00"}} href='https://creativecommons.org/licenses/by/4.0/?ref=chooser-v1'>CC BY 4.0</Link></p>
                <p>You are free to copy, redistribute, remix, transform, or build upon the material for any purpose, even commercially.</p>
                <p>The licensor cannot revoke these freedoms as long as you follow the license terms.</p>
                <h4>Under the following terms:</h4>
                <p>You must give <Link style={{ color: "#FF8A00"}} href='https://creativecommons.org/licenses/by/4.0/?ref=chooser-v1#ref-appropriate-credit'>appropriate credit</Link> to this <Link style={{ color: "#FF8A00"}} href='https://nilpotent.vercel.app/geodyssey'>page</Link>.</p>
                <p>You may indicate if changes were made.</p>
                <p>You may do so in any reasonable manner.</p>
            </div>
        </section>
    </>
}