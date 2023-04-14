import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import {IoArrowBackOutline} from 'react-icons/io5'
import { Link, useNavigate } from "react-router-dom";
import {v4 as uuidv4} from 'uuid'
import axios from "axios";
import { FiArrowRight } from "react-icons/fi";
import  ERRORViewModal from  "../pruebamodal/modaldeprueba";
import  CONFIRMViewModal from  "../pruebamodal/Acept";

const AddContent=() => {
  const errorStyle = 'appearance-none block w-full bg-gray-200 text-gray-700 border border-red-800 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-red-500'
  const normalStyle = 'appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
  const [ERRORviewModalOpen, setERRORViewModalOpen] = useState(false);
  const [CONFIRMviewModalOpen, setCONFIRMViewModalOpen] = useState(false);
  const navigate = useNavigate();
  const [errorType, setErrorType]= useState("");

  
  const [ contentData, setContentData] = useState({
    id: "",
    name: "",
    description: "",
  })

  const [errors, setErrors] = useState({
    id: false,
    name: false,
    description: false,
    
    
  })

  const handleChange = (c) => {
    setContentData({...contentData, [c.target.name]: c.target.value})
  }

  const closeERRORModal = () => {
    setERRORViewModalOpen(false);
    

  }

  const closeCONFIRMModal = () => {
    setCONFIRMViewModalOpen(false);
    navigate("/contents")
  }


  const openERRORModal = (controlState,typeErr) => {
    controlState(true);
    setErrorType(typeErr);
  };
  
  const openCONFIRMModal = (controlState) => {
    controlState(true);
  };

  const validateData = (data) => {

    setErrors({
      id: !data.id,
      name: !data.name,
      description: !data.description,
    })
    
    if (!Object.values(errors).every((value) => value === false)) {
      //alert("ingrese todos los datos")
      return true
    }

    return false
  }


  const handleLostFocus = () => {
    let data = contentData
    
    if(validateData(data)){
     
      return
    }
  }
  
  /**
   * Creates a new content in the database.
   * @param {Event} c: form submit event 
   */

  
  const handleSubmit = (c) => {
    c.preventDefault()
    let data = {content: contentData}
    //let valid= true
    data.content.id = uuidv4()
    //VALIDA DATOS
    if(validateData(data)){

      axios.post("http://localhost:3001/createContent", data)
          .then((response) => {
              openCONFIRMModal(setCONFIRMViewModalOpen)
              //navigate("/contents")
              //valid=true
              
          })
          .catch((err)=>{
              //TODO: Handle errors 
              //alert("Hubo un error registrando el contenido.")
              //handleSelect(operation.VIEW);
             openERRORModal(setERRORViewModalOpen,err)
             
             
  
          })
          // if(valid){
          //   openCONFIRMModal(setCONFIRMViewModalOpen)
          //   //navigate("/contents")
          //   alert(valid)
          // }else{
          //   alert(valid)
          //   openERRORModal(setERRORViewModalOpen,'Verifique que todos los campos esten llenos')
          // }
    }
        
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
                className={errors.name ? errorStyle : normalStyle}
                
                // className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleLostFocus}
                placeholder="Contenido..."
                />
                {
                  errors.name && (
                    <p className='text-red-600 italic'>Este campo es Obligatorio</p>
                  )
                }
            </div>

            <div className="md:w-1/2 w-full p-2 ">
                <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
                >
                Descripción
                </label>
                <input
                //className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                className={errors.description ? errorStyle : normalStyle}
                type="text"
                name="description"
                onChange={handleChange}
                onBlur={handleLostFocus}
                placeholder="Descripción..."
                />
                {
                  errors.description && (
                    <p className='text-red-600 italic'>Ingrese una descripción valida.</p>
                  )
                }
            </div> 
          </div>
          
          <div className="w-full flex mt-3  ">
          <button
            
            onClick={handleSubmit}
            //onClick={() => handleSelect(operation.VIEW)}
            className="bg-transparent flex justify-center items-center hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            >
            Registrar Contenido <FiArrowRight fontSize={20}/>
            
          </button>
          </div>
        </form>
      </div>
      <div>
        <ERRORViewModal
            closeModal={closeERRORModal}
            viewModalOpen={ERRORviewModalOpen}
            errorType={errorType}
        />
        <CONFIRMViewModal
            closeModal={closeCONFIRMModal}
            viewModalOpen={CONFIRMviewModalOpen}
           
        />
      </div>
      
    </div>
  );
}

export default AddContent;
