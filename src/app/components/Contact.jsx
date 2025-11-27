'use client';
import { useForm, ValidationError } from '@formspree/react';
import styles from './Contact.module.css';
import Link from 'next/link';

export default function Contact() {
  const [state, handleSubmit] = useForm("xgvjkqqp");

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Entre em Contato</h2>
        <div className={styles.content}>
          <div className={styles.contactInfo}>
            <h3>Vamos conversar!</h3>
            <p>
              Estou sempre aberto a discutir novos projetos, ideias criativas 
              ou oportunidades para fazer parte da sua visão.
            </p>
            <div className={styles.infoItems}>
              <div className={styles.infoItem}>
                <span className={styles.infoIcon}>📧</span>
                <div>
                  <h4>Email</h4>
                  <Link href="mailto:juniordelgadosp@gmail.com" >juniordelgadosp@gmail.com</Link>
                </div>
              </div>

              <div className={styles.infoItem}>
                <span className={styles.infoIcon}>📍</span>
                <div>
                  <h4>Localização</h4>
                  <p>Campinas-SP</p>
                </div>
              </div>
            </div>
            <div className={styles.socialLinks}>
              <a href="https://github.com/pablodelgado26" target='_blank' aria-label="GitHub" className={styles.socialLink}>
                <span>GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/pablo-j%C3%BAnior-delgado-de-abreu-7909b62b1/" target='_blank' aria-label="LinkedIn" className={styles.socialLink}>
                <span>LinkedIn</span>
              </a>

            </div>
          </div>
          
          <form onSubmit={handleSubmit} className={styles.form}>
            {state.succeeded ? (
              <div className={styles.successMessage}>
                <h3>✅ Mensagem enviada com sucesso!</h3>
                <p>Obrigado pelo contato. Responderei em breve!</p>
              </div>
            ) : (
              <>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Nome</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Seu nome"
                  />
                  <ValidationError 
                    prefix="Nome" 
                    field="name"
                    errors={state.errors}
                    className={styles.error}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="seu.email@exemplo.com"
                  />
                  <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                    className={styles.error}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="message">Mensagem</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="5"
                    placeholder="Sua mensagem..."
                  />
                  <ValidationError 
                    prefix="Mensagem" 
                    field="message"
                    errors={state.errors}
                    className={styles.error}
                  />
                </div>
                <button 
                  type="submit" 
                  className={styles.submitBtn}
                  disabled={state.submitting}
                >
                  {state.submitting ? 'Enviando...' : 'Enviar Mensagem'}
                </button>
              </>
            )}
          </form>
        </div>
      </div>
      <footer className={styles.footer}>
        <p>&copy; 2025 Desenvolvedor de Sistemas. Todos os direitos reservados.</p>
      </footer>
    </section>
  );
}
