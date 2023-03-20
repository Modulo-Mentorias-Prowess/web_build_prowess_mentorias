import React from 'react';
import './wpp.css';
import whatsappIcon from './whatsapp32.svg';

function WhatsAppButton() {
    return (
      <a
        href="https://wa.me/"
        className="whatsapp-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={whatsappIcon} alt="WhatsApp" />
      </a>
    );
  }

export default WhatsAppButton;
