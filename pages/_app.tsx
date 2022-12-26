import { Anek_Latin } from '@next/font/google'

import { globalStyles } from '../styles/globalStyles'

import type { AppProps } from 'next/app'

const anekLatin = Anek_Latin({
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  globalStyles()

  return (
    <>
      <style jsx global>
        {`
          html {
            font-family: ${anekLatin.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  )
}
