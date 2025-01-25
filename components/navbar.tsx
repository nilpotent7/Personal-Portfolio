'use client'
import '@/components/navbar.scss'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

export default function Navbar() {
    const isHome: boolean = usePathname() === '/';

    const scrollToProjects = () => {
        const anchor = document.getElementById('projects');
        if (anchor) {
            window.scrollTo({
                top: anchor.offsetTop,
                behavior: 'smooth',
            });
        }
    };

    const scrollToHome = () => {
        const anchor = document.getElementById('hero');
        if (anchor) {
            window.scrollTo({
                top: anchor.offsetTop,
                behavior: 'smooth',
            });
        }
    };

    return <>
        <nav>
            {
                isHome ? <>
                    <ul>
                        <li><a onClick={scrollToHome}>Home</a></li>
                        <li><a onClick={scrollToProjects}>Projects</a></li>
                        <li><a href='mailto:invalidmail07@gmail.com'>Contact</a></li>
                    </ul>
                </> : <>
                    <motion.button
                        whileHover={{ scale: 1.2}}
                        whileTap={{ scale: 0.8 }}
                    >
                        <Link href="/">
                            <Image src="/icons/leftArrow.svg" alt="Go Back" height={25} width={25}/>
                        </Link>
                    </motion.button>
                </>
            }
        </nav>
    </>
}
