import styles from './contatti.module.css';
import Button from '@/components/Button';

export default function Contatti() {
  return (
    <div className={styles.container}>
      <h1 className="section-title text-center">CONTATTACI</h1>

      <div className={styles.contactWrapper}>
        <div className={`comic-box ${styles.formBox}`}>
          <h2>SCRIVICI</h2>
          <form className={styles.contactForm}>
            <div className={styles.inputGroup}>
              <label htmlFor="name">Nome</label>
              <input type="text" id="name" placeholder="Il tuo nome..." />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="La tua email..." />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="message">Messaggio</label>
              <textarea id="message" rows={5} placeholder="Il tuo messaggio..."></textarea>
            </div>
            <Button>INVIA MESSAGGIO</Button>
          </form>
        </div>

        <div className={styles.infoCol}>
          <div className="comic-box">
            <h2>CHIAMACI AL VOLO!</h2>
            <p className={styles.phoneText}>📞 333 716 4840</p>
          </div>

          <div className={`comic-box ${styles.bookingBox}`}>
            <h2>PRENOTA UN TAVOLO</h2>
            <p>Assicurati il tuo posto da Spizzicando per una serata esplosiva!</p>
            <Button href="https://wa.me/393337164840?text=Ciao%20ragazzi!%20Vorrei%20prenotare%20un%20tavolo%20da%20Spizzicando%20%F0%9F%8D%94" external className={styles.bookingBtn}>
              PRENOTA SU WHATSAPP
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
