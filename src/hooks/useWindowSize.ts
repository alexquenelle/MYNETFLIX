import { useEffect, useState } from 'react'
import { useEventListener } from './useEventListener'

interface IWindowSize {
  width: number
  height: number
}

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<IWindowSize>({
    width: 0,
    height: 0,
  })

  const handleResize = () => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight })
  }

  useEventListener('resize', handleResize)

  useEffect(() => {
    handleResize()
  }, [])

  return windowSize
}
