import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo1.webp";
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill, RiErrorWarningFill } from "react-icons/ri";

const Login = () => {
  const normalStyle =
    "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline";
  const errorStyle =
    "shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline";
  const navigate = useNavigate();
  const [wrongCredentials, setWrongCredentials] = useState(false);
  const [userData, setUserData] = useState({
    userName: "",
    password: "",
  });

  const [errorUserData, setErrorUserData] = useState({
    userName: false,
    password: false,
  });

  const url = "https://web-build-prowess-mentorias-vipa.onrender.com";

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setWrongCredentials(false);
    if (userData.userName === "") {
      setErrorUserData({ ...errorUserData, userName: true });
    } else {
      setErrorUserData({ ...errorUserData, userName: false });
    }
    if (userData.password === "") {
      setErrorUserData({ ...errorUserData, password: true });
      return;
    } else {
      setErrorUserData({ ...errorUserData, password: false });
    }

    axios
      .post(`${url}/login`, userData)
      .then((response) => {
        localStorage.setItem("username", userData.userName);
        localStorage.setItem("full_name", response.data.full_name);
        localStorage.setItem("user_role", response.data.role_user);
        localStorage.setItem("accessToken", response.data.accessToken);
        localStorage.setItem("refreshToken", response.data.refreshToken);
        navigate("/");
      })
      .catch((err) => {
        if (err.response.status === 401) {
          setWrongCredentials(true);
        }
      });
  };
  return (
    <div className="w-full flex justify-center items-center min-h-screen">
      <div className="w-full flex justify-center items-center min-h-screen bg-gray-200">
        <div className="w-full max-w-xs ">
          <form className="bg-white shadow-xl rounded-lg px-8 pt-6 pb-8 mb-4">
            <img src={logo} alt="logo" className="my-3" />
            <h1 className="text-center font-black text-xl mb-3">
              INICIAR SESIÓN{" "}
            </h1>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                <div className="flex items-center ">
                  <FaUserAlt className="mr-3" /> Nombre de usuario
                </div>
              </label>
              <input
                className={errorUserData.userName ? errorStyle : normalStyle}
                id="username"
                type="text"
                name="userName"
                onChange={handleChange}
                placeholder="Nombre de usuario"
              />
              {errorUserData.userName ? (
                <p class="text-red-500 text-xs italic">
                  Porfavor proporcione un usuario.
                </p>
              ) : null}
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                <div className="flex items-center">
                  <RiLockPasswordFill className="mr-3" />
                  Contraseña
                </div>
              </label>
              <input
                className={errorUserData.password ? errorStyle : normalStyle}
                id="password"
                name="password"
                onChange={handleChange}
                type="password"
                placeholder="******************"
              />
              {errorUserData.password ? (
                <p class="text-red-500 text-xs italic">
                  Porfavor proporcione una contraseña.
                </p>
              ) : null}
            </div>

            {wrongCredentials ? (
              <p class="text-red-500 text-xs italic mb-4 text-center flex justify-center items-center">
                <RiErrorWarningFill className="mr-2" fontSize={15} />
                Las credenciales proporcionadas son erradas.
              </p>
            ) : null}
            <div className="flex items-center justify-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClickCapture={handleLogin}
                onClick={handleLogin}
              >
                Iniciar sesión
              </button>
            </div>
            <div className="flex items-center justify-center">
              <p>
                ¿No tienes una cuenta?
                <a href="/register" className="mr-3">
                  {" "}
                  Regístrate
                </a>
              </p>
            </div>
          </form>
          <p className="text-center text-gray-500 text-xs">
            &copy;Todos los derechos reservados. Prowess Ecuador 2021.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
