'use client'

import { PropsWithChildren } from 'react'
import { RoughNotation } from 'react-rough-notation'
import colors from 'tailwindcss/colors'

const black = colors.zinc[900]

export function CrossedOffText({ children }: PropsWithChildren) {
  return (
    <RoughNotation
      type="crossed-off"
      color={`${black}`}
      show={true}
      animationDelay={500}
    >
      {children}
    </RoughNotation>
  )
}
