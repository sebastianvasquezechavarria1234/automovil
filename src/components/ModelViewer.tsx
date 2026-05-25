import { useRef } from 'react'
import { useGLTF, OrbitControls } from '@react-three/drei'
import { Group } from 'three'

interface ModelViewerProps {
  modelPath: string
}

function ModelViewer({ modelPath }: ModelViewerProps) {
  const groupRef = useRef<Group>(null)
  const { scene } = useGLTF(modelPath)

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <primitive ref={groupRef} object={scene} scale={1} />
      <OrbitControls enablePan={true} enableZoom={true} />
    </>
  )
}

export default ModelViewer
