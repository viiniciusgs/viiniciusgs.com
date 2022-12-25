import { createStitches } from '@stitches/react'

export const { styled, css } = createStitches({
  theme: {
    colors: {
      gray01: '#121212',
      gray02: '#181818',
      gray03: '#D9D9D9',
      gray01Transparent: 'rgba(18, 18, 18, 0.1)',
      gray03Transparent: 'rgba(217, 217, 217, 0.1)',
      white: '#FFFFFF',
    },
    radii: {
      radius: '0.5rem',
    },
  },
  media: {
    bp1: '(max-width: 375px)',
  },
})
