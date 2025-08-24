import styles from './Footer.module.css';
import Link from 'next/link';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.sections}>
          {/* Race Information */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Tour de Louisiane</h3>
            <p className={styles.description}>
              55th Annual Stage Race and LAMBRA Road Championship
            </p>
            <div className={styles.eventDetails}>
              <p>
                <strong>Date:</strong> May 18-19, 2024
              </p>
              <p>
                <strong>Location:</strong> Franklinton & Mandeville, LA
              </p>
              <p>
                <strong>Type:</strong> USAC Sanctioned Road Race
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Quick Links</h3>
            <ul className={styles.linkList}>
              <li>
                <Link href="/stages" className={styles.link}>
                  Schedule & Maps
                </Link>
              </li>
              <li>
                <a
                  href="https://www.bikereg.com/tour-de-louisiane-stage-race"
                  className={styles.link}
                >
                  Registration
                </a>
              </li>
              <li>
                <a
                  href="https://www.neworleansbicycleclub.org/TDL/tdlresults.htm"
                  className={styles.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Results
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Contact</h3>
            <div className={styles.contactInfo}>
              <p>
                <strong>Race Director:</strong> New Orleans Bicycle Club
              </p>
              <p>
                <strong>Email:</strong> info@lambra.org
              </p>
            </div>
          </div>

          {/* Registration */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Register Now</h3>
            <p className={styles.registrationText}>
              Don&apos;t miss out on this premier cycling event!
            </p>
            <a
              href="https://www.bikereg.com/tour-de-louisiane-stage-race"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.registrationButton}
            >
              Register on BikeReg
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
