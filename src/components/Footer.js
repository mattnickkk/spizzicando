import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p>© {new Date().getFullYear()} Spizzicando Street Food.</p>
        <p>I Morsi Più Gustosi Della Città!</p>
      </div>
    </footer>
  );
}
