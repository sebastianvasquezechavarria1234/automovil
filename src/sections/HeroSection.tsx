import Section from './Section'

export default function HeroSection() {
  return (
    <Section className="items-center justify-center">
      <div className="text-center max-w-4xl mx-auto">
        <p className="section-number tracking-[0.3em] text-sm text-white/30 mb-6 reveal-text">
          WEBGL EXPERIENCE
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight reveal-text">
          How I Built This{' '}
          <span className="text-gradient">3D Experience</span>
        </h1>
        <p className="text-lg md:text-xl text-white/50 mt-8 max-w-2xl mx-auto leading-relaxed reveal-text">
          A deep dive into the intersection of React, WebGL, and cinematic
          storytelling — powered by Three.js, React Three Fiber, and GSAP.
        </p>
        <div className="mt-16 scroll-indicator">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5 mx-auto">
            <div className="w-1.5 h-3 rounded-full bg-white/60 animate-bounce" />
          </div>
          <p className="text-xs text-white/30 mt-3 tracking-widest uppercase">
            Scroll to explore
          </p>
        </div>
      </div>
    </Section>
  )
}
