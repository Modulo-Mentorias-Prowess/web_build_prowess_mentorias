import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import {IoArrowBackOutline} from 'react-icons/io5'
import { Link, useNavigate } from "react-router-dom";
import {v4 as uuidv4} from 'uuid'
import axios from "axios";
import { FiArrowRight } from "react-icons/fi";
import  ERRORViewModal from  "../pruebamodal/modaldeprueba";
import  CONFIRMViewModal from  "../pruebamodal/Acept";

const AddManager = () => {

    const errorStyle = 'appearance-none block w-full bg-gray-200 text-gray-700 border border-red-800 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-red-500'
    const normalStyle = 'appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
    const [viewModalOpen, setViewModalOpen] = useState(false);
    const [CONFIRMviewModalOpen, setCONFIRMViewModalOpen] = useState(false);
    const navigate = useNavigate();
    const [errorType, setErrorType]= useState("");



    //metodo cerrar ventana modal error
    const closeModal = () => {
      setViewModalOpen(false);
      setCONFIRMViewModalOpen(false);
    }
  //metodo abrir ventana modal error 
    const openModal = (controlState,typeErr) => {
      controlState(true);
      setErrorType(typeErr);
    };

    const [errors, setErrors] = useState({
      id: false,
      last_names: false,
      email: false,
      address: false
    })
    const [managerData, setManagerData] = useState({
        id: "",
        names: "",
        last_names: "",
        email: "",
        address: ""
    })

    const validateData = (data) => {

      setErrors({
        id: !data.id,
        names: !data.names,
        last_names: !data.last_names,
        email: !data.email,
        address: !data.address
      })
      
      if (!Object.values(errors).every((value) => value === false)) {
        return true
      }

      return false
    }

    
    const handleLostFocus = () => {
      let data = managerData
      //data.price = parseFloat(data.price)
      if(validateData(data)){
        return
      }
    }

    const handleChange = (e) => {
        setManagerData({...managerData  , [e.target.name]: e.target.value})
    }

    //TODO: VALIDATE DATA OUT OF FOCUS 
    function validateEmail(email) {
        var re = /\S+@espe\.edu\.ec/;
        return re.test(email);
    }

    const openCONFIRMModal = (controlState) => {
      controlState(true);
    };

    const closeCONFIRMModal = () => {
      setCONFIRMViewModalOpen(false);
      navigate("/managers")
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
          if(!managerData.email || !managerData.last_names || !managerData.names){
              //alert("Porfavor rellene todos los campos.")
              openModal(setViewModalOpen,'Por favor verifique que los campos no esten vacios')
              return
          }else{
            if(!validateEmail(managerData.email)){
              //alert("Solo se aceptan correos del dominio espe.edu.ec")
              openModal(setViewModalOpen,'Solo se aceptan correos del dominio espe.edu.ec')
              return
            }
          }
          openCONFIRMModal(setCONFIRMViewModalOpen); // Mostrar modal de éxito si todo está correcto

        

        axios.post("http://localhost:3001/createManager", {manager: data})
            .then((response) => {
              openCONFIRMModal(setCONFIRMViewModalOpen)
            })
            .catch((err)=>{
                // TODO: PROPER EXCEPTION HANDLING
                openModal(setViewModalOpen,err)
               // alert("Hubo un error al enviar los datos")
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
                className={errors.names ? errorStyle : normalStyle}
                //className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                name="names"
                onChange={handleChange}
                onBlur={handleLostFocus}
                placeholder="Nombres..."
                />
                {
                  errors.names && (
                    <p className='text-red-600 italic'>Este campo es Obligatorio</p>
                  )
                }
            </div>
            <div className="md:w-1/3 w-full p-2">

                <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
                >
                Apellidos
                </label>
                <input

                //className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                
                className={errors.last_names ? errorStyle : normalStyle}
                name="last_names"
                onChange={handleChange}
                onBlur={handleLostFocus}
                type="text"
                placeholder="Apellidos..."
                /> 
                {
                  errors.last_names && (
                    <p className='text-red-600 italic'>Este campo es Obligatorio</p>
                  )
                }
            </div>
            
            <div className="md:w-1/3 p-2 w-full">

                <label
                className=" uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
                >
                Email
                </label>
                <input
                className={errors.email ? errorStyle : normalStyle}
                name="email"
                onChange={handleChange}
                type="email"
                placeholder="ejemplo@espe.edu.ec"
                />
                {
                  errors.email && (
                    <p className='text-red-600 italic'>Este campo es Obligatorio</p>
                  )
                }
            </div>
            <div className="p-2 w-full">

                <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
                >
                Dirección
                </label>
                <input
                //className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                className={errors.address ? errorStyle : normalStyle}
                name="address"
                onChange={handleChange}
                onBlur={handleLostFocus}
                type="text"
                placeholder="Av. Ejemplo y Ejemplo Oe4-76"
                />
                {
                  errors.address && (
                    <p className='text-red-600 italic'>Este campo es Obligatorio</p>
                  )
                }
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
      <div>
      
        <ERRORViewModal
            closeModal={closeModal}
            viewModalOpen={viewModalOpen}
            errorType={errorType}
        />
        <CONFIRMViewModal
            closeModal={closeCONFIRMModal}
            viewModalOpen={CONFIRMviewModalOpen}
        />
      </div>
    </div>
  );
};

export default AddManager;
