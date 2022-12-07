import React from 'react'
import Modal from "react-modal";
import { operation } from '../utils/operations';


const MentorshipDeleteModal = ({deleteModal, handleDelete, closeModal, selectedMentorship}) => {
  return (
    <Modal
        isOpen={deleteModal}
        onRequestClose={() => closeModal(operation.DELETE)}
        contentLabel="Producto"
        className="w-80 h-fit p-4 bg-white overflow-y-auto shadow-xl absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <p className="text-center mb-3">
          ¿Seguro que desea eliminar la mentoria de{" "}
          {`${selectedMentorship.manager_names} ${selectedMentorship.manager_last_names} para el emprendimiento ${selectedMentorship.nameStore}`}
          ?
        </p>

        <div className="flex items-center justify-between">
          <button
            onClick={() => closeModal(operation.DELETE)}
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            Cancelar
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Eliminar
          </button>
        </div>
      </Modal>
  )
}

export default MentorshipDeleteModal