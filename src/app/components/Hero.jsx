'use client';
import styles from './Hero.module.css';
import Image from 'next/image';

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
          <div className={styles.imageContainer}>
            <div className={styles.imageBorder}>
              <div className={styles.placeholder}>
                <Image 
                  src="/images/PD.jpeg" 
                  alt="Foto de Pablo Delgado"
                  width={350}
                  height={350}
                  priority
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
