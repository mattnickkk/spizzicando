import Link from 'next/link';
import styles from './Button.module.css';

export default function Button({ children, href, onClick, className = '', external = false }) {
  const classes = `${styles.btn} ${className}`;
  if (href) {
    if (external) {
      return <a href={href} className={classes} target="_blank" rel="noopener noreferrer">{children}</a>
    }
    return <Link href={href} className={classes}>{children}</Link>;
  }
  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
