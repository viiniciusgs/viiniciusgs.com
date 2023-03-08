'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Header() {
  const pathname = usePathname()

  const textColorStyle = (page: string) => {
    if (pathname === page) {
      return 'text-neutral-50'
    }
    return 'text-neutral-400'
  }

  return (
    <header className="flex flex-row justify-between">
      #
      <nav>
        <ul className="flex flex-row gap-8">
          <li className={textColorStyle('/')}>
            <Link href="/">Home</Link>
          </li>
          <li className={textColorStyle('/about')}>
            <Link href="/about">About</Link>
          </li>
          <li className={textColorStyle('/contact')}>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
