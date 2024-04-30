import Hero from '../../components/Hero/Hero';
import Header from '../../components/Header/Header';
import BookCollection from '../../components/BookCollection/BookCollection';
import HowItWorks from '../../components/HowItWorks/HowItWorks';
import Reviews from '../../components/Reviews/Reviews';
import Promo from '../../components/Promo/Promo';
import Footer from '../../components/Footer/Footer';
import Gifts from '../../components/Gifts/Gifts';
import Shipping from '../../components/Shipping/Shipping';

function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <BookCollection />
      <HowItWorks />
      <Gifts />
      <Shipping />
      <Reviews />
      <Promo />
      <Footer />
    </>
  );
}
export default HomePage;
