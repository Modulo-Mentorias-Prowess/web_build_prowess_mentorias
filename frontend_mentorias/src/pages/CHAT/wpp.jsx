import React from 'react';
import './wpp.css';
import whatsappIcon from './whatsapp32.svg';

function WhatsAppButton() {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=593991234567&text=MENSAJE%20DE%20PRUEBA"
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={whatsappIcon} alt="WhatsApp" />
    </a>
  );
}

export default WhatsAppButton;