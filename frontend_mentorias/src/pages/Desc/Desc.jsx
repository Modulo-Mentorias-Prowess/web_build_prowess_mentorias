import React from "react";
import "./DescriptionSection.css";
import { NavLink } from "react-router-dom";

function DescriptionSection() {
    return (
      <div className="description-container">
        <div className="description">
          <h2>PROWESS</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint deserunt aperiam doasdasdadasloribus pariatur nostrum nisi. Blanditiis iste laborum expedita, ratione excepturi non dolor ducimus distinctio, vel maxime illo saepe nihil.
             
             Hola Mundo 
          </p>
          <br />
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos facilis enim et hic sequi libero nobis suscipit, fuga mollitia nemo. Voluptatem quasi repellat mollitia enim provident eaque velit excepturi sit?</p>

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