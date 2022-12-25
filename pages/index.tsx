import Head from 'next/head'
import styles from '../styles/Home.module.css'

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

      <main className={styles.main}>
        <h1 className={styles.h1}>Vinicius Gabriel</h1>
        <strong className={styles.strong}>Em breve!</strong>
        <p className={styles.p}>Web Developer</p>
      </main>
    </>
  )
}
