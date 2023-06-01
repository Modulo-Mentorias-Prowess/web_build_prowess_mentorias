import React from "react";
import "./DescriptionSection.css";
import { NavLink } from "react-router-dom";

function DescriptionSection() {
    return (
      <div className="description-container">
        <div className="description">
          <h2>PROWESS</h2>
          <p>
            Texto de prueba 1
          </p>

          <NavLink
                to="/Mentorships"
                className="botonDesc"
              >
                Comprar Ahora
              </NavLink>
 

         </div>
        <div className="image-container">
          <img
            src="/2.png"
            alt="IMG"
          />
        </div>
      </div>
    );
  }
  
  export default DescriptionSection;