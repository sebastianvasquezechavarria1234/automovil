import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Scene from './components/Scene'
import { useScrollAnimation } from './animations/useScrollAnimation'
import HeroSection from './sections/HeroSection'
import ThreeJSSection from './sections/ThreeJSSection'
import ModelSection from './sections/ModelSection'
import GSApSection from './sections/GSApSection'
import LightingSection from './sections/LightingSection'
import FinalSection from './sections/FinalSection'

export default function App() {
  const { scrollProgress, containerRef } = useScrollAnimation()

  return (
    <div className="relative bg-[#0a0a0f]">
      <div className="fixed inset-0 z-0">
        <Canvas
          camera={{ position: [0, 2.5, 12], fov: 45 }}
          gl={{ antialias: true, toneMapping: 3, toneMappingExposure: 1.2 }}
          dpr={[1, 2]}
          shadows
        >
          <Suspense fallback={null}>
            <Scene progressRef={scrollProgress} />
          </Suspense>
        </Canvas>
      </div>

      <div
        ref={containerRef}
        className="relative z-10 pointer-events-none"
      >
        <div className="pointer-events-auto">
          <HeroSection />
        </div>
        <div className="pointer-events-auto">
          <ThreeJSSection />
        </div>
        <div className="pointer-events-auto">
          <ModelSection />
        </div>
        <div className="pointer-events-auto">
          <GSApSection />
        </div>
        <div className="pointer-events-auto">
          <LightingSection />
        </div>
        <div className="pointer-events-auto">
          <FinalSection />
        </div>
      </div>
    </div>
  )
}
