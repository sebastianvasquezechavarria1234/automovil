import Section from './Section'

export default function LightingSection() {
  return (
    <Section className="items-center">
      <div className="max-w-3xl mr-auto">
        <p className="section-number reveal-text">04 // THE ATMOSPHERE</p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 leading-tight reveal-text">
          Cinematic Lighting &amp; Post-Processing
        </h2>
        <div className="glass-card glass-strong rounded-2xl p-8 md:p-10 mt-8 space-y-5">
          <p className="text-base md:text-lg text-white/70 leading-relaxed reveal-text">
            Lighting defines the mood. Ambient light fills the shadows,
            directional lights carve form and depth, and an HDR environment
            wraps the scene in realistic reflections. Every light is placed
            deliberately to create a cinematic composition.
          </p>
          <p className="text-base md:text-lg text-white/50 leading-relaxed reveal-text">
            Bloom post-processing adds the ethereal glow, while subtle
            chromatic aberration gives a premium lens feel. Together, these
            elements create the cinematic quality that makes 3D web experiences
            feel alive.
          </p>
        </div>
        <div className="flex gap-2 mt-6 reveal-text flex-wrap">
          {['HDR', 'Bloom', 'Soft Shadows', 'Chromatic Aberration'].map(
            (tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/40"
              >
                {tag}
              </span>
            )
          )}
        </div>
      </div>
    </Section>
  )
}
