import localFont from "@next/font/local"
import '../styles/globals.css'
import type { AppProps } from 'next/app'

const neutralFace = localFont({
  src: [
    {
      path: '../fonts/NeutralFace.otf',
      weight: '400'
    },
    {
      path: '../fonts/NeutralFace-Bold.otf',
      weight: '700'
    }
  ]
})

export default function App({ Component, pageProps }: AppProps) {
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
