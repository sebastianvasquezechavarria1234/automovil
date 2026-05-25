import { type MutableRefObject, useRef } from 'react'
import { useFrame, useThree, useLoader } from '@react-three/fiber'
import { GLTFLoader, KTX2Loader, MeshoptDecoder } from 'three-stdlib'
import { Group } from 'three'

interface ModelContainerProps {
  progressRef: MutableRefObject<number>
}

export default function ModelContainer({ progressRef }: ModelContainerProps) {
  const { gl } = useThree()
  const groupRef = useRef<Group>(null)
  const smoothProgress = useRef(0)

  const { scene } = useLoader(GLTFLoader, '/models/facecap.glb', (loader) => {
    const ktx2Loader = new KTX2Loader()
      .setTranscoderPath('/basis/')
      .detectSupport(gl)
    loader.setKTX2Loader(ktx2Loader)
    loader.setMeshoptDecoder(MeshoptDecoder())
  })

  useFrame((state, delta) => {
    if (!groupRef.current) return

    smoothProgress.current += (progressRef.current - smoothProgress.current) * Math.min(1, delta * 3)

    const t = state.clock.getElapsedTime()

    groupRef.current.position.y = Math.sin(t * 0.6) * 0.12
    groupRef.current.position.x = Math.sin(t * 0.2) * 0.05
    groupRef.current.rotation.y += 0.003 + smoothProgress.current * 0.008
    groupRef.current.rotation.x = Math.sin(t * 0.25) * 0.015
    groupRef.current.rotation.z = Math.sin(t * 0.15) * 0.008

    const scaleTarget = 1 + smoothProgress.current * 0.15
    groupRef.current.scale.setScalar(
      groupRef.current.scale.x + (scaleTarget - groupRef.current.scale.x) * 0.05
    )
  })

  return <primitive ref={groupRef} object={scene} />
}
