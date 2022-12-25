import { styled } from '../stitches.config'

export const Container = styled('main', {
  minHeight: '100vh',
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '$gray02',
  color: '$white',
})

export const Title = styled('h1', {
  margin: 0,
  fontSize: '2rem',
  fontWeight: 700,
  position: 'absolute',
  top: '2.5rem',
  left: '2.5rem',

  '@bp1': {
    fontSize: '1rem',
  },
})

export const Subtitle = styled('p', {
  margin: 0,
  fontSize: '3rem',
  fontWeight: 400,
  position: 'absolute',
  bottom: '2.5rem',
  right: '2.5rem',

  '@bp1': {
    fontSize: '2rem',
  },
})

export const Text = styled('strong', {
  fontSize: '6rem',
  fontWeight: 700,

  '@bp1': {
    fontSize: '5rem',
  },
})
