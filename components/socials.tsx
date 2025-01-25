'use client'

import '@/components/socials.scss'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Socials({ size, width: containerWidth } : { size : number, width : number }) {
    return (
        <div className='socials' style={{'width': containerWidth}}>
            <motion.a
                href="https://github.com/nilpotent7/" target="_blank"
                whileHover={{ scale: 1.1}}
                whileTap={{ scale: 0.9 }}
            >
                <Image src='/icons/github.svg' alt='github' width={size * 0.9} height={size * 0.9}/>
            </motion.a>

            <motion.a
                href="https://x.com/nilpotent47" target="_blank"
                whileHover={{ scale: 1.1}}
                whileTap={{ scale: 0.9 }}
            >
                <Image src='/icons/x.svg' alt='x' width={size * 0.8} height={size * 0.8}/>
            </motion.a>

            <motion.a
                href="https://www.instagram.com/nilpotent7" target="_blank"
                whileHover={{ scale: 1.1}}
                whileTap={{ scale: 0.9 }}
            >
                <Image src='/icons/instagram.svg' alt='instagram' width={size * 0.85} height={size * 0.85}/>
            </motion.a>
                
            <motion.a
                href="https://nilpotent.itch.io/" target="_blank"
                whileHover={{ scale: 1.1}}
                whileTap={{ scale: 0.9 }}
            >
                <Image src='/icons/itchio.svg' alt='itch' width={size * 0.9} height={size * 0.9}/>
            </motion.a>

      </div>
    );
};

