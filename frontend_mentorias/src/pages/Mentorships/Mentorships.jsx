import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar'
import axios from 'axios'
import { useState } from 'react'
import {AiFillEye, AiFillDelete, AiFillEdit, AiOutlineClose} from 'react-icons/ai'
import Modal from "react-modal";

const Mentorships = () => {
  const [mentorships, setMentorships] = useState([])
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [selectedMentorship, setSelectedMentorship] = useState({})


  const openViewModal = () => {
    setViewModalOpen(true);
  };

  const closeViewModal = () => {
    setViewModalOpen(false);
  };

  const handleViewSelection = (m) => {
    setSelectedMentorship(m);
    openViewModal();
  };


  const fetchMentorships = () =>{
    axios.get("http://localhost:3001/mentorships")
         .then((response)=>{
          setMentorships(response.data)
         })
         .catch((err)=>{
          alert("Hubo un error obteniendo los datos.")
         })
  }

  useEffect(() => {
    fetchMentorships()
  }, [])
  

  
  return (
    <div className='min-h-screen'>
        <Navbar/>
        <div className='p-10'>
          <h1 className='font-bold text-4xl mb-6'>Mentorías</h1>
          <div className='overflow-x-auto'>  
          <table className='w-full'>
            <thead className='bg-gray-50 border-b-2 border-gray-200'>
              <tr>
                <th className='w-10 p-3 text-sm font-semibold tracking-wide text-left'>#</th>
                <th className='w-32 p-3 text-sm font-semibold tracking-wide text-left'>Encargado</th>
                <th className=' p-3 text-sm font-semibold tracking-wide text-left'>Emprendedor</th>
                <th className=' p-3 text-sm font-semibold tracking-wide text-left'>Emprendimiento</th>
                <th className=' p-3 text-sm font-semibold tracking-wide text-left'>Titulo</th>
                <th className=' p-3 text-sm font-semibold tracking-wide text-left'>Descripción</th>
                <th className=' p-3 text-sm font-semibold tracking-wide text-left'>Fecha</th>
                <th className='w-28 p-3 text-sm font-semibold tracking-wide text-left'>Acciones</th>
              </tr>
            </thead>

            <tbody className='divide-y divide-gray-100'>
              {
                mentorships?.map((c, index) => (
                  <tr className={`${index % 2 == 0 ? 'bg-white' : 'bg-gray-100'} lg:max-h-full max-h-10`}>
                    <th className='whitespace-nowrap '>{index + 1}</th>
                    <td className='  p-3 text-sm text-gray-700'>{`${c.manager_names} ${c.manager_last_names}`}</td>
                    <td className='  p-3 text-sm text-gray-700'>{`${c.entrepreneur_names} ${c.entrepreneur_last_names}`}</td>
                    <td className='  lg:whitespace-normal p-3 text-sm text-gray-700'>{c.nameStore}</td>
                    <td className='  lg:whitespace-normal p-3 text-sm text-gray-700'>{c.title}</td>
                    <td className='  lg:whitespace-normal p-3 text-sm text-gray-700'>{c.description}</td>
                    <td className=' whitespace-nowrap p-3 text-sm text-gray-700'>{(    new Date(Date.parse(c.date_mentorship.replace(/-/g, '/').replace('T', ' '))).toLocaleString())}</td>
                    <td className='whitespace-nowrap p-3 text-sm text-gray-700'>
                      <button 
                      onClick={()=>handleViewSelection(c)}
                      className='mr-3 hover:text-main-prowess hover:scale-125'
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
          isOpen={viewModalOpen}
          onRequestClose={closeViewModal}
          contentLabel="Encargado"
          className="w-fit h-fit bg-white  overflow-y-auto shadow-xl absolute p-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          
          <div className='relative w-fit h-full p-10'>
            
              <div 
              className='absolute top-1 right-1 cursor-pointer hover:scale-125 transition-all  ease-in-out'
              onClick={closeViewModal}
              >
                  <AiOutlineClose/>
              </div>
        
            <h1 className='font-bold text-3xl'> Visualizar mentoría</h1>
            <div className='pl-3 pb-4'>
              <div className='flex w-fit flex-col '>
                <h2 className='font-bold text-md'>Detalles del encargado</h2>
                <div className='flex w-full flex-wrap pb-3'>
                  <div className='w-1/2 px-2'>
                    <h3 className='font-medium'>Encargado</h3>
                    <p>{`${selectedMentorship.manager_names} ${selectedMentorship.manager_last_names}`}</p>
                  </div>
                  <div className='w-1/2 px-2'>
                    <h3 className='font-medium'>Email encargado</h3>
                    <p>{selectedMentorship.manager_email}</p>
                  </div>
                </div>

                <h2 className='font-bold text-md'>Detalles del emprendedor</h2>
                <div className='flex w-full flex-wrap pb-3'>

                  <div className='w-1/2 px-2'>
                    <h3 className='font-medium'>Emprendedor</h3>
                    <p>{`${selectedMentorship.entrepreneur_names} ${selectedMentorship.entrepreneur_last_names}`}</p>
                  </div>
                  
                  <div className='w-1/2 px-2'>
                    <h3 className='font-medium'>Emprendimiento</h3>
                    <p>{selectedMentorship.nameStore}</p>
                  </div>
                </div>
                <h2 className='font-bold text-md'>Detalles de la mentoría</h2>
                <div className='flex w-full flex-wrap'>

                  <div className='w-1/2 px-2'>
                    <h3 className='font-medium'>Título</h3>
                    <p>{selectedMentorship.title}</p>
                  </div>
                  <div className='w-1/2 px-2'>
                    <h3 className='font-medium'>Fecha</h3>
                    <p>{(    new Date(Date.parse(selectedMentorship.date_mentorship?.replace(/-/g, '/').replace('T', ' '))).toLocaleString())}</p>
                  </div>
                  <div className='w-full px-2'>
                    <h3 className='font-medium'>Descripción</h3>
                    <p>{selectedMentorship.description}</p>
                  </div>
                </div>
                
                
                
              </div>
              
  
            </div>
          
          </div>

        </Modal>
    </div>
  )
}

export default Mentorships