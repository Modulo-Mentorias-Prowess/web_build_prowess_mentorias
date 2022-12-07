import React from 'react'
import {
    AiOutlineClose,
} from "react-icons/ai";

import Modal from "react-modal";
import { operation } from '../utils/operations';

const MentorshipUpdateModal = ({updateModalOpen, setSelectedMentorship, handleUpdate, closeModal, selectedMentorship, selectedContents}) => {
  /**
   * Handles the changes of the inputs, storing them in the mentorship object.
   * @param {event} e
   */
   const handleChange = (e) => {
    setSelectedMentorship({
      ...selectedMentorship,
      [e.target.name]: e.target.value,
    });
  };

   /**
   * Formats date object so the datetime-local shows it.
   * @param {Date} d: date object to format
   * @returns {string}```localDateTime```: date formated like 'yyyy-mm-ddThh:mm'
   */
    const formatDate = (d) => {
        let localDateTime =
          [
            d.getFullYear(),
            (d.getMonth() + 1).AddZero(),
            d.getDate().AddZero(),
          ].join("-") +
          "T" +
          [d.getHours().AddZero(), d.getMinutes().AddZero()].join(":");
        return localDateTime;
      };
  
  /**
   * This functions add a zero before the number if is a single digit.
   * Example:
   * 1 => '01'
   * @param {Number} b
   * @param {Number} c
   * @returns Number with two digits.
   */
   Number.prototype.AddZero = function (b, c) {
    var l = String(b || 10).length - String(this).length + 1;
    return l > 0 ? new Array(l).join(c || "0") + this : this;
  };


    return (  
    <Modal
       isOpen={updateModalOpen}
       onRequestClose={() => closeModal(operation.UPDATE)}
       contentLabel="Producto"
       className="w-fit h-4/5 bg-white  overflow-y-auto shadow-xl absolute p-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
     >
       <div
         className="absolute top-1 right-1 cursor-pointer hover:scale-125 transition-all  ease-in-out"
         onClick={() => closeModal(operation.UPDATE)}
       >
         <AiOutlineClose fontSize={20} />
       </div>
       <div className="p-10 flex justify-center items-center">
         <form autoComplete="off" className="w-full flex flex-col">
           <div className="flex items-center mb-5">
             <h1 className=" font-bold text-4xl">Editar producto</h1>
           </div>
           <div className="flex w-full  flex-wrap">
             <div className="md:w-1/2 w-full p-2 ">
               <label
                 className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                 for="grid-last-name"
               >
                 Titulo
               </label>
               <input
                 className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                 type="text"
                 name="title"
                 value={selectedMentorship.title}
                 onChange={handleChange}
                 placeholder="Titulo..."
               />
             </div>
             <div className="md:w-1/2 w-full p-2">
               <label
                 className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                 for="grid-last-name"
               >
                 Descripción
               </label>
               <input
                 className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                 name="description"
                 value={selectedMentorship.description}
                 onChange={handleChange}
                 type="text"
                 placeholder="Descripcion..."
               />
             </div>

             <div className="p-2 w-full">
               <label
                 className=" uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                 for="grid-last-name"
               >
                 Fecha y hora
               </label>
               <input
                 className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                 name="date_mentorship"
                 value={formatDate(
                   new Date(
                     Date.parse(
                       selectedMentorship.date_mentorship
                         ?.replace(/-/g, "/")
                         ?.replace("T", " ")
                     )
                   )
                 )}
                 onChange={handleChange}
                 type="datetime-local"
                 placeholder=""
               />
             </div>
             <div className="p-2 w-full select-none">
               <label
                 className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                 for="grid-last-name"
               >
                 Emprendedor
               </label>
               <input
                 className="appearance-none block w-full bg-gray-200 text-gray-400 border select-none border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                 name="address"
                 onChange={handleChange}
                 value={`${selectedMentorship.entrepreneur_names} ${selectedMentorship.entrepreneur_last_names} - ${selectedMentorship.nameStore}`}
                 type="text"
                 disabled
               />
             </div>
             <div className="p-2 w-full select-none">
               <label
                 className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                 for="grid-last-name"
               >
                 Encargado
               </label>
               <input
                 className="appearance-none block w-full bg-gray-200 text-gray-400 border select-none border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                 name="address"
                 onChange={handleChange}
                 value={`${selectedMentorship.manager_names} ${selectedMentorship.manager_last_names} - ${selectedMentorship.manager_email}`}
                 type="text"
                 disabled
               />
             </div>
             <div className="p-2 w-full select-none">
               <label
                 className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                 for="grid-last-name"
               >
                 Contenidos
               </label>
               {selectedContents.map((con) => (
                 <p>{con.content_name}</p>
               ))}
             </div>
           </div>

           <div className="w-full flex justify-end mt-3 p-2">
             <button
               onClick={handleUpdate}
               className="bg-transparent flex justify-center items-center hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
             >
               Actualizar Mentoria
             </button>
           </div>
         </form>
       </div>
     </Modal>
  )
}

export default MentorshipUpdateModal