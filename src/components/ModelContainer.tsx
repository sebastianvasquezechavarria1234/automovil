import { type MutableRefObject, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { Group } from 'three'

interface ModelContainerProps {
  progressRef: MutableRefObject<number>
}

export default function ModelContainer({ progressRef }: ModelContainerProps) {
  const groupRef = useRef<Group>(null)
  const smoothProgress = useRef(0)
  const { scene } = useGLTF('/models/LittlestTokyo.glb')

  useFrame((state, delta) => {
    if (!groupRef.current) return

    smoothProgress.current += (progressRef.current - smoothProgress.current) * Math.min(1, delta * 3)

    const t = state.clock.getElapsedTime()

    groupRef.current.position.y = Math.sin(t * 0.6) * 0.02
    groupRef.current.position.x = Math.sin(t * 0.2) * 0.01
    groupRef.current.rotation.y += 0.001 + smoothProgress.current * 0.003
    groupRef.current.rotation.x = Math.sin(t * 0.25) * 0.005
    groupRef.current.rotation.z = Math.sin(t * 0.15) * 0.003

    groupRef.current.scale.setScalar(0.03)
  })

  return <primitive ref={groupRef} object={scene} />
}
