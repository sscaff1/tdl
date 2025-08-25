'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';
import { FaInstagram, FaFacebook, FaBars, FaTimes } from 'react-icons/fa';
import styles from './MobileMenu.module.css';

function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.mobileMenuContainer} ref={menuRef}>
      <button
        className={styles.mobileMenuButton}
        onClick={toggleMenu}
        aria-label="Toggle mobile menu"
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Navigation Overlay */}
      <div className={`${styles.mobileNav} ${isMenuOpen ? styles.mobileNavOpen : ''}`}>
        <ul className={styles.mobileNavLinks}>
          <li>
            <Link href="/" className={styles.mobileNavLink}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/stages" className={styles.mobileNavLink}>
              Schedule & Maps
            </Link>
          </li>
        </ul>

        <div className={styles.mobileSocialLinks}>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mobileSocialLink}
            aria-label="Instagram"
          >
            <FaInstagram />
            <span>Instagram</span>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mobileSocialLink}
            aria-label="Facebook"
          >
            <FaFacebook />
            <span>Facebook</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
