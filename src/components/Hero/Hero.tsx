import styles from './Hero.module.css';
import Image from 'next/image';

function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <div className={styles.textSection}>
            <h1 className={styles.title}>Tour de Louisiane</h1>
            <p className={styles.subtitle}>55th Annual Stage Race and LAMBRA Road Championship</p>
            <div className={styles.dates}>
              <p className={styles.dateRange}>Saturday & Sunday</p>
              <p className={styles.specificDates}>May 18-19, 2024</p>
            </div>
            <a
              href="https://www.bikereg.com/tour-de-louisiane-stage-race"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.callToAction}
            >
              Register Now
            </a>
          </div>
          <div className={styles.logoSection}>
            <Image
              src="/images/lambra_logo.png"
              alt="LAMBRA Logo"
              width={200}
              height={200}
              className={styles.logo}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
