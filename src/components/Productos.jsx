import "../styles-components/Productos.css";
import Producto from "./Producto";
import data from "../flowers-data";

const productsArray = data.map((product) => {
  return (
    <Producto
      img={product.image}
      title={product.title}
      price={product.price}
      description={product.description}
    />
  );
});

function Productos() {
  return (
    <div className="productos-main-container">
      <h1>Productos</h1>
      <h2>Selecciona tus productos favoritos</h2>
      <div className="flores-container">{productsArray}</div>
    </div>
  );
}

export default Productos;
