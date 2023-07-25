import React, { useRef } from 'react';
import './footer.css';
import instagramIcon from './instagram32.svg';

function Footer() {
  const iconRef = useRef(null);

  const handleInstagramIconClick = (event) => {
    // Comprobamos si el evento se originó desde el elemento del icono
    if (event.target === iconRef.current) {
      window.open('https://instagram.com/prowess_ec_contenido?igshid=NTc4MTIwNjQ2YQ==', '_blank');
    }
  };

  return (
    <footer className="footer">
      <p className="rights">&copy; 2023 - Todos los derechos reservados</p>
      <div className="icon-container" onClick={handleInstagramIconClick}>
        <img
          ref={iconRef} 
          src={instagramIcon}
          alt="Instagram"
          className="icon instagram-icon"
          id="instagramIcon"
        />
      </div>
    </footer>
  );
}

export default Footer;
