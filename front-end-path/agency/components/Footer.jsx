import styles from '../styles/Footer.module.css'
import Image from 'next/image'
import Link from 'next/link'
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cardL}>
        <h1 className={styles.title}>AGENCY</h1>
        <h1 className={styles.linkTitle}>
          <a href='/contact' passHref>
            <span className={styles.linkText}>WORK WITH US</span>
            <Image src='/img/link.png' alt='' width='40px' height='40px' />
          </a>
        </h1>
      </div>
      <div className={styles.cardS}>
        <div className={styles.cardItem}>
          12 ADAM STREET LAGOS <br /> NIGERIA
        </div>
        <div className={styles.cardItem}>
          CONTACT@PHATNWARE.COM
          <br /> 08187273154
        </div>
      </div>
      <div className={styles.cardS}>
        <div className={styles.cardItem}>
          FOLLOW US: <br /> @PHANTWARE
        </div>
        <div className={styles.cardItem}>
          &copy; 2022 PHANTWARE NIGERIA
          <br /> 08187273154
        </div>
      </div>
    </div>
  )
}

export default Footer
