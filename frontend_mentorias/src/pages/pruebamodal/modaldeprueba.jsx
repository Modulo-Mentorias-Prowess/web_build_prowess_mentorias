import React from 'react'
import {
    AiOutlineClose,
} from "react-icons/ai";
import Modal from "react-modal";


const ERRORViewModal = ({viewModalOpen, closeModal}) => {
  return (
    <Modal
        isOpen={viewModalOpen}
        onRequestClose={() => closeModal()}
        contentLabel="Encargado"
        className="w-fit h-fit bg-white  overflow-y-auto shadow-xl absolute p-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="relative w-fit h-full p-10">
          <div
            className="absolute top-1 right-1 cursor-pointer hover:scale-125 transition-all  ease-in-out"
            onClick={() => closeModal()}
          >
            <AiOutlineClose />
          </div>

          <h1 className="font-bold text-3xl"> Error al Registrar</h1>
          <br />
          <br />
          <button
          className="padding-left 20 px bg-transparent flex justify-center items-center hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          onClick={() => closeModal()}
          >
            Cerrar
          </button>
        </div>
      </Modal>
  )
}

export default ERRORViewModal