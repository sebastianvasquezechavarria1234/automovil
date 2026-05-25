import Section from './Section'

export default function ModelSection() {
  return (
    <Section className="items-center">
      <div className="max-w-3xl mr-auto">
        <p className="section-number reveal-text">02 // THE ASSET</p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 leading-tight reveal-text">
          GLB Models &amp; React Three Fiber
        </h2>
        <div className="glass-card glass-strong rounded-2xl p-8 md:p-10 mt-8 space-y-5">
          <p className="text-base md:text-lg text-white/70 leading-relaxed reveal-text">
            GLB (glTF Binary) is the industry standard for 3D content delivery.
            This compact format packs geometry, UVs, normals, textures, and PBR
            materials into a single optimized file — ready for real-time
            rendering.
          </p>
          <p className="text-base md:text-lg text-white/50 leading-relaxed reveal-text">
            React Three Fiber bridges the gap between React's declarative world
            and Three.js. Components, props, state, hooks — all the patterns
            you know and love, now in 3D space. It makes complex WebGL
            accessible to every React developer.
          </p>
        </div>
        <div className="flex gap-2 mt-6 reveal-text flex-wrap">
          {['glTF', 'PBR Materials', 'Declarative 3D', 'R3F'].map((tag) => (
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
