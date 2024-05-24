import { ReactNode, useEffect, useState } from 'react'

interface NoSSRProps {
  children: ReactNode
}

export const NoSSR = ({ children }: NoSSRProps) => {
  const [DOMLoaded, setDOMLoaded] = useState(false)

  useEffect(() => {
    setDOMLoaded(true)
  }, [])

  return DOMLoaded ? children : null
}
