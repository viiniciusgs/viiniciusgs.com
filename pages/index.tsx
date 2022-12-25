import Head from 'next/head'

import { Container, Title, Text, Subtitle } from '../styles/pages/Home'

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

      <Container>
        <Title>Vinicius Gabriel</Title>
        <Text>Em breve!</Text>
        <Subtitle>Web Developer</Subtitle>
      </Container>
    </>
  )
}
