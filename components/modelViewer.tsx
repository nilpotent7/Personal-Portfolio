"use client"

import { useEffect, useState, useRef } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { useGLTF } from "@react-three/drei"
import * as THREE from "three"
import "./modelViewer.scss"

function GlobalLighting() {
  return (
    <>
      <directionalLight
        position={[10, 10, 5]}
        intensity={0.8}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />

      <directionalLight position={[-10, -5, 10]} intensity={0.5} color="#e1e1ff" />
    </>
  )
}

function SimpleOrbitControls() {
  const { camera, gl } = useThree()
  const [isDragging, setIsDragging] = useState(false)
  const previousMousePosition = useRef({ x: 0, y: 0 })
  const autoRotate = useRef(false)

  useFrame(() => {
    if (autoRotate.current && !isDragging) {
      camera.position.applyAxisAngle(new THREE.Vector3(0, 1, 0), 0.005)
      camera.lookAt(0, 0, 0)
    }
  })

  useEffect(() => {
    const canvas = gl.domElement

    const onMouseDown = (e : any) => {
      setIsDragging(true)
      autoRotate.current = false
      previousMousePosition.current = { x: e.clientX, y: e.clientY }
    }

    const onMouseMove = (e : any) => {
      if (isDragging) {
        const deltaMove = {
          x: e.clientX - previousMousePosition.current.x,
          y: e.clientY - previousMousePosition.current.y,
        }

        const rotationSpeed = 0.01

        camera.position.applyAxisAngle(new THREE.Vector3(0, 1, 0), -deltaMove.x * rotationSpeed)
        const rightVector = new THREE.Vector3(1, 0, 0).applyQuaternion(camera.quaternion)
        camera.position.applyAxisAngle(rightVector, -deltaMove.y * rotationSpeed)

        camera.lookAt(0, 0, 0)
        previousMousePosition.current = { x: e.clientX, y: e.clientY }
      }
    }

    const onMouseUp = () => {
      setIsDragging(false)
    }

    canvas.addEventListener("mousedown", onMouseDown)
    window.addEventListener("mousemove", onMouseMove)
    window.addEventListener("mouseup", onMouseUp)
    

    return () => {
      canvas.removeEventListener("mousedown", onMouseDown)
      window.removeEventListener("mousemove", onMouseMove)
      window.removeEventListener("mouseup", onMouseUp)
    }
  }, [camera, gl, isDragging])

  return null
}

function Model() {
  const { scene } = useGLTF("/3d/StateSpace.glb")

  useEffect(() => {
    scene.position.set(0, 0, 0)
    scene.scale.set(0.2, -0.2, 0.2)
    

    // Make all materials double-sided
    scene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
            if (child.material) {
                if (Array.isArray(child.material))
                    child.material.forEach((material) => {
                        material.side = THREE.DoubleSide
                    });
                    
                else
                    child.material.side = THREE.DoubleSide
            }
        }
    })
  }, [scene])

  return <primitive object={scene} />
}

export default function ModelViewer() {
  const [showHint, setShowHint] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const resetTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }
    setShowHint(false)
    timerRef.current = setTimeout(() => {
      setShowHint(true)
    }, 5000)
  }

  useEffect(() => {
    // Initial timer setup
    resetTimer()

    // Add event listeners for user interaction
    const handleInteraction = () => resetTimer()
    window.addEventListener("mousemove", handleInteraction)

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
      window.removeEventListener("mousemove", handleInteraction)
    }
  }, [])

  return (
    <div className="model-viewer-container">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{
          preserveDrawingBuffer: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.2,
        }}
        onPointerDown={resetTimer}
      >
        <GlobalLighting />
        <Model />
        <SimpleOrbitControls />
      </Canvas>
      {showHint && <div className="rotation-hint">Drag to rotate</div>}
    </div>
  )
}

