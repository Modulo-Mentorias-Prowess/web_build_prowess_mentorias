import React from "react";
import "./DescriptionSection.css";
import { NavLink } from "react-router-dom";

function DescriptionSection() {
    return (
      <div className="description-container">
        <div className="description">
          <h2>PROWESS</h2>
          <p>
            Lorem ipsum, s, aut amet aspernatur officia illum pariatur perferendis sequi blanditiis ullam officiis quam nemo doloremque! Corporis blanditiis magni sunt inventore magnam reiciendis vitae fuga voluptatum ratione consequatur Est, molestias.
          </p>
          <p> amet consectetur adipisicing elit. Non alias aliquid quibusdam sit, facere quas corrupti cupiditate ullam optio dignissimos voluptate esse distinctio exercitationem quae saepe doloremque soluta eos minus.</p>

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