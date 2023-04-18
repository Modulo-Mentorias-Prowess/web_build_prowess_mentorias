import  ERRORViewModal from  "../pruebamodal/modaldeprueba"
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FiArrowRight } from 'react-icons/fi'
import { IoArrowBackOutline } from 'react-icons/io5'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import {v4 as uuidv4} from 'uuid'
import  CONFIRMViewModal from  "../pruebamodal/Acept";



const AddProduct = () => {
    const navigate = useNavigate()
    const [viewModalOpen, setViewModalOpen] = useState(false);
    const [errorType, setErrorType]= useState("");
    const [CONFIRMviewModalOpen, setCONFIRMViewModalOpen] = useState(false);
    const [product, setProduct] = useState({
      price: null,
      name: null,
      description: null,
      entrepreneurs: null
    })
    const [entrepreneurs, setEntrepreneurs] = useState([])
    const [query, setQuery] = useState("")
    // error handling
    const [errors, setErrors] = useState({
      name: false,
      description: false,
      price: false,
      entrepreneur: false
    })

    const errorStyle = 'appearance-none block w-full bg-gray-200 text-gray-700 border border-red-800 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-red-500'
    const normalStyle = 'appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'



    const closeModal = () => {
      setViewModalOpen(false);
      setCONFIRMViewModalOpen(false);
    }
  
    const openModal = (controlState,typeErr) => {
      controlState(true);
      setErrorType(typeErr);
    };

    const openCONFIRMModal = (controlState) => {
    controlState(true);
  };

  const closeCONFIRMModal = () => {
      setCONFIRMViewModalOpen(false);
      navigate("/products")
    }

    const handleEntrepreneurSelect = (e) => {
        setProduct({...product, entrepreneur: e})
        setQuery(`${e.names} a ${e.last_names} - ${e.nameStore}`)
    }

    const handleSearch = (e)=>{
        setQuery(e.target.value)
    }

    useEffect(() => {
      fetchSearch()
    }, [query])
    

    const fetchSearch = ()=>{
        if(query.length >= 3){
             
            axios.get(`http://localhost:3001/searchEntrepreneur/${query}`)
            .then((data)=>{
                setEntrepreneurs(data.data)

            })
            .catch((err)=>{
                //alert("Hubo un error obteniendo los datos.")
                openModal(setViewModalOpen,err)
            })
        }else{
            setEntrepreneurs([])
        }
    }

    const validateData = (data) => {

      setErrors({
        name: !data.name,
        description: !data.description,
        price: !data.price,
        entrepreneur: !data.entrepreneur
      })
      
      if (!Object.values(errors).every((value) => value === false)) {
        return true
      }

      return false
    }

    const handleLostFocus = () => {
      let data = product
      data.price = parseFloat(data.price)
      if(validateData(data)){
        return
      }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let data = product
        data.id = uuidv4()
        data.price = parseFloat(data.price)

        // TODO: DATA VALIDATION AND UX
        
        if(validateData(data)){
          return
        }
        openCONFIRMModal(setCONFIRMViewModalOpen); // Mostrar modal de éxito si todo está correcto
        /**
          
         
        if(!data.id 
          || !data.name 
          || !data.price 
          || !data.description 
          || !data.entrepreneur){
            return
        }
        */
        axios.post("http://localhost:3001/createProduct", {product: data})
            .then((response)=>{
              openCONFIRMModal(setCONFIRMViewModalOpen)
            })
            .catch((err)=>{
                // TODO: Handle exceptions
                openModal(setViewModalOpen,err)
            })
        
        
    }
    const handleChange = (e) => {
        setProduct({...product  , [e.target.name]: e.target.value})
    }



  return (
    <div>
        <Navbar/>
<div className="p-10 flex justify-center items-center">
        <form autoComplete="off" className="w-full md:w-3/4 flex flex-col">
          <div className="flex items-center mb-5">
            <Link
              to="/products"
              className="flex justify-center items-center hover:scale-105 hover:-translate-x-2 transition-all ease-in-out hover:text-main-prowess"
            >
              <IoArrowBackOutline fontSize={35} />
            </Link  >
            <h1 className="ml-3 font-bold text-4xl">
              Agregar un nuevo producto
            </h1>
          </div>

          <div className="flex w-full  flex-wrap">
            <div className="md:w-1/3 w-full p-2 ">

                <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
                >
                Nombre
                </label>
                <input
                className={errors.name ? errorStyle : normalStyle}
                type="text"
                name="name"
                onBlur={handleLostFocus}
                onChange={handleChange}
                placeholder="Nombre..."
                />
                {
                  errors.name && (
                    <p className='text-red-600 italic'>Ingrese un nombre válido.</p>
                  )
                }

            </div>
            <div className="md:w-1/3 w-full p-2">

                <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
                >
                Descripción
                </label>
                <input
                name="description"
                onBlur={handleLostFocus}
                className={errors.description ? errorStyle : normalStyle}
                onChange={handleChange}
                type="text"
                placeholder="Descipción..."
                />

{
                  errors.description && (
                    <p className='text-red-600 italic'>Ingrese una descripción.</p>
                  )
                }
            </div>
            <div className="md:w-1/3 w-full p-2">

                <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
                >
                Precio ($)
                </label>
                <input
                className={errors.price ? errorStyle : normalStyle}
                name="price"
                onChange={handleChange}
                onBlur={handleLostFocus}
                type="number"
                placeholder="$10..."
                />
                {
                  errors.price && (
                    <p className='text-red-600 italic'>Ingrese un precio.</p>
                  )
                }
            </div>
            
            <div className="p-2 w-full">
                <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
                >
                Emprendedor
                </label>
                <input
                className={errors.entrepreneur ? errorStyle : normalStyle}
                name="search"
                value={query}
                onChange={handleSearch}
                onBlur={handleLostFocus}
                type="text"
                placeholder="Buscar..."
                />
            <div className={ `${entrepreneurs.length > 0 ? 'block' : 'hidden'} p-2 bg-gray-100 w-full max-h-36 overflow-y-auto`}>
                {
                    
                    entrepreneurs.map((entre, index)=>(
                        <div key={index}
                            onClick={()=>handleEntrepreneurSelect(entre)}
                            className="cursor-pointer text-sm hover:bg-gray-200"
                        >{`${entre.names} ${entre.last_names} - ${entre.nameStore}`}</div>
                    ))                     
                    
                }
            </div>

            {
                  errors.entrepreneur && (
                    <p className='text-red-600 italic'>Ingrese un emprendedor válido.</p>
                  )
                }
            </div>

            </div>

            <div className="w-full flex justify-end mt-3 p-2">
          <button 
            onClick={handleSubmit}
            className="bg-transparent flex justify-center items-center hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Registrar Producto <FiArrowRight fontSize={20}/>
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
  )
}

export default AddProduct