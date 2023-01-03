import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import {IoArrowBackOutline} from 'react-icons/io5'
import { Link, useNavigate } from "react-router-dom";
import {v4 as uuidv4} from 'uuid'
import axios from "axios";
import { FiArrowRight } from "react-icons/fi";

const AddContent=() => {
  const navigate = useNavigate()
  const [ contentData, setContentData] = useState({
    id: "",
    name: "",
    description: "",
  })

  const handleChange = (c) => {
    setContentData({...contentData, [c.target.name]: c.target.value})
  }

  /**
   * Creates a new content in the database.
   * @param {Event} c: form submit event 
   */
  const handleSubmit = (c) => {
    c.preventDefault()
    let data = {content: contentData}
    data.content.id = uuidv4()

    axios.post("http://localhost:3001/createContent", data)
        .then((response) => {
            navigate("/contents")
        })
        .catch((err)=>{
            //TODO: Handle errors 
            alert("Hubo un error registrando el contenido.")
        })
  }

  return (
    <div>
      <Navbar />
      <div className="p-10 flex justify-center items-center">
        <form autoComplete="off" className="w-full md:w-3/4 flex flex-col">
            <div className="flex items-center mb-5">
                <Link
                    to="/contents"
                    className="flex justify-center items-center hover:scale-105 hover:-translate-x-2 transition-all ease-in-out hover:text-main-prowess"
                >
                    <IoArrowBackOutline fontSize={35}/>
                </Link>
            <h1 className="ml-3 font-bold text-4xl">Agregar un nuevo contenido</h1>
            </div>
            <h3 className="font-medium text-xl">Datos del contenido</h3>
          <div className="flex w-full  flex-wrap">
            <div className="md:w-1/2 w-full p-2 ">

                <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
                >
                Contenido
                </label>
                <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                name="name"
                onChange={handleChange}
                placeholder="Contenido..."
                />
            </div>

            <div className="md:w-1/2 w-full p-2 ">
                <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
                >
                Descripción
                </label>
                <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                name="description"
                onChange={handleChange}
                placeholder="Descripción..."
                />
            </div> 
          </div>
          
          <div className="w-full flex mt-3  ">
          <button 
            onClick={handleSubmit}
            className="bg-transparent flex justify-center items-center hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Registrar Contenido <FiArrowRight fontSize={20}/>
          </button>

          </div>
        </form>
      </div>
    </div>
  );
}

export default AddContent;
