import { Cabin } from '@next/font/google'

import { Header } from '@/components/Header'

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
        className={`bg-neutral-900 ${cabin.variable} font-sans text-xl text-neutral-50`}
      >
        <main className="w-[50rem] h-screen py-12 mx-auto">
          <Header />
          {children}
        </main>
      </body>
    </html>
  )
}
