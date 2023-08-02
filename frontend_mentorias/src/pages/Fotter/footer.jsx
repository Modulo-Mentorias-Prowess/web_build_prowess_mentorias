import React, { useRef } from 'react';
import './footer.css';
import instagramIcon from './instagram32.svg';
import tiktokIcon from './tiktok32.svg';

function Footer() {
  const instagramIconRef = useRef(null); // Referencia para el ícono de Instagram
  const tiktokIconRef = useRef(null); // Referencia para el ícono de TikTok

  const handleInstagramIconClick = (event) => {
    // Comprobamos si el evento se originó desde el elemento del icono de Instagram
    if (event.target === instagramIconRef.current) {
      window.open('https://instagram.com/prowess_ec_contenido?igshid=NTc4MTIwNjQ2YQ==', '_blank');
    }
  };

  const handleTikTokIconClick = (event) => {
    // Comprobamos si el evento se originó desde el elemento del icono de TikTok
    if (event.target === tiktokIconRef.current) {
      window.open('https://www.tiktok.com/@prowessecuador?_t=8eUBct5E5nK&_r=1', '_blank');
    }
  };

  return (
    <footer className="footer">
      <p className="rights">&copy; 2023 - Todos los derechos reservados</p>
      <div className="icon-container">
        <img
          ref={instagramIconRef} // Utilizar la referencia de Instagram aquí
          src={instagramIcon}
          alt="Instagram"
          className="icon instagram-icon"
          id="instagramIcon"
          onClick={handleInstagramIconClick}
        />
        <img
          ref={tiktokIconRef} // Utilizar la referencia de TikTok aquí
          src={tiktokIcon}
          alt="TikTok"
          className="icon tiktok-icon"
          id="tiktokIcon"
          onClick={handleTikTokIconClick}
        />
      </div>
    </footer>
  );
}

export default Footer;
