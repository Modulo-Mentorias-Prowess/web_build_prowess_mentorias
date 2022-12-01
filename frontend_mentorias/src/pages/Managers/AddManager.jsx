import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { IoArrowBackOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import axios from "axios";
import {v4 as uuidv4} from 'uuid'

const AddManager = () => {
    const navigate = useNavigate()
    const [managerData, setManagerData] = useState({
        id: "",
        names: "",
        last_names: "",
        email: "",
        address: ""
    })


    const handleChange = (e) => {
        setManagerData({...managerData  , [e.target.name]: e.target.value})
    }

    //TODO: VALIDATE DATA OUT OF FOCUS 
    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    /**
     * Creates manager in the database.
     * @param {Event} e: form submit event 
     * @returns 
     */
    const handleSubmit = (e) =>{
        e.preventDefault()
        let data = managerData
        data.id = uuidv4()
        if(!validateEmail(managerData.email) || !managerData.email || !managerData.last_names || !managerData.names){
            alert("Porfavor rellene todos los campos.")
            return
        }

        axios.post("http://localhost:3001/createManager", {manager: data})
            .then((response) => {
                navigate("/managers")
            })
            .catch((err)=>{
                // TODO: PROPER EXCEPTION HANDLING
                alert("Hubo un error al enviar los datos")
            })



    }


  return (
    <div>
      <Navbar />
      <div className="p-10 flex justify-center items-center">
        <form autoComplete="off" className="w-full md:w-3/4 flex flex-col">
          <div className="flex items-center mb-5">
            <Link
              to="/managers"
              className="flex justify-center items-center hover:scale-105 hover:-translate-x-2 transition-all ease-in-out hover:text-main-prowess"
            >
              <IoArrowBackOutline fontSize={35} />
            </Link>
            <h1 className="ml-3 font-bold text-4xl">
              Agregar un nuevo encargado
            </h1>
          </div>

          <div className="flex w-full  flex-wrap">
            <div className="md:w-1/3 w-full p-2 ">

                <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
                >
                Nombres
                </label>
                <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                name="names"
                onChange={handleChange}
                placeholder="Nombres..."
                />
            </div>
            <div className="md:w-1/3 w-full p-2">

                <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
                >
                Apellidos
                </label>
                <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name="last_names"
                onChange={handleChange}
                type="text"
                placeholder="Apellidos..."
                />
            </div>
            
            <div className="md:w-1/3 p-2 w-full">

                <label
                className=" uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
                >
                Email
                </label>
                <input
                className="appearance-none  w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name="email"
                onChange={handleChange}
                type="email"
                placeholder="ejemplo@ejemplo.com"
                />
            </div>
            <div className="p-2 w-full">

                <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
                >
                Dirección
                </label>
                <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name="address"
                onChange={handleChange}
                type="text"
                placeholder="Av. Ejemplo y Ejemplo Oe4-76"
                />
            </div>
            </div>

            <div className="w-full flex justify-end mt-3 p-2">
          <button 
            onClick={handleSubmit}
            className="bg-transparent flex justify-center items-center hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Registrar Encargado <FiArrowRight fontSize={20}/>
          </button>

          </div>    
        </form>
      </div>
    </div>
  );
};

export default AddManager;
