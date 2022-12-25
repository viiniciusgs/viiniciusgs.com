import localFont from '@next/font/local'

import './globals.css'

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className={neutralFace.className}>
      <head />
      <body>{children}</body>
    </html>
  )
}
