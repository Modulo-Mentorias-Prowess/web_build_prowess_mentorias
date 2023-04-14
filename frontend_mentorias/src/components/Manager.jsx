import React from 'react'
import {AiFillEye, AiFillDelete, AiFillEdit} from 'react-icons/ai'


const Manager = ({m, editFunction, deleteFunction, viewFunction}) => {
  return (
    <div className="flex justify-center mb-3">
      <div className="shadow-xl p-6 rounded-lg bg-white max-w-sm">
        <h2 className="font-black leading-tight ">{`${m.names} ${m.last_names}`}</h2>
        <div className="pl-4 flex flex-wrap">
          <div className="w-full ">
            <p className="font-medium leading-tight">Descripción</p>
            <p>{m.email}</p>
          </div>
          <div className="w-full ">
            <p className="font-medium leading-tight">Precio</p>
            <p>{m.address}</p>
          </div>

          <div className='justify-end w-full flex mt-2'>
          <button
                      className="mr-3 hover:text-main-prowess hover:scale-125"
                      onClick={() => viewFunction(m)}
                    >
                      <AiFillEye fontSize={20} />
                    </button>
                    <button 
                    onClick={()=>editFunction(m)}
                    className="mr-3 hover:text-main-prowess hover:scale-125">
                      <AiFillEdit fontSize={20} />
                    </button>
                    <button 
                    onClick={()=>deleteFunction(m)}
                    className="hover:text-red-500 hover:scale-125">
                      <AiFillDelete fontSize={20} />
                    </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Manager