import { useState } from 'react'
import Link from 'next/link'
import localFont from '@next/font/local'

import {
  Container,
  Content,
  Title,
  Hamburguer,
  Links,
  Text,
} from '../styles/components/Menu'

const neutralFace = localFont({
  src: [
    {
      path: '../../fonts/NeutralFace-Bold.otf',
      weight: '700',
    },
  ],
})

export default function Menu() {
  const [isActive, setIsActive] = useState(false)

  return (
    <Container className={neutralFace.className}>
      <Content>
        <Link href="/">
          <Title>Vinicius Gabriel</Title>
        </Link>
        <Hamburguer
          className={`isActive-${isActive}`}
          type="button"
          aria-label="Menu hambúrguer"
          onClick={() => setIsActive(!isActive)}
        >
          <span />
          <span />
        </Hamburguer>
      </Content>

      {isActive && (
        <Links>
          <Link href="/">
            <Text>Sobre</Text>
          </Link>
          <Link href="/">
            <Text>Projetos</Text>
          </Link>
          <Link href="/">
            <Text>Contato</Text>
          </Link>
        </Links>
      )}
    </Container>
  )
}
