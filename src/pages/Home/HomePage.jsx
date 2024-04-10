import BookCollection from '../../components/BookCollection/BookCollection';
import ExtraService from '../../components/ExtraService/ExtraService';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import HowItWorks from '../../components/HowItWorks/HowItWorks';

function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <BookCollection />
      <HowItWorks />
      <ExtraService />
    </>
  );
}
export default HomePage;
