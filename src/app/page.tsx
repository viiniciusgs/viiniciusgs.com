import Link from 'next/link'

export default function Home() {
  return (
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
  )
}
