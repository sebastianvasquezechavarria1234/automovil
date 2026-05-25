import Section from './Section'

export default function ThreeJSSection() {
  return (
    <Section className="items-center">
      <div className="max-w-3xl ml-auto">
        <p className="section-number reveal-text">01 // THE FOUNDATION</p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 leading-tight reveal-text">
          Three.js
        </h2>
        <div className="glass-card glass-strong rounded-2xl p-8 md:p-10 mt-8 space-y-5">
          <p className="text-base md:text-lg text-white/70 leading-relaxed reveal-text">
            Three.js is the backbone of this experience — a JavaScript library
            that unlocks GPU-accelerated 3D graphics directly in the browser.
            Every polygon, every light ray, every shadow you see is calculated
            in real-time by the WebGL pipeline.
          </p>
          <p className="text-base md:text-lg text-white/50 leading-relaxed reveal-text">
            It provides the complete 3D engine: scene graph, camera system,
            PBR materials, physics-based lights, and a high-performance
            renderer. All running at 60 frames per second — in a web browser.
          </p>
        </div>
        <div className="flex gap-2 mt-6 reveal-text">
          {['WebGL', 'GPU', 'Real-time', 'Cross-browser'].map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/40"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Section>
  )
}
