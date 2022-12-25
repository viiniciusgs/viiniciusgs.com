import localFont from '@next/font/local'

import type { AppProps } from 'next/app'

import { globalStyles } from '../styles/globalStyles'

const neutralFace = localFont({
  src: [
    {
      path: '../fonts/NeutralFace.otf',
      weight: '400',
    },
    {
      path: '../fonts/NeutralFace-Bold.otf',
      weight: '700',
    },
  ],
})

export default function App({ Component, pageProps }: AppProps) {
  globalStyles()

  return (
    <>
      <style jsx global>
        {`
          html {
            font-family: ${neutralFace.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  )
}
