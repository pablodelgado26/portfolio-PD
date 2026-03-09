'use client';
import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <a href="#hero" className={styles.logo} onClick={closeMenu}>
          &lt;Dev/&gt;
        </a>

        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`${styles.navLinks} ${menuOpen ? styles.navOpen : ''}`}>
          <li><a href="#about" onClick={closeMenu}>Sobre</a></li>
          <li><a href="#skills" onClick={closeMenu}>Habilidades</a></li>
          <li><a href="#projects" onClick={closeMenu}>Projetos</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contato</a></li>
        </ul>
      </div>
    </nav>
  );
}

