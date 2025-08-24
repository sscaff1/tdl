import Hero from '@/components/Hero/Hero';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Hero />
      <div className={styles.aboutSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>About the Tour</h2>

          <div className={styles.aboutContent}>
            <div className={styles.mainInfo}>
              <div className={styles.infoCard}>
                <h3 className={styles.cardTitle}>Registration</h3>
                <p className={styles.cardText}>
                  Preregister Online at <strong>BikeReg.com</strong>. Online registration closes
                  midnight, Thursday, April 10, 2025.
                </p>
                <div className={styles.highlight}>
                  <span className={styles.highlightIcon}>⚠️</span>
                  <span>Race day registration $10 additional, so pre-register!</span>
                </div>
              </div>

              <div className={styles.infoCard}>
                <h3 className={styles.cardTitle}>Race Categories</h3>
                <p className={styles.cardText}>
                  Riders without USAC Road licenses race as Cat. 5, 40+, Women as appropriate.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3 className={styles.cardTitle}>General Classification</h3>
                <div className={styles.gcRules}>
                  <p className={styles.cardText}>
                    Riders are not required to finish the prior race to start the next, but will be
                    ineligible for GC prizes.
                  </p>
                  <p className={styles.cardText}>
                    Riders may register for only one day, but will be ineligible for GC prizes.
                  </p>
                </div>
              </div>

              <div className={styles.infoCard}>
                <h3 className={styles.cardTitle}>Additional Races</h3>
                <p className={styles.cardText}>
                  Riders wishing to race a second criterium race for which they are eligible may do
                  so for $10 additional.
                </p>
                <div className={styles.specialOffer}>
                  <span className={styles.offerIcon}>🎉</span>
                  <span>
                    <strong>NOBC members race free!</strong>
                  </span>
                </div>
              </div>

              <div className={styles.infoCard}>
                <h3 className={styles.cardTitle}>Race Day Information</h3>
                <div className={styles.raceDayContent}>
                  <div className={styles.timeInfo}>
                    <div className={styles.timeItem}>
                      <span className={styles.timeLabel}>Registration Opens:</span>
                      <span className={styles.timeValue}>7:30 a.m.</span>
                    </div>
                    <div className={styles.timeItem}>
                      <span className={styles.timeLabel}>Registration Closes:</span>
                      <span className={styles.timeValue}>8:30 a.m.</span>
                    </div>
                  </div>
                  <div className={styles.locationInfo}>
                    <h4 className={styles.locationTitle}>Location</h4>
                    <p className={styles.locationText}>
                      Oak Grove Baptist Church
                      <br />
                      19840 Lee Road
                      <br />
                      Franklinton, LA 70438
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
