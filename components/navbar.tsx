'use client'
import '@/components/navbar.scss'

export default function Navbar() {
    return <>
        <nav>
            <ul>
                <li><a href='/'>Home</a></li>
                <li><a href='/portfolio'>Portfolio</a></li>
                <li><a href='https://github.com/nilpotent7'>GitHub</a></li>
            </ul>
        </nav>
    </>
}
