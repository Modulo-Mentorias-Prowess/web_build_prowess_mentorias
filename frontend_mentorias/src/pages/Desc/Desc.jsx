import React from "react";
import "./DescriptionSection.css";
import { NavLink } from "react-router-dom";

function DescriptionSection() {
  return (
    <div className="description-container">
      <div className="description">
        <h2>PROWESS</h2>
        <p>
          Asistencia técnica para el fortalecimiento de emprendimientos de personas refugiadas, solicitantes de asilo y personas de interés de ACNUR en Pichincha y Santo Domingo de los Tsáchilas. ACNUR-HIAS-ESPE (para población en movilidad humana).
        </p>
        <h2>MENTORÍAS</h2>
        <p>
          Realizar un seguimiento continuo de los emprendimientos para tener un control adecuado de los mismos por medio de mentorías y verificar si están conformes con el trabajo realizado por parte de Prowess Ec., teniendo una idea de su crecimiento.
        </p>
        <NavLink to="/Mentorships" className="botonDesc">
        <strong>Ir a Mentorías</strong>
        </NavLink>
      </div>
      <div className="image-container">
        <img src="/2.png" alt="IMG" />
      </div>
    </div>
  );
}


function Blamck() {
  return (
    <div className="description-container">
      <div className="description">
        <h></h>
        <h></h>
        <h></h>
        <h></h>
        <h></h>
        <h></h>

      </div>
    </div>
  );
}

export default DescriptionSection;
