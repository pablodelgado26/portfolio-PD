'use client';
import styles from './Skills.module.css';

export default function Skills() {
  const skills = {
    languages: [
      { name: 'JavaScript', level: 90 },
      { name: 'HTML', level: 95 },
    ],
    frameworks: [
      { name: 'React', level: 85 },
      { name: 'React Native', level: 80 },
      { name: 'EJS', level: 75 },
    ],
    tools: [
      { name: 'Figma', level: 80 },
      { name: 'Git', level: 85 },
      { name: 'VS Code', level: 90 },
      { name: 'IntelliJ IDEA', level: 80 },
      { name: 'Métodos Ágeis', level: 85 },
    ],
    databases: [
      { name: 'PostgreSQL', level: 85 },
      { name: 'SQLite', level: 80 },
    ],
  };

  const SkillBar = ({ name, level }) => (
    <div className={styles.skillItem}>
      <div className={styles.skillHeader}>
        <span className={styles.skillName}>{name}</span>
        <span className={styles.skillLevel}>{level}%</span>
      </div>
      <div className={styles.skillBar}>
        <div 
          className={styles.skillProgress} 
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Habilidades</h2>
        <div className={styles.skillsGrid}>
          <div className={styles.skillCategory}>
            <h3 className={styles.categoryTitle}>
              <span className={styles.icon}>💻</span>
              Linguagens
            </h3>
            <div className={styles.skillsList}>
              {skills.languages.map((skill, index) => (
                <SkillBar key={index} {...skill} />
              ))}
            </div>
          </div>

          <div className={styles.skillCategory}>
            <h3 className={styles.categoryTitle}>
              <span className={styles.icon}>⚛️</span>
              Frameworks
            </h3>
            <div className={styles.skillsList}>
              {skills.frameworks.map((skill, index) => (
                <SkillBar key={index} {...skill} />
              ))}
            </div>
          </div>

          <div className={styles.skillCategory}>
            <h3 className={styles.categoryTitle}>
              <span className={styles.icon}>🛠️</span>
              Ferramentas
            </h3>
            <div className={styles.skillsList}>
              {skills.tools.map((skill, index) => (
                <SkillBar key={index} {...skill} />
              ))}
            </div>
          </div>

          <div className={styles.skillCategory}>
            <h3 className={styles.categoryTitle}>
              <span className={styles.icon}>🗄️</span>
              Banco de Dados
            </h3>
            <div className={styles.skillsList}>
              {skills.databases.map((skill, index) => (
                <SkillBar key={index} {...skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
