import styles from './Nav.module.css';

function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <span className={styles.logoText}>Tour de Louisiane</span>
        </div>

        <ul className={styles.navLinks}>
          <li>
            <a href="#" className={styles.navLink}>
              Home
            </a>
          </li>
          <li>
            <a href="#" className={styles.navLink}>
              About
            </a>
          </li>
          <li>
            <a href="#" className={styles.navLink}>
              Events
            </a>
          </li>
          <li>
            <a href="#" className={styles.navLink}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
