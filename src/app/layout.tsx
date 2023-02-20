import { Cabin } from '@next/font/google'

import '@/styles/globals.css'

const cabin = Cabin({
  variable: '--font-cabin',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`bg-zinc-100 ${cabin.variable} font-sans text-xl text-zinc-900 md:text-base`}
      >
        {children}
      </body>
    </html>
  )
}
