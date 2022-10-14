import "../styles-components/Navbar.css";

function Navbar() {
  return (
    <header className="header-container">
      <nav className="nav-container">
        <div className="links-container-nav">
          <a href="#" class="link-nav-itself">
            Inicio
          </a>
          <a href="#" class="link-nav-itself">
            Nosotros
          </a>
          <a href="#" class="link-nav-itself">
            Servicios
          </a>
          <a href="#" class="link-nav-itself">
            Galería
          </a>
          <a href="#" class="link-nav-itself">
            Contacto
          </a>
        </div>
        <button className="contact-us-button-nav">Contáctanos</button>
      </nav>
    </header>
  );
}

export default Navbar;
