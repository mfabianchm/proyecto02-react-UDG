import flowerImage from "../images/flowers.webp";
import "../styles-components/Hero.css";

function Hero() {
  return (
    <div className="hero-main-container">
      <div className="hero-left-container">
        <h1>Somos la tienda de flores número 1 en México</h1>
        <button className="hero-button">Comenzar</button>
      </div>
      <div className="hero-right-container">
        <img className="hero-img" src={flowerImage} />
      </div>
    </div>
  );
}

export default Hero;
