import Head from 'next/head'
import { Italiana } from '@next/font/google'
import styles from '../styles/Home.module.css'

const italiana = Italiana({
  weight: '400',
})

export default function Home() {
  return (
    <div className={italiana.className}>
      <Head>
        <title>Vinicius Gabriel</title>
        <meta name="description" content="Desenvolvedor front-end apaixonado por criar experiências web atraentes e interativas." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Em breve!
        </h1>
      </main>
    </div>
  )
}
