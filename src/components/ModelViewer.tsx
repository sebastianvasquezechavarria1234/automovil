import { useRef } from 'react'
import { useGLTF, OrbitControls, Center, Environment, ContactShadows } from '@react-three/drei'
import { Group } from 'three'

interface ModelViewerProps {
  modelPath: string
}

function ModelViewer({ modelPath }: ModelViewerProps) {
  const groupRef = useRef<Group>(null)
  const { scene } = useGLTF(modelPath)

  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} />
      <directionalLight position={[-5, 3, -5]} intensity={0.5} />
      <Center>
        <primitive ref={groupRef} object={scene} scale={1} />
      </Center>
      <ContactShadows
        position={[0, -1, 0]}
        opacity={0.5}
        scale={10}
        blur={2}
        far={4}
      />
      <Environment preset="city" />
      <OrbitControls
        enablePan={true}
        enableZoom={true}
        minDistance={1}
        maxDistance={20}
      />
    </>
  )
}

export default ModelViewer
