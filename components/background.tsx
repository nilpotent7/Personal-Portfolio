'use client'

import '@/components/background.scss'
import React, {useEffect, useState} from 'react';
import { usePathname } from 'next/navigation'

const textUpdateFrameDelay = 5;
const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

function randomString(length : number, isArticle : boolean)
{
    if(isArticle) return "";
    let string = "";
    for(let i = 0; i < length; i++)
        string += chars[Math.floor(Math.random() * chars.length)] + " ";
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
  
    const isArticle = usePathname().startsWith('/articles');
    const isisSpecial = usePathname().startsWith('/articles/raytracing') || usePathname().startsWith('/geodyssey');
    const size = useWindowSize();
    const [frame, setFrame] = useState(0);
    const [text, setText] = useState(randomString(size.height * size.width * 0.01, isArticle || isisSpecial));
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        let targetX = window.innerWidth / 2;
        let targetY = window.innerHeight / 2;
        let currentX = targetX;
        let currentY = targetY;

        const easeInOut = (t : number) => t * t * (3 - 2 * t);

        const handleMouseMove = (event : MouseEvent) => {
          const { clientX, clientY } = event;

          targetX = clientX;
          targetY = clientY;
        };

        const updateMaskPosition = () => {
          const speed = 0.25;
          currentX += (targetX - currentX) * easeInOut(speed);
          currentY += (targetY - currentY) * easeInOut(speed);
          if((currentX - targetX) < 0.001) currentX = targetX;
          if((currentY - targetY) < 0.001) currentY = targetY;
          setMousePosition({ x: currentX, y: currentY });
          requestAnimationFrame(updateMaskPosition);
        }
        
        window.addEventListener("mousemove", handleMouseMove);
        updateMaskPosition();
    
        return () => {
          window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    const handleMouseMove = () => {
      setFrame(frame+1);
      
      if(frame < textUpdateFrameDelay) return;
      setFrame(0);
      setText(randomString(size.height * size.width * 0.01, isArticle));
    }
    
    return (
        <div className="background" 
            onMouseMove={handleMouseMove}
            
            style={
              isisSpecial ? {
                backgroundColor: 'white',
                WebkitMaskImage: `radial-gradient(circle 500px at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,0,0,0), rgba(0,0,0,0))`,
                maskImage: `radial-gradient(circle 500px at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,0,0,0), rgba(0,0,0,0))`,
              } : (
                isArticle ? {
                  backgroundColor: 'white',
                  WebkitMaskImage: `radial-gradient(circle 500px at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,0,0,0.1), rgba(0,0,0,0.035))`,
                  maskImage: `radial-gradient(circle 500px at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,0,0,0.1), rgba(0,0,0,0.035))`,
                } : {
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitMaskImage: `radial-gradient(circle 500px at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,0,0,0.35), rgba(0,0,0,0.035))`,
                  maskImage: `radial-gradient(circle 500px at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,0,0,0.35), rgba(0,0,0,0.035))`,
                }
              )
            }
        >
            {text}
        </div>
    );
};

