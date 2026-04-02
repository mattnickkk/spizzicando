import Image from 'next/image';
import styles from './trovaci.module.css';

export default function Trovaci() {
  return (
    <div className={styles.container}>
      <h1 className="section-title text-center">TROVACI</h1>
      
      <div className={styles.contentWrapper}>
        <div className={`comic-box ${styles.mapBox}`}>
          <Image 
            src="/images/stylized_map_1775148391484.png" 
            alt="Mappa Trovaci" 
            width={600} 
            height={600} 
            className={styles.largeMap} 
            priority
          />
        </div>

        <div className={styles.infoCol}>
          <div className="comic-box">
            <h2>INDIRIZZO</h2>
            <p className={styles.detail}>Spizzicando STREET FOOD</p>
            <p className={styles.detail}>Corso Giovanni Nicotera, 31</p>
            <p className={styles.detail}>88046 Lamezia Terme CZ</p>
          </div>

          <div className="comic-box">
            <h2>ORARI DI APERTURA</h2>
            <ul className={styles.hoursList}>
              <li><span>Lunedì</span> <span>19:00 - 23:00</span></li>
              <li><span>Martedì</span> <span className="highlight">CHIUSO</span></li>
              <li><span>Mercoledì</span> <span>19:00 - 23:00</span></li>
              <li><span>Giovedì</span> <span>19:00 - 23:00</span></li>
              <li><span>Venerdì</span> <span>19:00 - 23:00</span></li>
              <li><span>Sabato</span> <span>19:00 - 23:30</span></li>
              <li><span>Domenica</span> <span>19:00 - 23:00</span></li>
            </ul>
          </div>
        </div>
      </div>

      <section className={styles.servicesBanner}>
        <h2>I NOSTRI SERVIZI</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceItem}>🍽️ Consumazione sul posto</div>
          <div className={styles.serviceItem}>🛍️ Ritiro all&apos;esterno</div>
          <div className={styles.serviceItem}>🛵 Consegna senza contatto</div>
        </div>
      </section>
    </div>
  );
}
