import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { Html, useProgress } from '@react-three/drei'
import ModelViewer from './components/ModelViewer'

function Loader() {
  const { progress } = useProgress()
  return (
    <Html center>
      <div className="text-xl text-gray-600 font-mono">
        {progress.toFixed(0)}% cargado
      </div>
    </Html>
  )
}

function App() {
  return (
    <div className="w-full h-screen bg-gray-100">
      <Suspense fallback={<Loader />}>
        <Canvas
          camera={{ position: [0, 2, 5], fov: 50 }}
          gl={{ antialias: true }}
        >
          <ModelViewer modelPath="/models/LittlestTokyo.glb" />
        </Canvas>
      </Suspense>
    </div>
  )
}

export default App
