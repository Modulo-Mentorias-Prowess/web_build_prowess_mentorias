import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Slider from "./Slider/Slider";

const Dashboard = () => {
  const navigate = useNavigate();
  const userName = localStorage.getItem("username");
 
  const images = [
		{
			id: '1',
			title: 'Lorem Ipsun',
			image:
				'https://cdn.pixabay.com/photo/2020/11/09/15/12/trail-5726987_960_720.jpg',
		},
		{
			id: '2',
			title: 'Lorem Ipsun.',
			image:
				'https://cdn.pixabay.com/photo/2011/09/27/18/52/bird-9950_960_720.jpg',
		},
		{
			id: '3',
			title: 'Lorem Ipsun.',
			image:
				'https://cdn.pixabay.com/photo/2017/12/27/14/02/friends-3042751_960_720.jpg',
		},
		{
			id: '4',
			title: 'Lorem Ipsun.',
			image:
				'https://cdn.pixabay.com/photo/2016/11/21/17/44/arches-national-park-1846759_960_720.jpg',
		},
		{
			id: '5',
			title: 'Lorem Ipsun.',
			image:
				'https://cdn.pixabay.com/photo/2018/10/26/22/55/harley-davidson-3775527_950_720.jpg',
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
      {/* Dashboard */}
      <Slider images={images} />
      {/* Final */}
    </div>
  );
};

export default Dashboard;
