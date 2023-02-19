import { Cormorant } from '@next/font/google'
import Link from 'next/link'

const cormorant = Cormorant({
  variable: '--font-cormorant',
})

export default function Home() {
  return (
    <main className="h-screen grid grid-cols-2 grid-rows-2 p-10">
      <section className="flex gap-40 h-max">
        <p className="uppercase">São Paulo, BR. 1:42 PM</p>
        <nav className="flex gap-20">
          <Link className="uppercase underline decoration-1" href="/about">
            About
          </Link>
          <Link className="uppercase underline decoration-1" href="/contact">
            Contact
          </Link>
        </nav>
      </section>
      <section className="justify-self-end">
        <p className="text-end text-9xl uppercase">Hello I&apos;m a</p>
        <p
          className={`${cormorant.variable} font-serif text-end text-9xl uppercase text-blue-600`}
        >
          Creative
        </p>
        <p
          className={`${cormorant.variable} font-serif text-end text-9xl uppercase text-blue-600`}
        >
          Developer
        </p>
      </section>
      <section className="self-end">
        <p className="text-9xl uppercase">I</p>
        <p className="text-9xl uppercase">Develop</p>
        <p
          className={`${cormorant.variable} font-serif text-9xl uppercase text-blue-600`}
        >
          Emotions
        </p>
      </section>
      <section className="flex gap-4 self-end justify-self-end">
        <h1 className={`${cormorant.variable} font-serif font-bold uppercase`}>
          Vinicius Gabriel
        </h1>
        <p className="font-bold uppercase">©</p>
      </section>
    </main>
  )
}
