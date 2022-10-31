import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import {AiFillEye, AiFillDelete, AiFillEdit, AiOutlineClose} from 'react-icons/ai'
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    maxWidth: '60%',
    maxHeight: '80%', 
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');
const Entrepreneurs = () => {
  const [entrepreneurs, setEntrepreneurs] = useState([])
  const [selectedEntrepreneur, setSelectedEntrepreneur] = useState({})

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
  
  const [modalIsOpen, setIsOpen] = React.useState(false);

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

  return (
    <div id='main-app overflow-y-auto '>
        <Navbar/>
        <div className='p-10'>
          <h1 className='font-bold text-4xl mb-6'>Emprendedores</h1>
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
                  <tr key={index} className={`${index % 2 == 0 ? 'bg-white' : 'bg-gray-100'} lg:max-h-full max-h-10`}>
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
                      <button className='mr-3 hover:text-main-prowess hover:scale-125'><AiFillEdit fontSize={20}/></button>
                      <button className='hover:text-red-500 hover:scale-125'><AiFillDelete fontSize={20}/></button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
          </div>
        </div>

        <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Emprendedor"
      >
        <div className='relative w-full h-full  p-5'>
          
            <div 
            className='absolute top-0 right-0 cursor-pointer hover:scale-125 transition-all  ease-in-out'
            onClick={closeModal}
            >
                <AiOutlineClose/>
            </div>
       
          <h1 className='font-bold text-xl'> Detalles del emprendedor</h1>
          <div className='pl-3'>
            <h3 className='font-medium'>Nombre</h3>
            <p>{selectedEntrepreneur.names + " " + selectedEntrepreneur.last_names}</p>
            <h3 className='font-medium'>Correo</h3>
            <p>{selectedEntrepreneur.email}</p>
            <h3 className='font-medium'>Dirección</h3>
            <p>{selectedEntrepreneur.address}</p>
            <h3 className='font-medium'>Teléfono</h3>
            <p>{selectedEntrepreneur.phone}</p>
            <h3 className='font-medium'>Nombre del Emprendimiento </h3>
            <p>{selectedEntrepreneur.nameStore}</p>
            <h3 className='font-medium'>Descripción del Emprendimiento </h3>
            <p>{selectedEntrepreneur.descriptionStore}</p>
            <h3 className='font-medium'>URL Google Maps del Emprendimiento </h3>
            <p>{selectedEntrepreneur.googleMapsURL}</p>
            <div className='flex'>
              <div className='mr-4'>
                <h3 className='font-medium'>Sector</h3>
                <p>{selectedEntrepreneur.sector}</p>
              </div>
              <div className='mr-4'>
                <h3 className='font-medium'>Ciudad</h3>
                <p>{selectedEntrepreneur.city}</p>
              </div>
              <div>
                <h3 className='font-medium'>Provincia</h3>
                <p>{selectedEntrepreneur.province}</p>
              </div>
            </div>
            <h3 className='font-medium'>Provincia</h3>
            <p>{selectedEntrepreneur.province}</p>
          </div>
        
        </div>

      </Modal>
    </div>
  )
}

export default Entrepreneurs