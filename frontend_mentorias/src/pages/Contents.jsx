import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import { useState } from 'react'
import {AiFillEye, AiFillDelete, AiFillEdit} from 'react-icons/ai'


const Contents = () => {

  const [contents, setContents] = useState([])


  /**
   * Gets all contents from the database.
   */
  const fetchContents = () =>{
    axios.get("http://localhost:3001/contents")
         .then((response)=>{
            setContents(response.data)
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
          <h1 className='font-bold text-4xl mb-6'>Contenidos</h1>
          <div className='overflow-x-auto'>  
          <table className='w-full'>
            <thead className='bg-gray-50 border-b-2 border-gray-200'>
              <tr>
                <th className='w-10 p-3 text-sm font-semibold tracking-wide text-left'>#</th>
                <th className='w-60 p-3 text-sm font-semibold tracking-wide text-left'>Contenido</th>
                <th className=' p-3 text-sm font-semibold tracking-wide text-left'>Descripción</th>
                <th className='w-28 p-3 text-sm font-semibold tracking-wide text-left'>Acciones</th>
              </tr>
            </thead>

            <tbody className='divide-y divide-gray-100'>
              {
                contents?.map((c, index) => (
                  <tr className={`${index % 2 == 0 ? 'bg-white' : 'bg-gray-100'} lg:max-h-full max-h-10`}>
                    <th className='whitespace-nowrap '>{index + 1}</th>
                    <td className='whitespace-nowrap p-3 text-sm text-gray-700'>{c.name}</td>
                    <td className=' lg:w-full lg:whitespace-normal p-3 text-sm text-gray-700'>{c.description}</td>
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

export default Contents