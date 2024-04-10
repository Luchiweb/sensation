import BookCollection from '../../components/BookCollection/BookCollection';
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
    </>
  );
}
export default HomePage;
