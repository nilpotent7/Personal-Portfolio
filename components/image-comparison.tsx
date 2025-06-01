"use client"

import React, { useState, useRef, useCallback, useEffect } from "react"
import Image from "next/image"
import styles from "./image-comparison.module.scss"
import type { ImageComparisonProps } from "./image-comparison"

export default function ImageComparison({
  beforeImage,
  afterImage,
  beforeAlt = "Before image",
  afterAlt = "After image",
  initialPosition = 50,
  className = "",
}: ImageComparisonProps) {
  const [position, setPosition] = useState(initialPosition)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setPosition(percentage)
  }, [])

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault()
      setIsDragging(true)
      updatePosition(e.clientX)
    },
    [updatePosition],
  )

  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      e.preventDefault()
      setIsDragging(true)
      updatePosition(e.touches[0].clientX)
    },
    [updatePosition],
  )

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return
      updatePosition(e.clientX)
    },
    [isDragging, updatePosition],
  )

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!isDragging) return
      e.preventDefault()
      updatePosition(e.touches[0].clientX)
    },
    [isDragging, updatePosition],
  )

  const handleEnd = useCallback(() => {
    setIsDragging(false)
  }, [])

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    const step = e.shiftKey ? 10 : 1

    switch (e.key) {
      case "ArrowLeft":
        e.preventDefault()
        setPosition((prev) => Math.max(0, prev - step))
        break
      case "ArrowRight":
        e.preventDefault()
        setPosition((prev) => Math.min(100, prev + step))
        break
      case "Home":
        e.preventDefault()
        setPosition(0)
        break
      case "End":
        e.preventDefault()
        setPosition(100)
        break
    }
  }, [])

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", handleEnd)
      document.addEventListener("touchmove", handleTouchMove, { passive: false })
      document.addEventListener("touchend", handleEnd)

      return () => {
        document.removeEventListener("mousemove", handleMouseMove)
        document.removeEventListener("mouseup", handleEnd)
        document.removeEventListener("touchmove", handleTouchMove)
        document.removeEventListener("touchend", handleEnd)
      }
    }
  }, [isDragging, handleMouseMove, handleTouchMove, handleEnd])

  return (
    <div
      ref={containerRef}
      className={`${styles.container} ${className}`}
      style={{ "--position": `${position}%` } as React.CSSProperties}
    >
      <div className={styles.imageWrapper}>
        <img
          src={beforeImage || "/placeholder.svg"}
          alt={beforeAlt}
          className={styles.beforeImage}
          sizes="(max-width: 768px) 100vw, 800px"
        />
        <img
          src={afterImage || "/placeholder.svg"}
          alt={afterAlt}
          className={styles.afterImage}
          sizes="(max-width: 768px) 100vw, 800px"
        />

        <div className={`${styles.label} ${styles.beforeLabel}`}>Before</div>
        <div className={`${styles.label} ${styles.afterLabel}`}>After</div>

        <div
          className={styles.slider}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="slider"
          aria-label="Image comparison slider"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(position)}
          aria-valuetext={`${Math.round(position)}% after image visible`}
        />
      </div>
    </div>
  )
}