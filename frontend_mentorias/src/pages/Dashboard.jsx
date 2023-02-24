import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  const navigate = useNavigate();
  const userName = localStorage.getItem("username");

  useEffect(() => {
    if (!userName) {
      navigate("/login");
    }
  }, [])
 
  return (
    <div className="bg-main-prowess min-h-screen"> 
      <Navbar />
    
    </div>
  );
};

export default Dashboard;
