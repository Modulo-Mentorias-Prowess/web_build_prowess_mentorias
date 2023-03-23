import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Slider from "./Slider/Slider";
import Descripcionsection from "./Desc/Desc";
import Footer from './Fotter/footer';
import Bubble from './CHAT/wpp';
import "./Dashbord.css";




const Dashboard = () => {
  const navigate = useNavigate();
  const userName = localStorage.getItem("username");
 
  const images = [
		{
			id: '1',
			title: 'Ella era muy bella :(',
			image:
				'Proyecto_nuevo(1).png',
		},
		{
			id: '2',
			title: '2',
			image:
				'Proyecto_nuevo(2).png',
		},
		{
			id: '3',
			title: '3.',
			image:
				'/3 (1).png',
		},
		
	]

  useEffect(() => {
    if (!userName) {
      navigate("/login");
    }
  }, );

  return (
    <div className="bg-main-prowess min-h-screen">
      <Navbar />
      {/* Dashboard */}
	  <div className="conteSlider"  >
      	<Slider className="PrincipalSlider" images={images}  />
		  
	  
	  </div>
	  <div>
	  	
		<Descripcionsection/>

	  </div>
	  <div>

		<Footer/>

	  </div>
	  {/* Final */}

		<Bubble/>
	  
    </div>
  );
};

export default Dashboard;
