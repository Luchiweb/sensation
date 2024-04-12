import Hero from '../../components/Hero/Hero';
import Header from '../../components/Header/Header';
import BookCollection from '../../components/BookCollection/BookCollection';
import HowItWorks from '../../components/HowItWorks/HowItWorks';
import ExtraService from '../../components/ExtraService/ExtraService';
// import Promo from '../../components/Promo/Promo';
// import Reviews from '../../components/Reviews/Reviews';

function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <BookCollection />
      <HowItWorks />
      <ExtraService />
      {/* <Reviews /> */}
      {/* <Promo /> */}
    </>
  );
}
export default HomePage;
