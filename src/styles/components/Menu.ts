import { keyframes } from '@stitches/react'
import { styled } from '../stitches.config'

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, width: '0%' },
  '100%': { opacity: 1, width: '100%' },
})

const textFade = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
})

export const Container = styled('div', {
  padding: '0.5rem',
  borderRadius: '$radius',
  background: '$gray03Transparent',
  backdropFilter: 'blur(6px)',
  display: 'flex',
  gap: '0.5rem',
  position: 'fixed',
  bottom: '4rem',
  left: '50%',
  transform: 'translate(-50%)',
  zIndex: 2,
})

export const Content = styled('section', {
  minWidth: 'max-content',
  padding: '2rem',
  borderRadius: '$radius',
  background: '$gray01',
  display: 'flex',
  alignItems: 'center',
  gap: '2.5rem',
})

export const Title = styled('h1', {
  fontSize: '1rem',
  fontWeight: '700',
  lineHeight: '100%',
  color: '$gray03',
})

export const Hamburguer = styled('button', {
  width: '2.5rem',
  height: '14px',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',

  '& span': {
    width: '2.5rem',
    height: '3px',
    background: '$gray03',
    transition: 'transform 0.25s',
  },

  '&.isActive-true': {
    position: 'relative',

    '& span': {
      position: 'absolute',
      top: '50%',
      left: '50%',

      '&:first-child': {
        transform: 'translateX(-50%) translateY(-50%) rotate(45deg)',
      },

      '&:last-child': {
        transform: 'translateX(-50%) translateY(-50%) rotate(-45deg)',
      },
    },
  },

  '&:hover:not(&.isActive-true)': {
    '& span': {
      '&:first-child': {
        transform: 'translateX(4px)',
      },

      '&:last-child': {
        transform: 'translateX(-4px)',
      },
    },
  },
})

export const Links = styled('nav', {
  padding: '2rem',
  borderRadius: '$radius',
  background: '$gray03',
  display: 'flex',
  alignItems: 'center',
  gap: '1.25rem',
  animationDuration: '0.4s',
  animationTimingFunction: 'cubic-bezier(0.55, 0.06, 0.68, 0.19)',
  willChange: 'opacity, width',
  animationName: `${slideRightAndFade}`,
})

export const Text = styled('p', {
  fontSize: '1rem',
  fontWeight: '700',
  lineHeight: '100%',
  color: '$gray01',
  animationTimingFunction: 'cubic-bezier(0.55, 0.06, 0.68, 0.19)',
  willChange: 'opacity',
  animationName: `${textFade}`,

  '&:nth-child(1)': {
    animationDuration: '0.4s',
  },

  '&:nth-child(2)': {
    animationDuration: '0.6s',
  },

  '&:nth-child(3)': {
    animationDuration: '0.8s',
  },
})
