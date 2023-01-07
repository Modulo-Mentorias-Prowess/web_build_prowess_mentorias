import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo1.webp";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const activeStyle =
    "py-4 lg:px-2 test2 text-main-prowess  border-b-4 border-main-prowess font-semibold";
  const normalStyle =
    "py-4 lg:px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300";

  const [isNavOpen, setIsNavOpen] = useState(false);
   const navigate = useNavigate(); 

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      navigate("/login");
    }
  }, []); 

  return (
    <nav className="bg-white shadow-lg">
      <div className="lg:max-w-6xl lg:mx-auto px-4 py-3 max-w-full">
        <div className="flex justify-between w-full">
          <div className="flex  lg:flex-row flex-col">
            <div className="flex items-center py-4 ">
              <NavLink to="/">
                <img src={logo} className="w-1/5" />
              </NavLink>
              <div
                className="flex items-center justify-center"
                onClick={() => setIsNavOpen(!isNavOpen)}
              >
                <FiMenu className="lg:hidden block w-6 h-6  cursor-pointer " />
              </div>
            </div>

            <div
              className={`${
                isNavOpen ? "block " : "hidden"
              } flex w-full lg:flex lg:items-center lg:space-x-l lg:flex-row flex-col`}
            >
              <NavLink
                end
                to="/"
                className={({ isActive }) =>
                  isActive ? activeStyle : normalStyle
                }
              >
                Inicio
              </NavLink>
              <NavLink
                to="/mentorships"
                className={({ isActive }) =>
                  isActive ? activeStyle : normalStyle
                }
              >
                Mentorías
              </NavLink>
              <NavLink
                to="/managers"
                className={({ isActive }) =>
                  isActive ? activeStyle : normalStyle
                }
              >
                Encargados
              </NavLink>
              <NavLink
                to="/entrepreneurs"
                className={({ isActive }) =>
                  isActive ? activeStyle : normalStyle
                }
              >
                Emprendedores
              </NavLink>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  isActive ? activeStyle : normalStyle
                }
              >
                Productos
              </NavLink>
              <NavLink
                to="/contents"
                className={({ isActive }) =>
                  isActive ? activeStyle : normalStyle
                }
              >
                Contenidos
              </NavLink>
              <NavLink
                className="bg-main-prowess  hover:bg-prowess-light text-white  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                to={"/login"}
                onClick={() => {
                  localStorage.clear("accessToken");
                }}
              >
                Logout
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
