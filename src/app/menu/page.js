import Image from 'next/image';
import styles from './menu.module.css';

const menuItems = [
  {
    id: 1,
    name: 'IL GIGA-BURGER',
    description: 'Doppio hamburger di manzo, formaggio cheddar, lattuga, pomodoro, salsa speciale Spizzicando.',
    price: '9.50',
    image: '/images/giga_burger_1775148327548.png'
  },
  {
    id: 2,
    name: "L'INFERNALE",
    description: 'Hamburger piccante con bomba calabrese, spianata, jalapenos e fiamme di gusto!',
    price: '8.50',
    image: '/images/infernale_burger_1775148346422.png'
  },
  {
    id: 3,
    name: 'LAMEZIA SPECIAL',
    description: 'Il classico della casa con cipolla rossa di Tropea IGP caramellata e caciocavallo.',
    price: '8.00',
    image: '/images/lamezia_special_1775148578189.png'
  },
  {
    id: 4,
    name: 'CRISPY CHICKEN',
    description: 'Pollo fritto croccante, maionese al pepe nero, iceberg e pomodoro fresco.',
    price: '7.50',
    image: '/images/crispy_chicken_1775148558823.png'
  }
];

export default function Menu() {
  return (
    <div className={styles.container}>
      <h1 className="section-title text-center" style={{ fontSize: '3.5rem', color: 'var(--color-ketchup)', textShadow: '2px 2px 0px var(--color-brown-dark)' }}>IL NOSTRO MENU</h1>
      <p className="text-center highlight" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', color: 'var(--color-brown-dark)', marginBottom: '3rem' }}>I Morsi Più Gustosi Della Città, preparati con amore!</p>

      <div className={styles.menuGrid}>
        {menuItems.map(item => (
          <div key={item.id} className={`comic-box ${styles.menuCard}`}>
            <Image
              src={item.image}
              alt={item.name}
              width={250}
              height={250}
              className={styles.burgerImg}
            />
            <div className={styles.cardContent}>
              <h2 className={styles.itemName}>{item.name}</h2>
              <p className={styles.itemDescription}>{item.description}</p>
              <p className={styles.itemPrice}>€{item.price}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
