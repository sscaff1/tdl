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
            <div className={styles.logoGrid}>
              <div className={styles.logoRow}>
                <div className={styles.logoItem}>
                  <Image
                    src="/images/hero/LAMBRA_logo_175_2017.png"
                    alt="LAMBRA Logo"
                    width={120}
                    height={120}
                    className={styles.heroLogo}
                    priority
                  />
                </div>
                <div className={styles.logoItem}>
                  <Image
                    src="/images/hero/usac_permit_2016_120.jpg"
                    alt="USAC Permit"
                    width={120}
                    height={120}
                    className={styles.heroLogo}
                    priority
                  />
                </div>
              </div>
              <div className={styles.logoRow}>
                <div className={styles.logoItem}>
                  <Image
                    src="/images/hero/NOBC-Logo-sm.jpg"
                    alt="NOBC Logo"
                    width={120}
                    height={120}
                    className={styles.heroLogo}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
