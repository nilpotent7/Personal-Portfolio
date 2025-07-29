'use client'

import '@/components/customButton.scss'
import Image from 'next/image'
import Link from "next/link"
import { motion } from 'framer-motion'

export default function CustomButton({ title, href, arrowSpace, border, primary, secondary, text }: { title: string, href: string, arrowSpace: number, border: number, primary: string, secondary: string, text: string }) {
    return <>
        <motion.div
            whileHover={{ scale: 1.05}}
            whileTap={{ scale: 0.95 }}
        >
            <Link href={href}>
                <button className='customButton'
                    style={{
                        ['--customButtonTextColor' as any]: text,
                        ['--customButtonPrimary' as any]: primary,
                        ['--customButtonSecondary' as any]: secondary,
                        border: border + 'px solid var(--customButtonSecondary)',
                    }}
                >{title}
                    <Image src='/icons/rightArrow.svg' alt='left arrow' width={25} height={25} 
                        style={{ marginLeft: arrowSpace + 'px', }}
                    />
                </button>
            </Link>
        </motion.div>
    </>
}
