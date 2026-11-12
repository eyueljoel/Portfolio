import { useEffect, useRef } from 'react'

/**
 * useSectionReveal — attaches an IntersectionObserver that adds
 * the `.in-view` class to matched elements when they scroll into view.
 * Works with the `.section-reveal` utility in index.css.
 *
 * Usage: call once in App or a layout wrapper.
 * No dependencies — pure vanilla for minimal overhead.
 */
export function useSectionReveal(selector = '.section-reveal', threshold = 0.12) {
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return

    const els = document.querySelectorAll(selector)
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            obs.unobserve(entry.target) // fire once
          }
        })
      },
      { threshold }
    )

    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [selector, threshold])
}

