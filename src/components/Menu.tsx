'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Menu() {
  const [isActive, setIsActive] = useState(false)

  return (
    <div>
      <section>
        <Link href="/">
          <h1>Vinicius Gabriel</h1>
        </Link>
        <button
          className={`isActive-${isActive}`}
          type="button"
          aria-label="Menu hambúrguer"
          onClick={() => setIsActive(!isActive)}
        >
          <span />
          <span />
        </button>
      </section>

      {isActive && (
        <nav>
          <Link href="/">
            <p>Sobre</p>
          </Link>
          <Link href="/">
            <p>Projetos</p>
          </Link>
          <Link href="/">
            <p>Contato</p>
          </Link>
        </nav>
      )}
    </div>
  )
}
