import Link from 'next/link'
import {
  LinkedInLogoIcon,
  GitHubLogoIcon,
  InstagramLogoIcon,
} from '@radix-ui/react-icons'

export default function Home() {
  return (
    <>
      <main>
        <section>
          <section>
            <strong>Vinicius Gabriel</strong>
            <strong>
              Desenvolvedor web apaixonado por criar experiências atraentes e
              interativas.
            </strong>
          </section>

          <footer>
            <section>
              <Link
                href="https://www.linkedin.com/in/viiniciusgs/"
                passHref
                legacyBehavior
              >
                <a target="_blank" rel="noreferrer">
                  <LinkedInLogoIcon />
                </a>
              </Link>
              <Link
                href="https://github.com/viiniciusgs"
                passHref
                legacyBehavior
              >
                <a target="_blank" rel="noreferrer">
                  <GitHubLogoIcon />
                </a>
              </Link>
              <Link
                href="https://www.instagram.com/viiniciusgs/"
                passHref
                legacyBehavior
              >
                <a target="_blank" rel="noreferrer">
                  <InstagramLogoIcon />
                </a>
              </Link>
            </section>

            <strong>Portfolio 2022</strong>
          </footer>
        </section>
      </main>
    </>
  )
}
