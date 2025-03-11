"use client"

import { useCallback, useEffect, useState, useRef } from "react"
import useEmblaCarousel from "embla-carousel-react"
import styles from "./carousel.module.scss"
import { motion } from 'framer-motion'

type CarouselSlide = {
  video: boolean
  size: Array<string>
  src: string
  alt: string
}

interface CarouselProps {
  slides: CarouselSlide[]
}

export const Carousel = ({ slides }: CarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    containScroll: "keepSnaps",
    skipSnaps: false,
  })

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [slidesLoaded, setSlidesLoaded] = useState<Record<number, boolean>>({})
  const imageRefs = useRef<(HTMLImageElement | null)[]>([])


  const onScroll = useCallback(() => {
    if (!emblaApi) return

    const scrollProgress = emblaApi.scrollProgress()
    const styles = emblaApi.scrollSnapList().map((scrollSnap) => {
      let diffToTarget = scrollSnap - scrollProgress

      if (diffToTarget < -0.5) diffToTarget += 1
      if (diffToTarget > 0.5) diffToTarget -= 1

      const parallaxFactor = 0.8

      return diffToTarget * (-1 * parallaxFactor) * 100
    })

    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    const initialLoadState: Record<number, boolean> = {}
    slides.forEach((_, index) => {
      initialLoadState[index] = false
    })
    setSlidesLoaded(initialLoadState)

    slides.forEach((slide, index) => {
      const img = new window.Image()
      img.src = slide.src
      img.onload = () => {
        setSlidesLoaded((prev) => ({
          ...prev,
          [index]: true,
        }))
      }
    })
  }, [slides])

  useEffect(() => {
    if (!emblaApi) return

    onScroll()
    emblaApi.on("scroll", onScroll)
    emblaApi.on("reInit", onScroll)
    emblaApi.on("slidesInView", onScroll)

    return () => {
      emblaApi.off("scroll", onScroll)
      emblaApi.off("reInit", onScroll)
      emblaApi.off("slidesInView", onScroll)
    }
  }, [emblaApi, onScroll])

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev()
    }
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext()
    }
  }, [emblaApi])

  return (
    <div className={styles.emblaWrapper}>
      <div className={styles.embla} ref={emblaRef}>
        <div className={styles.emblaContainer}>
          {slides.map((slide, index) => (
            <div
              className={styles.emblaSlide}
              key={index}
              data-active={index === selectedIndex}
              data-loading={!slidesLoaded[index]}
            >
              <div
                className={styles.emblaSlideInner}
              >
                <div className={styles.emblaSlideImgWrapper}>
                  {
                    !slide.video ?
                    <>
                      <img
                        ref={(el) => (imageRefs.current[index] = el)}
                        className={styles.emblaSlideImg}
                        src={slide.src || "/placeholder.svg"}
                        alt={slide.alt}
                        onLoad={() => {
                          setSlidesLoaded((prev) => ({
                            ...prev,
                            [index]: true,
                          }))
                        }}
                      />
                    </> : <>
                      <video controls className='video' width={slide.size[0]} height={slide.size[1]} loop playsInline>
                          <source src={slide.src} type="video/mp4" />
                          {slide.alt}
                      </video>
                    </>
                  }

                  {!slidesLoaded[index] && !slide.video && (
                    <div className={styles.emblaSlideLoader}>
                      <div className={styles.emblaSlideLoaderSpinner}></div>
                    </div>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      <motion.button
            className={`${styles.emblaButton} ${styles.emblaPrev}`} aria-label="Previous slide"
            whileHover={{ scale: 1.2}}
            whileTap={{ scale: 0.8 }}
            onClick={scrollPrev}
        >
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15 18L9 12L15 6"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.button>

      <motion.button
            className={`${styles.emblaButton} ${styles.emblaNext}`} aria-label="Next slide"
            whileHover={{ scale: 1.2}}
            whileTap={{ scale: 0.8 }}
            onClick={scrollNext}
        >
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9 6L15 12L9 18"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.button>
    </div>
  )
}

