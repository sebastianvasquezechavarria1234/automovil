import Section from './Section'

export default function FinalSection() {
  return (
    <Section className="items-center justify-center">
      <div className="text-center max-w-3xl mx-auto">
        <p className="section-number reveal-text">BUILT WITH CODE</p>
        <h2 className="text-4xl md:text-6xl font-bold mt-4 leading-tight reveal-text">
          Thanks for{' '}
          <span className="text-gradient">Exploring</span>
        </h2>
        <p className="text-lg text-white/50 mt-8 leading-relaxed reveal-text">
          This project showcases how modern web technologies converge to create
          immersive, premium digital experiences. Three.js, React Three Fiber,
          GSAP, and Tailwind CSS — each playing its role in the pipeline.
        </p>
        <div className="glass-card glass rounded-2xl p-6 md:p-8 mt-10 reveal-text inline-block mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/40">
            <span>Three.js</span>
            <span className="text-white/10">•</span>
            <span>React Three Fiber</span>
            <span className="text-white/10">•</span>
            <span>GSAP</span>
            <span className="text-white/10">•</span>
            <span>Tailwind CSS</span>
            <span className="text-white/10">•</span>
            <span>WebGL</span>
          </div>
        </div>
      </div>
    </Section>
  )
}
