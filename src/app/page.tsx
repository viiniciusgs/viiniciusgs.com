import { Cormorant } from '@next/font/google'
import Link from 'next/link'

import { CrossedOffText } from '@/components/CrossedOffText'
import { CurrentTime } from '@/components/CurrentTime'

const cormorant = Cormorant({
  variable: '--font-cormorant',
})

export default function Home() {
  return (
    <main className="h-screen grid grid-cols-2 grid-rows-2 p-10 md:grid-cols-none md:grid-rows-4 md:p-5">
      <section className="flex gap-40 h-max uppercase font-bold">
        <h1>Vinicius Gabriel</h1>
        <nav className="flex gap-20 underline decoration-1 md:hidden">
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </section>
      <section className="justify-self-end text-9xl text-end uppercase md:text-5xl md:self-end md:justify-self-center md:text-start md:mb-1">
        <p>Hello I&apos;m a</p>
        <p className={`${cormorant.variable} font-serif text-blue-600`}>
          <CrossedOffText>Creative</CrossedOffText>
        </p>
        <p className={`${cormorant.variable} font-serif text-blue-600`}>
          Developer
        </p>
      </section>
      <section className="self-end text-9xl uppercase md:text-5xl md:self-start md:justify-self-center md:text-end md:mt-1">
        <p>I</p>
        <p>Develop</p>
        <p className={`${cormorant.variable} font-serif text-blue-600`}>
          Emotions
        </p>
      </section>
      <section className="flex gap-4 self-end justify-self-end uppercase font-bold">
        <CurrentTime />
      </section>
    </main>
  )
}
