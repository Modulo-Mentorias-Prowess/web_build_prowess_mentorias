import React, { useEffect } from 'react'
import Modal from 'react-modal';
import axios from 'axios'
import { useState } from 'react'
import {AiFillEye, AiFillDelete, AiFillEdit, AiOutlineClose} from 'react-icons/ai'
import Navbar from '../../components/Navbar'
import {IoIosAdd} from 'react-icons/io'
import { Link } from 'react-router-dom';

const Managers = () => {
  const [managers, setManagers] = useState([])
  const [selectedManager, setSelectedManager] = useState({})
  const [modalOpen, setModalOpen] = useState(false)
  const [deleteOpen, setDeleteOpen] = useState(false)

  const handleSelect = (m) => {
    setSelectedManager(m)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  const openModal = (m)=> {
    handleSelect(m)
    setModalOpen(true);
  }

  const openDeleteModal = (m)=>{
    handleSelect(m)
    setDeleteOpen(true)
  }

  const closeDeleteModal = () => {
    setDeleteOpen(false)
  }

  const handleDelete = () => {
    axios.delete(`http://localhost:3001/deleteManager/${selectedManager.id}`)
    .then((response) => {
      setDeleteOpen(false)
      setManagers(managers?.filter((m) => m.id != selectedManager.id))
    })
    .catch((err)=>{
      // TODO: HANDLE EXCEPTION TYPES 400 & 500
      alert("Hubo un error al borrar el contenido.")

    })
  }

  const fetchContents = () =>{
    axios.get("http://localhost:3001/managers")
         .then((response)=>{
          setManagers(response.data)
         })
         .catch((err)=>{
          alert("Hubo un error obteniendo los datos.")
         })
  }

  useEffect(() => {
    fetchContents()
  }, [])
  
  return (
    <div className='min-h-screen'>
        <Navbar/>
        <div className='p-10'>
        <div className='flex justify-between items-center mb-6'>
            <h1 className='font-bold text-4xl '>Encargados</h1>
            <div>
              <Link
                to="add"
                className='flex justify-center items-center bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'
              >
                <IoIosAdd/>
                Agregar encargado 
              </Link>
            </div>
          </div>
          <div className='overflow-x-auto'>  
          <table className='w-full'>
            <thead className='bg-gray-50 border-b-2 border-gray-200'>
              <tr>
                <th className='w-10 p-3 text-sm font-semibold tracking-wide text-left'>#</th>
                <th className='p-3 text-sm font-semibold tracking-wide text-left'>Nombre</th>
                <th className='p-3 text-sm font-semibold tracking-wide text-left'>Email</th>
                <th className='p-3 text-sm font-semibold tracking-wide text-left'>Dirección</th>
                <th className='w-28 p-3 text-sm font-semibold tracking-wide text-left'>Acciones</th>
              </tr>
            </thead>

            <tbody className='divide-y divide-gray-100'>
              {
                managers?.map((m, index) => (
                  <tr className={`${index % 2 == 0 ? 'bg-white' : 'bg-gray-100'} lg:max-h-full max-h-10`}>
                    <th className='whitespace-nowrap '>{index + 1}</th>
                    <td className='whitespace-nowrap p-3 text-sm text-gray-700'>{`${m.names} ${m.last_names}`}</td>
                    <td className='lg:whitespace-normal p-3 text-sm text-gray-700'>{m.email}</td>
                    <td className='lg:whitespace-normal p-3 text-sm text-gray-700'>{m.address}</td>
                    <td className='whitespace-nowrap p-3 text-sm text-gray-700'>
                      <button 
                      className='mr-3 hover:text-main-prowess hover:scale-125'
                      onClick={()=>openModal(m)}
                      ><AiFillEye fontSize={20}/></button>
                      <button className='mr-3 hover:text-main-prowess hover:scale-125'><AiFillEdit fontSize={20}/></button>
                      <button className='hover:text-red-500 hover:scale-125'
                      onClick={()=>openDeleteModal(m)} 
                      ><AiFillDelete fontSize={20}/></button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
          </div>

          <Modal
          isOpen={modalOpen}
          onRequestClose={closeModal}
          contentLabel="Encargado"
          className="w-fit h-fit bg-white  overflow-y-auto shadow-xl absolute p-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          
          <div className='relative w-fit h-full p-10'>
            
              <div 
              className='absolute top-1 right-1 cursor-pointer hover:scale-125 transition-all  ease-in-out'
              onClick={closeModal}
              >
                  <AiOutlineClose/>
              </div>
        
            <h1 className='font-bold text-3xl'> Visualizar encargado</h1>
            <div className='pl-3 pb-4'>
              <div className='flex w-fit flex-row lg:flex-col'>
                <div className='w-full p-2'>
                  <h3 className='font-medium'>Nombre</h3>
                  <p>{selectedManager.names + " " + selectedManager.last_names}</p>
                </div>
                <div className='w-full p-2'>
                  <h3 className='font-medium'>Email</h3>
                  <p>{selectedManager.email}</p>
                </div>
                <div className='w-full  p-2'>
                  <h3 className='font-medium'>Dirección</h3>
                  <p>{selectedManager.address}</p>
                </div>
                
              </div>
              
  
            </div>
          
          </div>

        </Modal>

        <Modal
      isOpen={deleteOpen}
      onRequestClose={closeDeleteModal}
      contentLabel="Encargado"
      className="w-80 h-fit p-4 bg-white overflow-y-auto shadow-xl absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <p className='text-center mb-3'>
          ¿Seguro que desea eliminar al encargado {selectedManager.names + " "  + selectedManager.last_names}?
        </p>
        
        <div className='flex items-center justify-between'>
            <button onClick={closeDeleteModal} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Cancelar</button>
            <button onClick={handleDelete} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Eliminar</button>
        </div>
      </Modal>
        </div>
    </div>
  )
}

export default Managers