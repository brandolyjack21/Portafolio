import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [positionDiv, setPositionDiv] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null);

  const menuOptions = [
    { id: 1, iconClass: "bx bx-home", name: "Inicio", component: "home"},
    { id: 2, iconClass: "bx bx-user", name: "Acerca de", component: "about" },
    { id: 3, iconClass: "bx bx-folder", name: "Portafolio", component: "porfolio" },
    { id: 4, iconClass: "bx bxl-whatsapp", name: "Contactame" , component: "contact" },
  ];

  const bgColor = (id) => {
    setSelectedButton(id);
    setPositionDiv(!positionDiv);
  }

  const scroll = (componentId) => {
    const component = document.getElementById(componentId)
    if (component) {
      component.scrollIntoView({ behavior:'smooth' })  
    }
    
  }
  return (
    <>
      <nav className="nav">
        <section className="container-menu-amburguesa">
          <span
            className="menu-ambuerguesa"
            onClick={() => setPositionDiv(!positionDiv)}
          >
            <div className={positionDiv ? "rotateDiv" : ""}></div>
            <div className={positionDiv ? "visibilityDiv" : ""}></div>
            <div className={positionDiv ? "rotateDiv2" : ""}></div>
          </span>
        </section>
        <section
          className={positionDiv ? "nav-section container-menu" : "nav-section"}
        >
          <ul className="container-list">
            {menuOptions.map((option) => (
                <li className={ selectedButton === option.id ? "list listSelect" : "list"}  value={option.id}  onClick={
                  () => 
                  {
                    bgColor(option.id)
                    scroll(option.component)
                  }
                  }>
                  <i class={option.iconClass}></i>
                  <span className="span">{option.name}</span>
                </li>
            ))}
          </ul>
        </section>
      </nav>
    </>
  );
}

export default Nav;
