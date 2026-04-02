import Image from 'next/image';
import styles from './page.module.css';
import Button from '@/components/Button';

export default function Home() {
  return (
    <div className={styles.container}>



      {/* Slogan & Main Action (Cream Background) */}
      <section className={styles.sloganSection}>
        <h1 className={styles.slogan}>IL BURGER PIÙ AMATO DI LAMEZIA TERME</h1>
        <Button href="/menu" className={styles.heroBtn}>GUARDA IL MENU</Button>
      </section>

      {/* Specialità Section */}
      <section className={styles.specialtiesSection}>
        <h2 className="section-title text-center" style={{ marginBottom: '1rem' }}>LE NOSTRE SPECIALITÀ</h2>
        <div className={styles.burgersGrid}>

          <div className="comic-box" style={{ textAlign: 'center' }}>
            <h3 style={{ marginBottom: '1rem', color: 'var(--color-brown-dark)' }}>DOPPIO SPIZZI SMASH BURGER</h3>
            <Image
              src="/images/giga_burger_1775148327548.png"
              alt="Spizzicando Banner"
              width={1600}
              height={800}
              style={{ width: '100%', height: 'auto', display: 'block' }}
              priority
              unoptimized={true}
            />
            <p style={{ marginTop: '1rem', fontFamily: 'var(--font-heading)' }}>SE TI PIACE SMASHATA!</p>
          </div>

          <div className="comic-box" style={{ textAlign: 'center' }}>
            <h3 style={{ marginBottom: '1rem', color: 'var(--color-brown-dark)' }}>SANIZZU CALABRISI</h3>
            <Image
              src="/images/infernale_burger_1775148346422.png"
              alt="Spizzicando Banner"
              width={1600}
              height={800}
              style={{ width: '100%', height: 'auto', display: 'block' }}
              priority
              unoptimized={true}
            />
            <p style={{ marginTop: '1rem', fontFamily: 'var(--font-heading)' }}>SE REGGI IL PICCANTE!</p>
          </div>

          <div className="comic-box" style={{ textAlign: 'center' }}>
            <h3 style={{ marginBottom: '1rem', color: 'var(--color-brown-dark)' }}>SANTANTONI QUADRUPLO</h3>
            <Image
              src="/images/lamezia_special_1775148578189.png"
              alt="Spizzicando Banner"
              width={1600}
              height={800}
              style={{ width: '100%', height: 'auto', display: 'block' }}
              priority
              unoptimized={true}
            />
            <p style={{ marginTop: '1rem', fontFamily: 'var(--font-heading)' }}>SE HAI TANTA FAME!</p>
          </div>

        </div>
      </section>

      {/* Dove Siamo Section */}
      <section className={styles.locationSection}>
        <div className={`comic-box ${styles.locationBox}`}>
          <div className={styles.locationContent}>
            <h2 className={styles.locationTitle}>VIENI A TROVARCI</h2>
            <div className={styles.locationDetails}>
              <h3 className={styles.locationName}>SPIZZICANDO STREET FOOD</h3>
              <p className={styles.locationAddress}>
                Corso Giovanni Nicotera, 31<br />
                88046 Lamezia Terme CZ
              </p>

              <div className={styles.locationHours}>
                <h4 className={styles.hoursTitle}>🕒 ORARI DI APERTURA</h4>
                <ul>
                  <li><span>Mercoledì – Lunedì</span><span>19:00 – 23:00</span></li>
                  <li><span>Sabato</span><span>19:00 – 23:30</span></li>
                  <li className={styles.closedDay}><span>Martedì</span><span>CHIUSO</span></li>
                </ul>
              </div>

              <div className={styles.locationPhone}>
                📞 <span>333 716 4840</span>
              </div>
            </div>
          </div>
          <div className={styles.locationVisual}>
            <Image src="/images/stylized_map_1775148391484.png" alt="Mappa Lamezia Terme Spizzicando" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'cover', borderRadius: '12px', border: 'var(--cartoon-border)' }} />
          </div>
        </div>
      </section>

    </div>
  );
}
