import { useEffect } from 'react'

export const useEventListener = (
  event: string,
  handler: EventListenerOrEventListenerObject,
  element = window
) => {
  useEffect(() => {
    if (event && element && handler) {
      element.addEventListener(event, handler)
    }

    return () => {
      element.removeEventListener(event, handler)
    }
  }, [event, element, handler])
}
