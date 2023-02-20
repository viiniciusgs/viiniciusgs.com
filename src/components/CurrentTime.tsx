'use client'

import { useEffect, useState } from 'react'

export function CurrentTime() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(interval)
  })

  const timeString = time.toLocaleTimeString('en', {
    hour: 'numeric',
    minute: 'numeric',
  })

  return (
    <p
      className="uppercase"
      suppressHydrationWarning
    >{`São Paulo, BR. ${timeString}`}</p>
  )
}
