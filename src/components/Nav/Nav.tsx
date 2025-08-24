import Link from 'next/link';
import styles from './Nav.module.css';
import Image from 'next/image';

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
      </div>
    </nav>
  );
}

export default Nav;
