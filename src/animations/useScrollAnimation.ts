import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useScrollAnimation() {
  const scrollProgress = useRef(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const proxy = { value: 0 }
    const sections = container.querySelectorAll('.story-section')

    gsap.to(proxy, {
      value: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.5,
        invalidateOnRefresh: true,
        onUpdate: () => {
          const st = ScrollTrigger.getAll().find(
            (t) => t.vars.trigger === container
          )
          if (st) {
            proxy.value = st.progress
            scrollProgress.current = st.progress
          }
        },
      },
    })

    sections.forEach((section) => {
      const texts = section.querySelectorAll('.reveal-text')
      if (texts.length) {
        gsap.fromTo(
          texts,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.15,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 75%',
              end: 'top 30%',
              scrub: 1.2,
            },
          }
        )
      }

      const glassCards = section.querySelectorAll('.glass-card')
      glassCards.forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: 60, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            delay: i * 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 70%',
              end: 'top 35%',
              scrub: 1,
            },
          }
        )
      })
    })

    ScrollTrigger.refresh()

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill())
    }
  }, [])

  return { scrollProgress, containerRef }
}
