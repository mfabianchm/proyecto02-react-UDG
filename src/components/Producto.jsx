import "../styles-components/Producto.css";
import flower from "../images/flor-01.png";

function Producto(props) {
  return (
    <div className="product-main-container">
      <img src={props.img} alt="flor" className="product-img"></img>
      <p className="price">{props.price}</p>
      <h1 className="product-title">{props.title}</h1>
      <p className="product-description">{props.description}</p>
      <button className="product-button">Agregar al carrito</button>
    </div>
  );
}

export default Producto;
