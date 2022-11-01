import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
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

      <div className='w-full '>

          <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Emprendedor"
          className="w-4/5 md:w-1/2 h-4/5 bg-white overflow-y-auto shadow-xl absolute p-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          
          <div className='relative w-full h-full p-5'>
            
              <div 
              className='absolute top-1 right-1 cursor-pointer hover:scale-125 transition-all  ease-in-out'
              onClick={closeModal}
              >
                  <AiOutlineClose/>
              </div>
        
            <h1 className='font-bold text-xl'> Detalles del emprendedor</h1>
            <div className='pl-3'>
              <div className='flex flex-wrap gap-4 justify-between '>
                <div>
              <h3 className='font-medium'>Nombre</h3>
              <p>{selectedEntrepreneur.names + " " + selectedEntrepreneur.last_names}</p>
                </div>
                <div>
              <h3 className='font-medium'>Correo</h3>
              <p>{selectedEntrepreneur.email}</p>
                </div>
                <div>
                  <h3 className='font-medium'>Dirección</h3>
                  <p>{selectedEntrepreneur.address}</p>
                </div>
                <div>
                  <h3 className='font-medium'>Teléfono</h3>
                  <p>{selectedEntrepreneur.phone}</p>
                </div>
                <div>
                  <h3 className='font-medium'>Nombre del Emprendimiento </h3>
                  <p>{selectedEntrepreneur.nameStore}</p>
                </div>
                <div>
                  <h3 className='font-medium'>Descripción del Emprendimiento </h3>
                  <p className='w-full'>{selectedEntrepreneur.descriptionStore}</p>
                </div>
                <div>
                  <h3 className='font-medium'>URL Google Maps del Emprendimiento </h3>
                  <p>{selectedEntrepreneur.googleMapsURL}</p>
                </div>
                <div className=''>
                  <h3 className='font-medium'>Sector</h3>
                  <p>{selectedEntrepreneur.sector}</p>
                </div>
                <div className=''>
                  <h3 className='font-medium'>Ciudad</h3>
                  <p>{selectedEntrepreneur.city}</p>
                </div>
                <div>
                  <h3 className='font-medium'>Provincia</h3>
                  <p>{selectedEntrepreneur.province}</p>
                </div>

                <div>
                  <h3 className='font-medium'>Twitter</h3>
                  <p>{selectedEntrepreneur?.twitter}</p>
                </div>
                <div>
                  <h3 className='font-medium'>Facebook</h3>
                  <p>{selectedEntrepreneur.facebook}</p>
                </div>
                <div>
                  <h3 className='font-medium'>Instagram</h3>
                  <p>{selectedEntrepreneur.instagram}</p>
                </div>
                <div>
                  <h3 className='font-medium'>Tiktok</h3>
                  <p>{selectedEntrepreneur.tiktok}</p>
                </div>
              </div>
            </div>
          
          </div>

        </Modal>
      </div>
    </div>
  )
}

export default Entrepreneurs