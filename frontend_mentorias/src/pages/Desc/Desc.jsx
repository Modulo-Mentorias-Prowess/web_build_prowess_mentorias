import React from "react";
import "./DescriptionSection.css";
import { NavLink } from "react-router-dom";

function DescriptionSection() {
    return (
      <div className="description-container">
        <div className="description">
          <h2>PROWESS</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi minima aliquam ut, vitae dolore unde eligendi sapiente tempora. Placeat praesentium quam ullam minus veniam. Delectus illo soluta voluptate et quia!
            Voluptas, quisquam. Ipsam ex necessitatibus facere, illum harum itaque, consectetur tenetur provident consequatur voluptatum modi perferendis nam repellat. Doloribus minus magnam aliquam, id quia delectus velit fugit nulla facere doloremque!
            Sequi illo doloremque reprehenderit labore optio blanditiis quibusdam natus accusamus rem. Quidem itaque tempora atque nulla dignissimos rem sed deserunt, nemo earum voluptatum magni distinctio velit illo error. Perferendis, quidem?
            Eaque voluptas nostrum nihil quo at veritatis temporibus sunt pariatur, ipsa cum odit eum animi id, blanditiis velit quam esse corrupti, nobis eos? Quae fuga voluptate corporis asperiores velit id!
            Totam quaerat, aut amet aspernatur officia illum pariatur perferendis sequi blanditiis ullam officiis quam nemo doloremque! Corporis blanditiis magni sunt inventore magnam reiciendis vitae fuga voluptatum ratione consequatur? Est, molestias.
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