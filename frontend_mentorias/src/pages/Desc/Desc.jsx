import React from "react";
import "./DescriptionSection.css";
import { NavLink } from "react-router-dom";

function DescriptionSection() {
    return (
      <div className="description-container">
        <div className="description">
          <h2>PROWESS</h2>
          <p>
              Asistencia técnica para el fortalecimiento de emprendimientos de personas refugiadas, solicitantes de asilo y personas de interés de ACNUR en Pichincha y Santo Domingo de los Tsáchilas ACNUR-HIAS-ESPE- (para población en movilidad humana).
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