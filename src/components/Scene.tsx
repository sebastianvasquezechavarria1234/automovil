import { type MutableRefObject } from 'react'
import ModelContainer from './ModelContainer'
import CameraController from './CameraController'
import Effects from './Effects'
import { Environment, ContactShadows } from '@react-three/drei'

interface SceneProps {
  progressRef: MutableRefObject<number>
}

function SceneLights() {
  return (
    <>
      <ambientLight intensity={0.2} color="#404066" />
      <directionalLight
        position={[8, 10, 6]}
        intensity={2.5}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0001}
      />
      <directionalLight
        position={[-6, 4, -4]}
        intensity={0.8}
        color="#8888ff"
      />
      <directionalLight
        position={[0, -2, 5]}
        intensity={0.3}
        color="#ff88aa"
      />
      <pointLight position={[0, 3, 2]} intensity={0.5} color="#60a5fa" />
    </>
  )
}

export default function Scene({ progressRef }: SceneProps) {
  return (
    <>
      <SceneLights />
      <ModelContainer progressRef={progressRef} />
      <ContactShadows
        position={[0, -1.2, 0]}
        opacity={0.6}
        scale={12}
        blur={3}
        far={5}
        color="#000"
      />
      <Environment preset="city" />
      <CameraController progressRef={progressRef} />
      <Effects />
    </>
  )
}
