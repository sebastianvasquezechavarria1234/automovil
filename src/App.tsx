import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import ModelViewer from './components/ModelViewer'

function App() {
  return (
    <div className="w-full h-screen bg-gray-100">
      <Suspense
        fallback={
          <div className="w-full h-full flex items-center justify-center text-2xl text-gray-600">
            Cargando modelo...
          </div>
        }
      >
        <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
          <ModelViewer modelPath="/models/LittlestTokyo.glb" />
        </Canvas>
      </Suspense>
    </div>
  )
}

export default App
