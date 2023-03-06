import Link from 'next/link'

import { TextToCopy } from '@/components/TextToCopy'

export default function Contact() {
  return (
    <section className="mt-40 pb-40 text-center">
      <p>Send me a message</p>
      <TextToCopy />
      <p className="mt-20">Or connect with me on social medias</p>
      <p className="mt-8">
        <Link
          href="https://www.linkedin.com/in/viiniciusgs/"
          target="_blank"
          className="text-5xl font-bold underline"
        >
          LinkedIn
        </Link>
      </p>
      <p className="mt-6">
        <Link
          href="https://github.com/viiniciusgs/"
          target="_blank"
          className="mt-6 text-5xl font-bold underline"
        >
          GitHub
        </Link>
      </p>
      <p className="mt-6">
        <Link
          href="https://www.instagram.com/viiniciusgs/"
          target="_blank"
          className="mt-6 text-5xl font-bold underline"
        >
          Instagram
        </Link>
      </p>
    </section>
  )
}
