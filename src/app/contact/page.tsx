'use client'

import Link from 'next/link'

export default function Contact() {
  const copyToClipboard = (
    event: React.MouseEvent<HTMLParagraphElement, MouseEvent>
  ) => {
    const target = event.target as HTMLParagraphElement
    const text = target.innerText
    navigator.clipboard.writeText(text)
  }

  return (
    <section className="mt-40 pb-40 text-center">
      <p>Send me a message</p>
      <p
        className="mt-8 text-5xl font-bold cursor-copy"
        onClick={copyToClipboard}
      >
        hello@viiniciusgs.com
      </p>
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
