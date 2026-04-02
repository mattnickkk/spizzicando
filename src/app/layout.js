import './globals.css'
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Spizzicando - I Morsi Più Gustosi Della Città!',
  description: 'Street Food, Hamburger, e specialità a Lamezia Terme. Consumazione sul posto, ritiro e consegna.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body>
        <div className="app-wrapper">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
