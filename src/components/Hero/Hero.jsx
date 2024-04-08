import './Hero.css';

import videoBG from '../../assets/y2mate.is - 01--KAFxe8rdzY-720p-1712579543.mp4';
import Button from '../Button/Button';

function Hero() {
  return (
    <section className="hero">
      <video src={videoBG} autoPlay muted loop></video>
      <div className="hero-container">
        <div className="hero-text">
          <h4>by sensation album</h4>
          <h1>Wedding Photobook Service in Canada</h1>
          <p>
            The first personalized offerings service. Specializing in premium wedding photo books,
            professional printing and handmade elegance.
          </p>
        </div>
        <div className="hero-buttons">
          <Button link="#" text="Preserve wedding memories" />
          <a href="#" className="link">
            Not from Canada? See other regions
          </a>
        </div>
      </div>
    </section>
  );
}
export default Hero;
