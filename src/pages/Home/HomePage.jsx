import Hero from '../../components/Hero/Hero';
import Header from '../../components/Header/Header';
import BookCollection from '../../components/BookCollection/BookCollection';
import HowItWorks from '../../components/HowItWorks/HowItWorks';
import Reviews from '../../components/Reviews/Reviews';
import Promo from '../../components/Promo/Promo';
import Footer from '../../components/Footer/Footer';

function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <BookCollection />
      <HowItWorks />
      <Reviews />
      <Promo />
      <Footer />
    </>
  );
}
export default HomePage;
