import { globalCss } from '@stitches/react'

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    padding: 0,
    margin: 0,
  },

  button: {
    margin: 0,
    border: 0,
    background: 'none',
    cursor: 'pointer',
  },

  a: {
    textDecoration: 'none',
  },
})
