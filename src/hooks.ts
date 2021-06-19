import { RefObject, useEffect, useRef } from 'react'

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
    const resizeObserverOrPolyfill: any = ResizeObserver;
    observer.current = new resizeObserverOrPolyfill(callback);
    observe()

    return () => {
      if (observer && observer.current && current) {
        observer.current.unobserve(current)
      }
    }
  }, [element, callback])
}
