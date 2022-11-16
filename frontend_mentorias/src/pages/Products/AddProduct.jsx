import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FiArrowRight } from 'react-icons/fi'
import { IoArrowBackOutline } from 'react-icons/io5'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import {v4 as uuidv4} from 'uuid'

const AddProduct = () => {
    const navigate = useNavigate()
    const [product, setProduct] = useState({})
    const [entrepreneurs, setEntrepreneurs] = useState([])
    const [query, setQuery] = useState("")

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
                alert("Hubo un error obteniendo los datos.")
            })
        }else{
            setEntrepreneurs([])
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let data = product
        data.id = uuidv4()
        data.price = parseFloat(data.price)
        
        // TODO: DATA VALIDATION AND UX
        if(!data.id || !data.name || !data.price || !data.description || !data.entrepreneur){
            return
        }

        axios.post("http://localhost:3001/createProduct", {product: data})
            .then((response)=>{
                navigate("/products")
            })
            .catch((err)=>{
                // TODO: Handle exceptions
                alert("Hubo un error al enviar los datos.")
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
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                name="name"
                onChange={handleChange}
                placeholder="Nombre..."
                />
            </div>
            <div className="md:w-1/3 w-full p-2">

                <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
                >
                Descripción
                </label>
                <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name="description"
                onChange={handleChange}
                type="text"
                placeholder="Descipción..."
                />
            </div>
            <div className="md:w-1/3 w-full p-2">

                <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
                >
                Precio ($)
                </label>
                <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name="price"
                onChange={handleChange}
                type="number"
                placeholder="$10..."
                />
            </div>
            
            <div className="p-2 w-full">
                <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
                >
                Emprendedor
                </label>
                <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name="search"
                value={query}
                onChange={handleSearch}
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

    </div>
  )
}

export default AddProduct