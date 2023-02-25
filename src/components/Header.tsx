'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { clsx } from 'clsx'

export function Header() {
  const pathname = usePathname()

  return (
    <header className="flex flex-row justify-between">
      #
      <nav>
        <ul className="flex flex-row gap-8">
          <li className={clsx(pathname !== '/' && 'text-neutral-400')}>
            <Link href="/">Home</Link>
          </li>
          <li className={clsx(pathname !== '/about' && 'text-neutral-400')}>
            <Link href="/about">About</Link>
          </li>
          <li className={clsx(pathname !== '/contact' && 'text-neutral-400')}>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
