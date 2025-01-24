'use client'

import '@/components/collage.scss'
import Image from 'next/image'
import React, {useEffect, useRef, useState} from 'react';

const images = [
    { src: '/collage/delivery.png', width: 848, height: 1594, aspectRatio: 848 / 1594 },
    { src: '/collage/Footer.png', width: 5320, height: 3328, aspectRatio: 5320 / 3328 },
    { src: '/collage/home.png', width: 6048, height: 4216, aspectRatio: 6048 / 4216 },
    { src: '/collage/login.png', width: 848, height: 1594, aspectRatio: 848 / 1594 },
    { src: '/collage/notifications.png', width: 848, height: 1594, aspectRatio: 848 / 1594 },
    { src: '/collage/profile.png', width: 848, height: 1594, aspectRatio: 848 / 1594 },
    { src: '/collage/raffleCard2.png', width: 1788, height: 2276, aspectRatio: 1788 / 2276 },
    { src: '/collage/raffleCard.png', width: 1788, height: 2276, aspectRatio: 1788 / 2276 },
    { src: '/collage/Section.png', width: 4236, height: 2664, aspectRatio: 4236 / 2664 },
    { src: '/collage/Section2.png', width: 4232, height: 2176, aspectRatio: 4232 / 2176 },
    { src: '/collage/Section3.png', width: 4232, height: 1660, aspectRatio: 4232 / 1660 },
    { src: '/collage/signup.png', width: 848, height: 1594, aspectRatio: 848 / 1594 },
];
export default function Collage() {
    const [collageHeight, setCollageHeight] = useState(0);
    const collage = useRef(null);

    useEffect(() => {
        if (collage.current) {
            const {clientHeight: height} = collage.current;
            setCollageHeight(height);
            console.log('Div height:', height);
        }
    }, []);

    const totalAspectRatio = images.reduce((sum, image) => sum + image.aspectRatio, 0);

    const containerWidth = 1000; // Set the desired container width
    const columnWidth = containerWidth / totalAspectRatio;
    const numRows = Math.ceil(images.length / columnWidth);

    const gridTemplateRows = `repeat(${numRows}, 1fr)`;

    return (<>
        <div ref={collage} className="collage" style={{ gridTemplateRows }}>
            {images.map((image, index) => (
                <Image
                    key={index}
                    src={image.src}
                    alt=""
                    style={{ gridColumn: `span ${Math.ceil(image.width / 2500)}`, gridRow: `span ${Math.ceil(image.height / 1000)}` }}
                    height={image.height}
                    width={image.width}
                />
            ))}
        </div>
        <div className='overlay'><div style={{height: `${collageHeight}px`, top: `-${collageHeight}px` }}></div></div>
    </>
    );
};

