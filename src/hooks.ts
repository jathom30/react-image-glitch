import { RefObject, useEffect, useRef } from 'react'
import ResizeObserver from 'resize-observer-polyfill'

export const useObserver = (callback: () => void, element: RefObject<HTMLDivElement>) => {
  const observer = useRef<any>(null)

  useEffect(() => {
    if (!element.current) return
    const { current } = element
    const observe = () => {
      if (current && observer.current) {
        observer.current.observe(current)
      }
    }
    // if we are already observing old element
    if (observer && observer.current && current) {
      observer.current.unobserve(current)
    }
    observer.current = new ResizeObserver(callback);
    observe()

    return () => {
      if (observer && observer.current && current) {
        observer.current.unobserve(current)
      }
    }
  }, [element, callback])
}
