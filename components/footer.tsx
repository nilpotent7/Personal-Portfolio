'use client'

import '@/components/footer.scss'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Footer() {
    const iconSize: number  = 30;
    return <>
        <div className='footer'>
            <div className='socials'>
                <motion.a
                    href="https://github.com/CaptainUnknown/" target="_blank"
                    whileHover={{ scale: 1.1}}
                    whileTap={{ scale: 0.9 }}
                >
                    <Image src='/icons/github.svg' alt='github' width={iconSize} height={iconSize}/>
                </motion.a>
                <motion.a
                    href="https://twitter.com/CaptainUnknown5" target="_blank"
                    whileHover={{ scale: 1.1}}
                    whileTap={{ scale: 0.9 }}
                >
                    <Image src='/icons/twitter.svg' alt='twitter' width={iconSize} height={iconSize}/>
                </motion.a>
                <motion.a
                    href="mailto:captainunknown7@gmail.com"
                    whileHover={{ scale: 1.1}}
                    whileTap={{ scale: 0.9 }}
                >
                    <Image src='/icons/mail.svg' alt='email' width={iconSize} height={iconSize}/>
                </motion.a>
            </div>
            <div className='copyrightDisclaimer'>
                <p>Copyright © 2023 Shehroz K. All Rights Reserved.</p>
            </div>
        </div>
    </>
}
