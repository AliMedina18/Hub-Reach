import React from 'react';
import Link from 'next/link';
import styles from '../styles/Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.headerContainer}>
      <nav className={styles.nav}>
        {/* Nombre del proyecto actualizado */}
        <div className={styles.logo}>Hub Reach</div>
        
        <ul className={styles.navLinks}>
          <li><Link href="#">Semilleros</Link></li>
          <li><Link href="#">Proyectos</Link></li>
          <li><Link href="#">Galería</Link></li>
        </ul>

        <div className={styles.navActions}>
          <button className={styles.loginButton} type="button">
            Iniciar Sesión
          </button>
        </div>
      </nav>

      <div className={styles.heroContent}>
        {/* Título más pequeño y centrado */}
        <h1 className={styles.title}>
          Investiga Inteligentemente
        </h1>
        <p className={styles.subtitle}>
          Tu solución todo en uno
        </p>
        
        <div className={styles.heroButtons}>
          <button className={styles.ctaButton}>Comienza tu proyecto</button>
        </div>
      </div>
    </header>
  );
};

export default Header;