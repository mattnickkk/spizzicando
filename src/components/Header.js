import Image from 'next/image';
import Button from './Button';
import styles from './Header.module.css';
import Link from 'next/link';

export default function Header() {
  return (
    <header className={styles.headerWrapper}>
      <div className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.navGroupLeft}>
            <Button href="/" className={styles.headerBtn}>HOME</Button>
            <Button href="/menu" className={styles.headerBtn}>MENU</Button>
          </div>
          
          <Link href="/" className={styles.logoLink}>
            <Image
              src="/images/logonosfondo.png"
              alt="Spizzicando Logo"
              width={140}
              height={140}
              className={styles.logo}
              priority
              unoptimized={true}
            />
          </Link>

          <div className={styles.navGroupRight}>
            <Button href="/trovaci" className={styles.headerBtn}>TROVACI</Button>
            <Button href="/contatti" className={styles.headerBtn}>CONTATTI</Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
