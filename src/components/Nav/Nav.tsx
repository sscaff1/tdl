import Link from 'next/link';
import { FaInstagram, FaFacebook, FaBars } from 'react-icons/fa';
import styles from './Nav.module.css';
import Image from 'next/image';
import MobileMenu from './MobileMenu';

function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image
            src="/images/TDL_logo.jpg"
            alt="Tour de Louisiane"
            className={styles.logoImage}
            width={100}
            height={100}
          />
        </div>

        {/* Desktop Navigation */}
        <div className={styles.desktopNav}>
          <ul className={styles.navLinks}>
            <li>
              <Link href="/" className={styles.navLink}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/stages" className={styles.navLink}>
                Schedule & Maps
              </Link>
            </li>
          </ul>

          <div className={styles.socialLinks}>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
          </div>
        </div>

        {/* Mobile Menu - Client Component */}
        <MobileMenu />
      </div>
    </nav>
  );
}

export default Nav;
