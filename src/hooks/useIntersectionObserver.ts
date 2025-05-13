import { RefObject, useEffect } from 'react'

export function useIntersectionObserver(
  ref: RefObject<HTMLDivElement | null>,
  callback: () => void,
  options: IntersectionObserverInit = { threshold: 0.2 }
) {
  useEffect(() => {
    const element = ref?.current
    if (!element) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) callback()
    }, options)

    observer.observe(element)
    return () => {
      if (element) observer.unobserve(element)
    }
  }, [ref, callback, options])
}
