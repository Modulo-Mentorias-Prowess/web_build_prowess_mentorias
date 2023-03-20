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
			title: 'El Bosque es bonito',
			image:
				'https://cdn.pixabay.com/photo/2020/11/09/15/12/trail-5726987_960_720.jpg',
		},
		{
			id: '2',
			title: '2',
			image:
				'https://cdn.pixabay.com/photo/2011/09/27/18/52/bird-9950_960_720.jpg',
		},
		{
			id: '3',
			title: '3.',
			image:
				'https://cdn.pixabay.com/photo/2017/12/27/14/02/friends-3042751_960_720.jpg',
		},
		{
			id: '4',
			title: '4.',
			image:
				'https://cdn.pixabay.com/photo/2016/11/21/17/44/arches-national-park-1846759_960_720.jpg',
		},
		{
			id: '5',
			title: '5.',
			image:
				'https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_1280.jpg',
		},
	]

  useEffect(() => {
    if (!userName) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="bg-main-prowess min-h-screen">
      <Navbar />
      {/* Dashboard */}""
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
