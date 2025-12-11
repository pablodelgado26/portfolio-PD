'use client';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h1 className={styles.title}>
              Olá, sou um
              <span className={styles.highlight}> Desenvolvedor de Sistemas</span>
            </h1>
            <p className={styles.subtitle}>
              Transformo desafios em software
            </p>
            <div className={styles.buttons}>
              <a href="#contact" className={styles.primaryBtn}>
                Entre em Contato
              </a>
              <a href="#projects" className={styles.secondaryBtn}>
                Ver Projetos
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
