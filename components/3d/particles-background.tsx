"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import * as random from "maath/random"
import { useState, useRef, useCallback } from "react"
import { BufferGeometry, Float32BufferAttribute } from "three"

function Stars() {
  const ref = useRef<BufferGeometry>(null)
  
  const [positions] = useState(() => {
    const positions = new Float32Array(5000 * 3)
    for (let i = 0; i < positions.length; i += 3) {
      const radius = 1.5
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      
      positions[i] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i + 2] = radius * Math.cos(phi)
    }
    return positions
  })

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10
      ref.current.rotation.y -= delta / 15
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#fff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

export function ParticlesBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars />
      </Canvas>
    </div>
  )
}