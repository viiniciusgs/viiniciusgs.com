import { styled } from '../stitches.config'

export const Main = styled('main', {
  height: '100vh',
  padding: '2.5rem',
  background: '$gray02',
})

export const Container = styled('section', {
  width: '100%',
  height: '100%',
  borderRadius: '$radius',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  background: '$gray01',
  color: '$white',
})

export const TextBox = styled('section', {
  width: '37rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

export const Title = styled('strong', {
  fontSize: '8rem',
  fontWeight: 700,
  lineHeight: '100%',
  color: '$gray03',
  textAlign: 'center',
})

export const Text = styled('strong', {
  fontSize: '1.25rem',
  fontWeight: 500,
  lineHeight: '110%',
  textAlign: 'center',
  textTransform: 'uppercase',
  marginTop: '1rem',
})

export const Footer = styled('footer', {
  marginTop: '2rem',
})

export const SocialMediaContainer = styled('section', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1.5rem',
})

export const SocialMediaButton = styled('a', {
  padding: '0.75rem',

  '& svg': {
    width: '1.5rem',
    height: '1.5rem',
    color: '$gray03',
  },
})
