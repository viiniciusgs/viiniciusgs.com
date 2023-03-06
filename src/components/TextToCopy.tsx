'use client'

export function TextToCopy() {
  const copyToClipboard = (
    event: React.MouseEvent<HTMLParagraphElement, MouseEvent>
  ) => {
    const target = event.target as HTMLParagraphElement
    const text = target.innerText
    navigator.clipboard.writeText(text)
  }

  return (
    <p
      className="mt-8 text-5xl font-bold cursor-copy"
      onClick={copyToClipboard}
    >
      hello@viiniciusgs.com
    </p>
  )
}
