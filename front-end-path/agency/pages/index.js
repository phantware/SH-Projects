import Head from 'next/head'
import Intro from '../components/Intro'
import Services from '../components/Services'
import styles from '../styles/Home.module.css'
const Home = () => {
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
      <Services />
    </div>
  )
}

export default Home
