import React, { useEffect } from 'react'

import axios from 'axios'
import { useState } from 'react'
import {AiFillEye, AiFillDelete, AiFillEdit} from 'react-icons/ai'
import Navbar from '../../components/Navbar'

const Managers = () => {
  const [managers, setManagers] = useState([])
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
          <h1 className='font-bold text-4xl mb-6'>Encargados</h1>
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
                      <button className='mr-3 hover:text-main-prowess hover:scale-125'><AiFillEye fontSize={20}/></button>
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
    </div>
  )
}

export default Managers