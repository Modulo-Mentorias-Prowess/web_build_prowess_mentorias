import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import {AiFillEye, AiFillDelete, AiFillEdit, AiOutlineClose} from 'react-icons/ai'
import Modal from 'react-modal';
import {IoIosAdd} from 'react-icons/io'
import { Link } from 'react-router-dom';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    maxWidth: '50%',
    maxHeight: '80%', 
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');
const Entrepreneurs = () => {
  const [entrepreneurs, setEntrepreneurs] = useState([])
  const [selectedEntrepreneur, setSelectedEntrepreneur] = useState({})
  const [modalIsOpen, setIsOpen] = useState(false);
  const [updateModal, setUpdateModal] = useState(false)
  const [confirmDelete, setConfirmDelete] = useState(false)

  const handleChange = (e) => {
    setSelectedEntrepreneur({...selectedEntrepreneur, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(selectedEntrepreneur);
    axios.patch(`http://localhost:3001/editEntrepreneur/${selectedEntrepreneur.id}`,{entrepreneur: selectedEntrepreneur})
          .then((response) => {
            setEntrepreneurs([...entrepreneurs?.filter((item) => item.id !== selectedEntrepreneur.id), selectedEntrepreneur ])
            closeUpdate()
          })
          .catch((err)=>{
            alert("Hubo un problema al actualizar.")
            console.log(err)
          })
  }

  const fetchEntrepreneurs = () =>{
    axios.get("http://localhost:3001/entrepreneurs")
         .then((response)=>{
            setEntrepreneurs(response.data)
            console.log(response.data)
         })
         .catch((err)=>{
          alert("Hubo un error obteniendo los datos.")
         })
  }

  useEffect(() => {
    fetchEntrepreneurs()
  
  }, [])
  
  const closeDelete = () => {
    setConfirmDelete(false)
  }

  const openDelete = (e)=> {
    setSelectedEntrepreneur(e)
    setConfirmDelete(true);
  }

  const openUpdate = (e) => {
    setSelectedEntrepreneur(e)
    setUpdateModal(true)
  }


  const closeUpdate = () => {
    setUpdateModal(false)
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleEntrepreneurSelection = (e) => {
    setSelectedEntrepreneur(e)
    openModal()
  }

  const handleDelete = () =>{
    setEntrepreneurs(entrepreneurs?.filter(item => item.id != selectedEntrepreneur.id))
    axios.delete(`http://localhost:3001/deleteEntrepreneur/${selectedEntrepreneur.id}`)
        .then((response)=>{
          setConfirmDelete(false)
        })
        .catch((err)=>{
          alert("Hubo un error eliminando al emprendedor.")
        })
  }

  return (
    <div id='main-app overflow-y-auto '>
        <Navbar/>
        <div className='p-10'>
          <div className='flex justify-between items-center mb-6'>
            <h1 className='font-bold text-4xl '>Emprendedores</h1>
            <div>
              <Link
                to="add"
                className='flex justify-center items-center bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'
              >
                <IoIosAdd/>
                Agregar emprendedor 
              </Link>
            </div>
          </div>
          <div className='overflow-x-auto'>  
          <table className='w-full'>
            <thead className='bg-gray-50 border-b-2 border-gray-200'>
              <tr>
                <th className='p-3 text-sm font-semibold tracking-wide text-left'>#</th>
                <th className='p-3 text-sm font-semibold tracking-wide text-left'>Nombre</th>
                <th className='p-3 text-sm font-semibold tracking-wide text-left'>Teléfono</th>
                <th className='p-3 text-sm font-semibold tracking-wide text-left'>Email</th>
                <th className='w-48 p-3 text-sm font-semibold tracking-wide text-left'>Nombre de la Tienda</th>
                <th className='p-3 text-sm font-semibold tracking-wide text-left'>Descripción de la Tienda</th>
                <th className='p-3 text-sm font-semibold tracking-wide text-left'>Acciones</th>
              </tr>
            </thead>

            <tbody className='divide-y divide-gray-100'>
              {
                entrepreneurs?.map((e, index) => (
                  <tr key={index} className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-100'} lg:max-h-full max-h-10`}>
                    <th className='whitespace-nowrap '>{index + 1}</th>
                    <td className='p-3 text-sm text-gray-700'>{e.names +  " " + e.last_names}</td>
                    <td className='whitespace-nowrap p-3 text-sm text-gray-700'>{e.phone}</td>
                    <td className='whitespace-nowrap p-3 text-sm text-gray-700'>{e.email}</td>
                    <td className=' lg:whitespace-normal p-3 text-sm text-gray-700'>{e.nameStore}</td>
                    <td className=' p-3 text-sm text-gray-700'>{e.descriptionStore}</td>
                    <td className='whitespace-nowrap p-3 text-sm text-gray-700'>
                      <button 
                      className='mr-3 hover:text-main-prowess hover:scale-125'
                      onClick={()=>handleEntrepreneurSelection(e)}
                      ><AiFillEye fontSize={20}/></button>
                      <button 
                      className='mr-3 hover:text-main-prowess hover:scale-125'
                      onClick={()=>openUpdate(e)}
                      ><AiFillEdit fontSize={20}/></button>
                      <button 
                      className='hover:text-red-500 hover:scale-125'
                      onClick={()=>openDelete(e)}
                      ><AiFillDelete fontSize={20}/></button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
          </div>
        </div>

      <div className='w-full '>

          <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Emprendedor"
          className="w-4/5 md:w-1/2 h-4/5 bg-white  overflow-y-auto shadow-xl absolute p-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          
          <div className='relative w-full h-full p-5'>
            
              <div 
              className='absolute top-1 right-1 cursor-pointer hover:scale-125 transition-all  ease-in-out'
              onClick={closeModal}
              >
                  <AiOutlineClose/>
              </div>
        
            <h1 className='font-bold text-3xl'> Visualizar emprendedor</h1>
            <div className='pl-3 pb-4'>
              <h3 className="font-medium text-xl">Datos del emprendedor</h3>
              <div className='flex flex-wrap justify-between '>
                <div className='lg:w-1/2 w-full p-2'>
                  <h3 className='font-medium'>Nombre</h3>
                  <p>{selectedEntrepreneur.names + " " + selectedEntrepreneur.last_names}</p>
                </div>
                <div className='lg:w-1/2 w-full p-2'>
                  <h3 className='font-medium'>Correo</h3>
                  <p>{selectedEntrepreneur.email}</p>
                </div>
                <div className='lg:w-2/3 w-full p-2'>
                  <h3 className='font-medium'>Dirección</h3>
                  <p>{selectedEntrepreneur.address}</p>
                </div>
                <div className='lg:w-1/3 w-full p-2'>
                  <h3 className='font-medium'>Teléfono</h3>
                  <p>{selectedEntrepreneur.phone}</p>
                </div>
              </div>
              <h3 className="font-medium text-xl">Datos del emprendimiento</h3>
              <div className='flex flex-wrap justify-between '>
                <div className='lg:w-1/2 w-full p-2'>
                  <h3 className='font-medium'>Nombre del Emprendimiento </h3>
                  <p>{selectedEntrepreneur.nameStore}</p>
                </div>
                <div className='w-full p-2'>
                  <h3 className='font-medium'>Descripción del Emprendimiento </h3>
                  <p className='w-full'>{selectedEntrepreneur.descriptionStore}</p>
                </div>
                <div className='w-full p-2'>
                  <h3 className='font-medium'>URL Google Maps del Emprendimiento </h3>
                  <p>{selectedEntrepreneur.googleMapsURL}</p>
                </div>
                <div className='lg:w-1/3 w-full p-2'>
                  <h3 className='font-medium'>Sector</h3>
                  <p>{selectedEntrepreneur.sector}</p>
                </div>
                <div className='lg:w-1/3 w-full p-2'>
                  <h3 className='font-medium'>Ciudad</h3>
                  <p>{selectedEntrepreneur.city}</p>
                </div>
                <div className='lg:w-1/3 w-full p-2'>
                  <h3 className='font-medium'>Provincia</h3>
                  <p>{selectedEntrepreneur.province}</p>
                </div>
              </div>
              <h3 className="mt-3 font-medium text-xl">Datos de las redes sociales</h3>
              <div className='flex flex-wrap justify-between '>
                <div className='lg:w-1/4 w-full p-2'>
                  <h3 className='font-medium'>Twitter</h3>
                  <p>{selectedEntrepreneur?.twitter}</p>
                </div>
                <div className='lg:w-1/4 w-full p-2'>
                  <h3 className='font-medium'>Facebook</h3>
                  <p>{selectedEntrepreneur.facebook}</p>
                </div>
                <div className='lg:w-1/4 w-full p-2'>
                  <h3 className='font-medium'>Instagram</h3>
                  <p>{selectedEntrepreneur.instagram}</p>
                </div>
                <div className='lg:w-1/4 w-full p-2'>
                  <h3 className='font-medium'>Tiktok</h3>
                  <p>{selectedEntrepreneur.tiktok}</p>
                </div>
              </div>
            </div>
          
          </div>

        </Modal>
      </div>

      <Modal
      isOpen={updateModal}
      onRequestClose={closeUpdate}
      contentLabel="Emprendedor"
      className="w-4/5 md:w-1/2 h-4/5 bg-white overflow-y-auto shadow-xl absolute p-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div 
              className='absolute top-1 right-1 cursor-pointer hover:scale-125 transition-all  ease-in-out'
              onClick={closeUpdate}
              >
                  <AiOutlineClose fontSize={20}/>
        </div>
        <div className="p-10 flex justify-center items-center">
        <form autoComplete="off" className="w-full flex flex-col">
            <div className="flex items-center mb-5">
                
            <h1 className=" font-bold text-4xl">Editar emprendedor</h1>
            </div>
            <h3 className="font-medium text-xl">Datos del emprendedor</h3>
          <div className="flex w-full  flex-wrap">
            <div className=" lg:w-1/2 w-full p-2 ">

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
                value={selectedEntrepreneur.names}
                onChange={handleChange}
                placeholder="Nombres..."
                />
            </div>
            <div className="lg:w-1/2 w-full p-2">

                <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
                >
                Apellidos
                </label>
                <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name="last_names"
                value={selectedEntrepreneur.last_names}
                onChange={handleChange}
                type="text"
                placeholder="Apellidos..."
                />
            </div>
            
            <div className="lg:w-1/2 p-2 w-full">

                <label
                className=" uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
                >
                Email
                </label>
                <input
                className="appearance-none  w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name="email"
                value={selectedEntrepreneur.email}
                onChange={handleChange}
                type="email"
                placeholder="ejemplo@ejemplo.com"
                />
            </div>
            <div className="lg:w-1/2 p-2 w-full">

                <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
                >
                Teléfono
                </label>
                <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name="phone"
                value={selectedEntrepreneur.phone}
                onChange={handleChange}
                type="text"
                placeholder="0999999999"
                />
            </div>

            <h3 className="mt-3 font-medium text-xl">Datos del emprendimiento</h3>

            <div className="w-full flex justify-between flex-wrap">

                <div className="lg:w-1/2 w-full p-2">
                <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-last-name"
                    >
                    Nombre del emprendimiento
                    </label>
                    <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    name="nameStore"
                    value={selectedEntrepreneur.nameStore}
                    onChange={handleChange}
                    type="text"
                    placeholder="Emprendimiento..."
                    />
                </div>
                <div className="lg:w-1/2 w-full p-2">
                <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-last-name"
                    >
                    Descripción del emprendimiento
                    </label>
                    <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    name="descriptionStore"
                    value={selectedEntrepreneur.descriptionStore}
                    onChange={handleChange}
                    type="text"
                    placeholder="Descripción del emprendimiento..."
                    />
                </div>


                <div className="w-full p-2">
                <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-last-name"
                    >
                    Dirección
                    </label>
                    <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    name="address"
                    value={selectedEntrepreneur.address}
                    onChange={handleChange}
                    type="text"
                    placeholder="Av. Ejemplar OE4-76 y Calle Ejemplo OS6-35"
                    />
                </div>
            
                <div className="lg:w-1/3 w-full p-2">
                <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-last-name"
                    >
                    Sector
                    </label>
                    <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    name="sector"
                    value={selectedEntrepreneur.sector}
                    onChange={handleChange}
                    type="text"
                    placeholder="Sector..."
                    />
                </div>
                <div className="lg:w-1/3 w-full p-2">
                <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-last-name"
                    >
                    Ciudad
                    </label>
                    <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    name="city"
                    value={selectedEntrepreneur.city}
                    onChange={handleChange}
                    type="text"
                    placeholder="Ciudad..."
                    />
                </div>
                <div className="lg:w-1/3 w-full p-2">
                <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-last-name"
                    >
                    Provincia
                    </label>
                    <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    name="province"
                    value={selectedEntrepreneur.province}
                    onChange={handleChange}
                    type="text"
                    placeholder="Provincia..."
                    />
                </div>

                <div className="w-full p-2">
                <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-last-name"
                    >
                    URL Google Maps
                    </label>
                    <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    name="googleMapsURL"
                    value={selectedEntrepreneur.googleMapsURL}
                    onChange={handleChange}
                    type="text"
                    placeholder="https://google.maps.com/example "
                    />
                </div>
            </div>
            <h3 className="mt-3 font-medium text-xl">Datos de las redes sociales</h3>
            <div className="w-full flex justify-between flex-wrap">
            <div className="lg:w-1/2 w-full p-2">
                <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-last-name"
                    >
                    Twitter
                    </label>
                    <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    name="twitter"
                    value={selectedEntrepreneur.twitter}
                    onChange={handleChange}
                    type="text"
                    placeholder="Twitter..."
                    />
                </div>
            <div className="lg:w-1/2 w-full p-2">
                <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-last-name"
                    >
                    Facebook
                    </label>
                    <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    name="facebook"
                    value={selectedEntrepreneur.facebook}
                    onChange={handleChange}
                    type="text"
                    placeholder="Facebook..."
                    />
                </div>
            <div className="lg:w-1/2 w-full p-2">
                <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-last-name"
                    >
                    Instagram
                    </label>
                    <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    name="instagram"
                    value={selectedEntrepreneur.instagram}
                    onChange={handleChange}
                    type="text"
                    placeholder="Instagram..."
                    />
                </div>
            <div className="lg:w-1/2 w-full p-2">
                <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-last-name"
                    >
                    Tiktok
                    </label>
                    <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    name="tiktok"
                    value={selectedEntrepreneur.tiktok}
                    onChange={handleChange}
                    type="text"
                    placeholder="Tiktok..."
                    />
                </div>
            </div>
          </div>
          <div className="w-full flex mt-3  ">
          <button 
            onClick={handleSubmit}
            className="bg-transparent flex justify-center items-center hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Actualizar
          </button>

          </div>
        </form>
      </div>
      </Modal>


      <Modal
      isOpen={confirmDelete}
      onRequestClose={closeDelete}
      contentLabel="Emprendedor"
      className="w-80 h-fit p-4 bg-white overflow-y-auto shadow-xl absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <p className='text-center mb-3'>
          ¿Seguro que desea eliminar a {selectedEntrepreneur.names + " "  + selectedEntrepreneur.last_names}?
        </p>
        
        <div className='flex items-center justify-between'>
            <button onClick={closeDelete} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Cancelar</button>
            <button onClick={handleDelete} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Eliminar</button>
        </div>
      </Modal>
    </div>
  )
}

export default Entrepreneurs