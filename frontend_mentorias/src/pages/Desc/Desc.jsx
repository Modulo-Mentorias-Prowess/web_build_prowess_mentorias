import React from "react";
import "./DescriptionSection.css";
import { NavLink } from "react-router-dom";

function DescriptionSection() {
    return (
      <div className="description-container">
        <div className="description">
          <h2>PROWESS</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint deserunt aperiam doloribus pariatur nostrum nisi. Blanditiis iste laborum expedita, ratione excepturi non dolor ducimus distinctio, vel maxime illo saepe nihil.
          </p>
          <br />
          <p>Aaaaaa</p>

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