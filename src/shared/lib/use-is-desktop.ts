import { useEffect, useState } from 'react'

export const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(false)
  const [isWindow, setIsWindow] = useState(false)
  useEffect(() => {
    const media = window.matchMedia(`(min-width: 1024px)`)
    const listener = () => {
      setIsDesktop(media.matches)
    }
    media.addEventListener(`change`, listener)
    listener()
    setIsWindow(true)
    return () => media.removeEventListener(`change`, listener)
  }, [])

  return { isDesktop, isWindow }
}
