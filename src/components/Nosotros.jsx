import mainFlower from "../images/nosotros-image.jpeg";
import flowers from "../images/flowers.webp";
import heb from "../images/heb-logo-nosotros.webp";
import waltmart from "../images/logo-waltmart.png";
import homeDepot from "../images/Home-Depot-logo-nosotros.webp";
import soriana from "../images/soriana-logo-nosotros.webp";

//styles
import "../styles-components/Nosotros.css";

function Nosotros() {
  return (
    <div className="nosotros-main-container">
      <img className="nosotros-img" src={mainFlower} />
      <img className="nosotros-img-02" src={flowers} />
      <div className="nosotros-text-container">
        <h1>Nuestros socios</h1>
        <p>
          Contamos con alianzas comerciales para todo tipo de empresas o
          negocios.
        </p>
        <p>
          Nuestros clientes son top en sus especialidades abarcando el aréa de
          USA, México y CentroAmérica
        </p>
        <h2>Clientes que confían en Nosotros</h2>
        <div className="logos-socios">
          <img className="logo-socio" src={heb} />
          <img className="logo-socio" src={waltmart} />
          <img className="logo-socio" src={homeDepot} />
          <img className="logo-socio" src={soriana} />
        </div>
      </div>
    </div>
  );
}

export default Nosotros;
