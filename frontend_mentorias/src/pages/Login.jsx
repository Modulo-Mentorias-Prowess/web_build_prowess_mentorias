import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from '../assets/logo1.webp'

const Login = () => {
  const normalStyle = "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
  const errorStyle =  "shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
  const navigate = useNavigate();
  const [wrongCredentials, setWrongCredentials] = useState(false)
  const [userData, setUserData] = useState({
    userName: "",
    password: "",
  });
  const [errorUserData, setErrorUserData] = useState({
      userName: false,
      password: false
    })
  const url = "http://localhost:3001"

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e)=>{
    e.preventDefault()
    setWrongCredentials(false)
    if(userData.userName == ""){
        errorUserData.userName = true
    }
    errorUserData.userName = false
    if(userData.password == ""){
        errorUserData.password = true
    }
    errorUserData.password = false

    axios.post(`${url}/login`, userData )
         .then((response) => {
            localStorage.setItem("username", userData.userName)
            localStorage.setItem("accessToken", response.data.accessToken)
            localStorage.setItem("refreshToken", response.data.refreshToken)
            navigate("/dashboard")
        }).catch((err)=>{
            if(err.response.status == 401){
                setWrongCredentials(true)
            }
        })


  }
  return (
    <div className="w-full flex justify-center items-center min-h-screen bg-gray-200" >
    <div class="w-full max-w-xs ">
      <form class="bg-white shadow-xl rounded-lg px-8 pt-6 pb-8 mb-4">
        <img src={logo} alt="logo" className="my-3"/>
        <h1 className="text-center font-black text-xl mb-3">INICIAR SESIÓN </h1>
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Nombre de usuario
          </label>
          <input
            className={errorUserData.userName ? errorStyle : normalStyle}
            id="username"
            type="text"
            name="userName"
            onChange={handleChange}
            placeholder="Nombre de usuario"
          />
          {
            errorUserData.userName ? (
                <p class="text-red-500 text-xs italic">Porfavor proporcione un usuario.</p>
            ) : (null)
          }
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            Contraseña
          </label>
          <input
            className={errorUserData.password ? errorStyle : normalStyle}
            id="password"
            name="password"
            onChange={handleChange}
            type="password"
            placeholder="******************"
          />
          {
            errorUserData.password ? (
                <p class="text-red-500 text-xs italic">Porfavor proporcione una contraseña.</p>
            ) : (null)
          }
          
        </div>

        {
            wrongCredentials ? (
                <p class="text-red-500 text-xs italic mb-4 text-center">Las credenciales proporcionadas son erradas.</p>
            ) : (null)
        }
        <div class="flex items-center justify-center">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleLogin}
          >
            Sign In
          </button>
          
        </div>
        
      </form>
      <p class="text-center text-gray-500 text-xs">
        &copy;Todos los derechos reservados. Prowess Ecuador 2021.
      </p>
    </div>
    </div>

  );
};

export default Login;
