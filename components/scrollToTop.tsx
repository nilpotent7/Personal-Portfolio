'use client'
import '@/components/scrollToTop.scss'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function ScrollToTop() {
    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <motion.button
            className='scrollToTop'
            whileHover={{ scale: 1.2}}
            whileTap={{ scale: 0.8 }}
            onClick={handleClick}
        >
            <Image src='/icons/angleUp.svg' alt='Scroll to Top' width={25} height={25} />
        </motion.button>
    );
};