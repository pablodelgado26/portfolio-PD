import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Sobre Mim</h2>
        <div className={styles.content}>
          <div className={styles.text}>
            <p>
              Sou um desenvolvedor de sistemas apaixonado por criar soluções digitais 
              inovadoras e eficientes. Com experiência em desenvolvimento full-stack, 
              trabalho com tecnologias modernas para transformar ideias em realidade.
            </p>
            <p>
              Minha jornada na programação é marcada pela busca constante de conhecimento 
              e pela dedicação em entregar produtos de qualidade. Acredito no poder da 
              tecnologia para resolver problemas reais e melhorar a vida das pessoas.
            </p>
            <p>
              Utilizo metodologias ágeis no desenvolvimento de projetos, garantindo 
              entregas contínuas e alinhadas às necessidades do cliente.
            </p>
            
            <div className={styles.education}>
              <h3 className={styles.educationTitle}>🎓 Formação</h3>
              <div className={styles.educationItem}>
                <h4>Desenvolvimento de Sistemas</h4>
                <p className={styles.institution}>SENAI - Valinhos</p>
                <p className={styles.year}>2025</p>
              </div>
              <div className={styles.educationItem}>
                <h4>Ensino Médio</h4>
                <p className={styles.institution}>SESI - Valinhos</p>
                <p className={styles.year}>2025</p>
              </div>
            </div>
          </div>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <h3>5+</h3>
              <p>Tecnologias</p>
            </div>
            <div className={styles.stat}>
              <h3>10+</h3>
              <p>Projetos</p>
            </div>
            <div className={styles.stat}>
              <h3>100%</h3>
              <p>Dedicação</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
