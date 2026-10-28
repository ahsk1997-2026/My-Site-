import Header from '../components/Header';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import Wholesale from '../components/Wholesale';
import Products from '../components/Products';
import Benefits from '../components/Benefits';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Categories />
        <Wholesale />
        <Products />
        <Benefits />
      </main>
      <Footer />
    </>
  );
}
