import "../styles-components/NavbarMobile.css";
import menuButton from "../images/hamburger_menu.png";
import React, { useState } from "react";
import MenuNav from "../components/MenuNav";

function NavbarMobile() {
  const [isShown, setShow] = useState(false);

  const showMenu = () => {
    setShow((prev) => !prev);
  };

  return (
    <div className="navmobile-main-container">
      <img
        src={menuButton}
        alt="menu"
        className="button-menu"
        onClick={showMenu}
      />
      {isShown && <MenuNav />}
    </div>
  );
}

export default NavbarMobile;
