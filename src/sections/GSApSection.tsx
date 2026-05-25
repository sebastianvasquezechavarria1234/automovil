import Section from './Section'

export default function GSApSection() {
  return (
    <Section className="items-center">
      <div className="max-w-3xl ml-auto">
        <p className="section-number reveal-text">03 // THE MOTION</p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 leading-tight reveal-text">
          GSAP &amp; ScrollTrigger
        </h2>
        <div className="glass-card glass-strong rounded-2xl p-8 md:p-10 mt-8 space-y-5">
          <p className="text-base md:text-lg text-white/70 leading-relaxed reveal-text">
            GSAP orchestrates every movement with sub-frame precision. Its
            ScrollTrigger plugin maps the user's scroll position to camera
            paths, model rotations, and text reveals — creating a seamless
            narrative flow.
          </p>
          <p className="text-base md:text-lg text-white/50 leading-relaxed reveal-text">
            The result is a cinematic experience where scrolling becomes a
            storytelling device. Not just navigation — narrative. Every pixel
            moves with purpose, every transition feels natural.
          </p>
        </div>
        <div className="flex gap-2 mt-6 reveal-text">
          {['ScrollTrigger', 'Animation', 'Timeline', 'Easing'].map((tag) => (
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
