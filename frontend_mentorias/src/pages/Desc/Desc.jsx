import React from "react";
import "./DescriptionSection.css";
import { NavLink, useNavigate } from "react-router-dom";

function DescriptionSection() {
    return (
      <div className="description-container">
        <div className="description">
          <h2>Descripción del producto</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            pharetra neque at mauris consectetur, nec ultrices justo fermentum.
            Fusce non nulla non augue feugiat gravida. Donec rhoncus arcu at odio
            commodo tincidunt.
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
            src="https://cdn.pixabay.com/photo/2016/11/21/17/44/arches-national-park-1846759_960_720.jpg"
            alt="IMG"
          />
        </div>
      </div>
    );
  }
  
  export default DescriptionSection;