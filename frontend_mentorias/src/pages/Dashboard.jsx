import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CarruselDashboard() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div>
        <img src="https://via.placeholder.com/350x200" alt="Slide 1" />
      </div>
      <div>
        <img src="https://via.placeholder.com/350x200" alt="Slide 2" />
      </div>
      <div>
        <img src="https://via.placeholder.com/350x200" alt="Slide 3" />
      </div>
      <div>
        <img src="https://via.placeholder.com/350x200" alt="Slide 4" />
      </div>
      <div>
        <img src="https://via.placeholder.com/350x200" alt="Slide 5" />
      </div>
      <div>
        <img src="https://via.placeholder.com/350x200" alt="Slide 6" />
      </div>
    </Slider>
  );
}

const Dashboard = () => {
  const navigate = useNavigate();
  const userName = localStorage.getItem("username");

  useEffect(() => {
    if (!userName) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="bg-main-prowess min-h-screen">
      <Navbar />
      {/* Dashboard */}
      <CarruselDashboard />

      {/* Final */}
    </div>
  );
};

export default Dashboard;
