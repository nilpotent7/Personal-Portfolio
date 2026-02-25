'use client'

import '@/components/footer.scss'
import Socials from '@/components/socials'

export default function Footer() {
    return <>
        <div className='footer'>
            <Socials size={30} width={250}/>
            <div className='copyrightDisclaimer'>
                <p>Copyright © 2025 Behroz K. All Rights Reserved.</p>
            </div>
        </div>
    </>
}
