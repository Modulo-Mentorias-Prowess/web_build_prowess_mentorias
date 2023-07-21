import React from 'react';
import './insta.css';
import instagramIcon from './instagram32.svg';

function InstagramButton() {
  return (
    <a
      href="https://www.instagram.com/prowessec7/"
      className="instagram-button"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={instagramIcon} alt="Instagram" />
    </a>
  );
}

export default InstagramButton;