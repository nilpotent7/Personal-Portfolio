'use client'

import '@/components/socials.scss'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Socials({ size, width } : { size : number, width : number }) {
    return (
        <div className='socials' style={{width: width }}>
            <motion.a
                href="https://github.com/nilpotent7/" target="_blank"
                whileHover={{ scale: 1.1}}
                whileTap={{ scale: 0.9 }}
            >
                <div className='iconSVG'
                    style={{
                        width: (size * 0.9) + "px",
                        height: (size * 0.9) + "px",
                        WebkitMaskImage: "url('/icons/github.svg')",
                        maskImage: "url('/icons/github.svg')",
                    }}
                />
            </motion.a>

            <motion.a
                href="https://x.com/nilpotent47" target="_blank"
                whileHover={{ scale: 1.1}}
                whileTap={{ scale: 0.9 }}
            >
                <div className='iconSVG'
                    style={{
                        width: (size * 0.8) + "px",
                        height: (size * 0.8) + "px",
                        WebkitMaskImage: "url('/icons/x.svg')",
                        maskImage: "url('/icons/x.svg')",
                    }}
                />
            </motion.a>

            <motion.a
                href="https://www.instagram.com/nilpotent7" target="_blank"
                whileHover={{ scale: 1.1}}
                whileTap={{ scale: 0.9 }}
            >
                <div className='iconSVG'
                    style={{
                        width: (size * 0.85) + "px",
                        height: (size * 0.85) + "px",
                        WebkitMaskImage: "url('/icons/instagram.svg')",
                        maskImage: "url('/icons/instagram.svg')",
                    }}
                />
            </motion.a>
                
            <motion.a
                href="https://nilpotent.itch.io/" target="_blank"
                whileHover={{ scale: 1.1}}
                whileTap={{ scale: 0.9 }}
            >
                <div className='iconSVG'
                    style={{
                        width: (size * 0.9) + "px",
                        height: (size * 0.9) + "px",
                        WebkitMaskImage: "url('/icons/itchio.svg')",
                        maskImage: "url('/icons/itchio.svg')",
                    }}
                />
            </motion.a>

      </div>
    );
};

