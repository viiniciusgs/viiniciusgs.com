import Link from 'next/link'

export const metadata = {
  title: 'Contact',
}

export default function Contact() {
  return (
    <section className="mt-40 pb-40 text-center md:mt-20 md:pb-20">
      <p className="mb-8">Send me a message</p>
      <a
        href="mailto:hello@viiniciusgs.com"
        className="text-5xl font-bold md:text-3xl"
      >
        hello@viiniciusgs.com
      </a>
      <p className="mt-20">Or connect with me on social medias</p>
      <p className="mt-8">
        <Link
          href="https://www.linkedin.com/in/viiniciusgs/"
          target="_blank"
          className="text-5xl font-bold underline md:text-3xl"
        >
          LinkedIn
        </Link>
      </p>
      <p className="mt-6">
        <Link
          href="https://github.com/viiniciusgs/"
          target="_blank"
          className="text-5xl font-bold underline md:text-3xl"
        >
          GitHub
        </Link>
      </p>
      <p className="mt-6">
        <Link
          href="https://www.instagram.com/viiniciusgs/"
          target="_blank"
          className="text-5xl font-bold underline md:text-3xl"
        >
          Instagram
        </Link>
      </p>
    </section>
  )
}
