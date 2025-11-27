import styles from './Projects.module.css';

export default function Projects() {
  const projects = [
    {
      title: 'Projeto Full-Stack',
      description: 'Aplicação completa desenvolvida com React e Node.js, integrando banco de dados PostgreSQL.',
      tags: ['React', 'Node.js', 'PostgreSQL'],
      link: '#'
    },
    {
      title: 'App Mobile',
      description: 'Aplicativo mobile desenvolvido em React Native com interface moderna e intuitiva.',
      tags: ['React Native', 'JavaScript'],
      link: '#'
    },
    {
      title: 'Sistema Web',
      description: 'Sistema web responsivo com painéis administrativos e integração de APIs.',
      tags: ['EJS', 'JavaScript', 'SQLite'],
      link: '#'
    },
    {
      title: 'Design UI/UX',
      description: 'Projetos de interface e experiência do usuário criados no Figma.',
      tags: ['Figma', 'Design'],
      link: '#'
    },
  ];

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Projetos</h2>
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <div className={styles.cardContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.tags}>
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className={styles.tag}>{tag}</span>
                  ))}
                </div>
                <a href={project.link} className={styles.projectLink}>
                  Ver Projeto →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
