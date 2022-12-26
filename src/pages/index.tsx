import Head from 'next/head'
import Link from 'next/link'
import localFont from '@next/font/local'
import {
  LinkedInLogoIcon,
  GitHubLogoIcon,
  InstagramLogoIcon,
} from '@radix-ui/react-icons'

import {
  Main,
  Container,
  TextBox,
  Title,
  Text,
  Footer,
  SocialMediaContainer,
  SocialMediaButton,
  Text2,
} from '../styles/pages/Home'

const neutralFace = localFont({
  src: [
    {
      path: '../../fonts/NeutralFace.otf',
      weight: '400',
    },
    {
      path: '../../fonts/NeutralFace-Bold.otf',
      weight: '700',
    },
  ],
})

export default function Home() {
  return (
    <>
      <Head>
        <title>Vinicius Gabriel</title>
        <meta
          name="description"
          content="Desenvolvedor front-end apaixonado por criar experiências web atraentes e interativas."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Container>
          <TextBox>
            <Title className={neutralFace.className}>Vinicius Gabriel</Title>
            <Text>
              Desenvolvedor web apaixonado por criar experiências atraentes e
              interativas.
            </Text>
          </TextBox>

          <Footer>
            <SocialMediaContainer>
              <Link
                href="https://www.linkedin.com/in/viiniciusgs/"
                passHref
                legacyBehavior
              >
                <SocialMediaButton target="_blank" rel="noreferrer">
                  <LinkedInLogoIcon />
                </SocialMediaButton>
              </Link>
              <Link
                href="https://github.com/viiniciusgs"
                passHref
                legacyBehavior
              >
                <SocialMediaButton target="_blank" rel="noreferrer">
                  <GitHubLogoIcon />
                </SocialMediaButton>
              </Link>
              <Link
                href="https://www.instagram.com/viiniciusgs/"
                passHref
                legacyBehavior
              >
                <SocialMediaButton target="_blank" rel="noreferrer">
                  <InstagramLogoIcon />
                </SocialMediaButton>
              </Link>
            </SocialMediaContainer>

            <Text2 className={neutralFace.className}>Portfolio 2022</Text2>
          </Footer>
        </Container>
      </Main>
    </>
  )
}
