import Head from 'next/head'
import Intro from '../components/Intro'
import Services from '../components/Services'
import { data } from '../data'
import styles from '../styles/Home.module.css'

export default function Home({ services }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>AGENCY</title>
        <meta
          name='description'
          content='This project is to test my ability on nextjs'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Intro />
      <Services services={services} />
    </div>
  )
}

export const getStaticProps = async () => {
  const services = data
  return {
    props: { services },
  }
}
