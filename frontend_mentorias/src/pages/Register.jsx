import React, {useEffect, useState} from 'react'
import { useNavigate, Link } from 'react-router-dom'
import logo from '../assets/logo1.webp'
import {FaUserAlt} from 'react-icons/fa'
import {RiLockPasswordFill, RiErrorWarningFill} from 'react-icons/ri'
import {IoIosContact, IoIosPricetag} from 'react-icons/io'
import {GrPrevious} from 'react-icons/gr'
import axios from "axios";

const Register = () => {
  const userName = localStorage.getItem("username")
  const role_user = localStorage.getItem("user_role")
  const navigate = useNavigate()
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const normalStyle = "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
  const errorStyle =  "shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"

  const roles = [
    {name:"none", desc:"Seleccione un rol..."},
    {name: "admin", desc: "Administrador"},
    {name: "user", desc: "Usuario"},
  ]

  const [userData, setUserData] = useState({
    userName: "",
    password: "",
    full_name: "",
    role_user: "none",
  });
  const [errorUserData, setErrorUserData] = useState({
      userName: false,
      password: false,
      full_name: false,
      role_user: false,
    })
  const url = "http://localhost:3001"

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };


  useEffect(() => {
    if(!userName){
        navigate("/login")
    }
    if(role_user != "admin"){
        navigate("/")
    }
  }, [])
  
  const handleRegister = () => {
    setErrorUserData({
        userName: userData.userName == "",
        password: userData.password == "",
        full_name: userData.full_name == "",
        role_user: userData.role_user == "none",
    })
    if(!Object.values(errorUserData).every(value => value === false)){
        return
    }

    axios.post(`${url}/register`, userData)
        .then((response)=>{
            setSuccess(true)
            setTimeout(()=>{
                setSuccess(false)
            }, 2000)
        })
        .catch((err)=>{
            setError(true)
            setTimeout(()=>{
                setError(false)
            }, 3000)
        })

  }

  return (
    <div className="relative overflow-y-hidden w-full flex justify-center items-center min-h-screen bg-gray-200" >
    <div className='absolute top-1 left-1 p-3 hover:scale-125'>
        <Link
            to="/"
        >
        <GrPrevious 
            fontSize={25}
            />
        </Link>
    </div>
    <div className="w-full max-w-lg mt-3">
      <form className="bg-white shadow-xl rounded-lg px-8 pt-6 pb-4 mb-4 ">
        <img src={logo} alt="logo" className="my-3"/>
        <h1 className="text-center font-black text-xl mb-3">REGISTRAR</h1>
        <div className='flex justify-between items-center'>

            <div className="mb-4 flex flex-col">
            <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
            >
                <div className="flex items-center ">

                <FaUserAlt className="mr-3"/> Nombre de usuario
                </div>
            </label>
            <input
                className={errorUserData.userName ? errorStyle : normalStyle}
                type="text"
                name="userName"
                onChange={handleChange}
                placeholder="Nombre de usuario"
            />
            {
                errorUserData.userName ? (
                    <p className="text-red-500 text-xs italic">Porfavor proporcione un usuario.</p>
                ) : (null)
            }
            </div>
            <div className="mb-4 flex justify-center flex-col">
            <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
            >
                <div className="flex items-center">
                    <RiLockPasswordFill className="mr-3"/>
                Contraseña  
                </div>
            </label>
            <input
                className={errorUserData.password ? errorStyle : normalStyle}
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
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="full_name"
          >
            <div className="flex items-center">
                <IoIosContact fontSize={20} className="mr-3"/>
             Nombre Completo  
            </div>
          </label>
          <input
            className={errorUserData.full_name ? errorStyle : normalStyle}
            name="full_name"
            onChange={handleChange}
            type="text"
            placeholder="Nombre completo"
          />
          {
            errorUserData.full_name ? (
                <p className="text-red-500 text-xs italic">Porfavor proporcione un nombre.</p>
            ) : (null)
          }
          
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="role_user"
          >
            <div className="flex items-center">
                <IoIosPricetag fontSize={18} className="mr-3"/>
             Rol
            </div>

            <div className="relative mt-2">
            <select 
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
            id="grid-state"
            name="role_user"
            onChange={handleChange}
            defaultValue="none"
            >
                <option value={roles[0].name} disabled>{roles[0].desc}</option>
                {roles.slice(1,3).map((role) => (
                    <option value={role.name} key={role.name}>{role.desc}</option>
                ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
        </div>
          </label>
          
          {
            errorUserData.role_user ? (
                <p className="text-red-500 text-xs italic">Porfavor proporcione un rol.</p>
            ) : (null)
          }
          
        </div>

        {
            error ? (
                <p class="text-red-500 text-xs italic mb-4 text-center flex justify-center items-center"><RiErrorWarningFill className="mr-2" fontSize={15}/>Ooops, un error ha ocurrido.</p>
            ) : (null)
        }
        {
            success ? (
                <p class="text-green-500 text-xs italic mb-4 text-center flex justify-center items-center"><RiErrorWarningFill className="mr-2" fontSize={15}/>Usuario registrado con éxito.</p>
            ) : (null)
        }

        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleRegister}
          >
            Registrar
          </button>
          
        </div>
        
      </form>
      
    </div>
    </div>
  )
}

export default Register