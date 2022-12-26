import { styled } from '../stitches.config'

export const Main = styled('main', {
  height: '100vh',
  padding: '2.5rem',
  background: '$gray02',

  '@bp1': {
    padding: '1.25rem',
  },
})

export const Container = styled('section', {
  width: '100%',
  height: '100%',
  padding: '2.5rem',
  borderRadius: '$radius',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  background: '$gray01',
  color: '$white',
})

export const TextBox = styled('section', {
  width: '37rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',

  '@bp1': {
    width: '19rem',
  },
})

export const Title = styled('strong', {
  fontSize: '8rem',
  fontWeight: 700,
  lineHeight: '100%',
  color: '$gray03',
  textAlign: 'center',

  '@bp1': {
    fontSize: '4rem',
  },
})

export const Text = styled('strong', {
  fontSize: '1.25rem',
  fontWeight: 500,
  lineHeight: '110%',
  textAlign: 'center',
  textTransform: 'uppercase',
  marginTop: '1rem',

  '@bp1': {
    fontSize: '1rem',
  },
})

export const Footer = styled('footer', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
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

export const Text2 = styled(Text, {
  fontWeight: '400',
  color: '$gray03',
  marginTop: 'initial',
})
