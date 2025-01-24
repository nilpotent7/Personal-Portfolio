'use client'

import '@/components/background.scss'
import React, {useEffect, useState} from 'react';

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
function randomString(length : number)
{
    let string = "";
    for(let i = 0; i < length; i++)
        string += chars[Math.floor(Math.random() * chars.length)];
    return string;
}

function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: 0,
      height: 0,
    });
  
    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);

    }, []);
    return windowSize;
}



export default function Background() {
    const size = useWindowSize();
    const [text, setText] = useState(randomString(size.height * size.width * 0.01));
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event : MouseEvent) => {
          const { clientX, clientY } = event;
          setMousePosition({ x: clientX, y: clientY });
        };
    
        window.addEventListener("mousemove", handleMouseMove);
    
        return () => {
          window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    const handleMouseMove = () => setText(randomString(size.height * size.width * 0.01))
    
    return (
        <div className="background" onMouseMove={handleMouseMove}
            style={{
                WebkitMaskImage: `radial-gradient(circle 500px at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,0,0,0.1), rgba(0,0,0,0.01))`,
                maskImage: `radial-gradient(circle 500px at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,0,0,0.1), rgba(0,0,0,0.01))`
            }}
        >
            {text}
        </div>
    );
};

