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
        className={`bg-neutral-900 ${cabin.variable} font-sans text-xl text-neutral-50 md:text-lg`}
      >
        <main className="w-[53rem] min-h-screen p-12 mx-auto lg:w-full md:p-8">
          <Header />
          {children}
        </main>
      </body>
    </html>
  )
}
