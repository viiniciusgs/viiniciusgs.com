import Link from 'next/link'

export default function Home() {
  return (
    <main className="w-[50rem] h-screen py-12 mx-auto">
      <header className="flex flex-row justify-between">
        #
        <nav>
          <ul className="flex flex-row gap-8">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li className="text-neutral-400">
              <Link href="/about">About</Link>
            </li>
            <li className="text-neutral-400">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>

      <section className="mt-40">
        <h1 className="text-5xl font-bold">Vinicius Gabriel</h1>
        <h2 className="mt-12">
          Frontend Engineer at{' '}
          <Link
            href="http://begrowth.com.br/"
            className="underline decoration-1 underline-offset-4"
          >
            Be Growth
          </Link>
        </h2>
        <p className="mt-4 text-neutral-400">
          Passionate about creating compelling and interactive web experiences.
        </p>
        <p className="mt-8">
          Based in{' '}
          <span className="cursor-default pt-1 underline--magical underline--light">
            Brazil
          </span>
          .
        </p>
      </section>
    </main>
  )
}
