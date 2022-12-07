import React from 'react'
import {
    AiOutlineClose,
} from "react-icons/ai";
import Modal from "react-modal";
import { operation } from '../utils/operations';

const MentorshipViewModal = ({viewModalOpen, closeModal, selectedMentorship, selectedContents}) => {
  return (
    <Modal
        isOpen={viewModalOpen}
        onRequestClose={() => closeModal(operation.VIEW)}
        contentLabel="Encargado"
        className="w-fit h-fit bg-white  overflow-y-auto shadow-xl absolute p-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="relative w-fit h-full p-10">
          <div
            className="absolute top-1 right-1 cursor-pointer hover:scale-125 transition-all  ease-in-out"
            onClick={() => closeModal(operation.VIEW)}
          >
            <AiOutlineClose />
          </div>

          <h1 className="font-bold text-3xl"> Visualizar mentoría</h1>
          <div className="pl-3 pb-4">
            <div className="flex w-fit flex-col ">
              <h2 className="font-bold text-md">Detalles del encargado</h2>
              <div className="flex w-full flex-wrap pb-3">
                <div className="w-1/2 px-2">
                  <h3 className="font-medium">Encargado</h3>
                  <p>{`${selectedMentorship.manager_names} ${selectedMentorship.manager_last_names}`}</p>
                </div>
                <div className="w-1/2 px-2">
                  <h3 className="font-medium">Email encargado</h3>
                  <p>{selectedMentorship.manager_email}</p>
                </div>
              </div>

              <h2 className="font-bold text-md">Detalles del emprendedor</h2>
              <div className="flex w-full flex-wrap pb-3">
                <div className="w-1/2 px-2">
                  <h3 className="font-medium">Emprendedor</h3>
                  <p>{`${selectedMentorship.entrepreneur_names} ${selectedMentorship.entrepreneur_last_names}`}</p>
                </div>

                <div className="w-1/2 px-2">
                  <h3 className="font-medium">Emprendimiento</h3>
                  <p>{selectedMentorship.nameStore}</p>
                </div>
              </div>
              <h2 className="font-bold text-md">Detalles de la mentoría</h2>
              <div className="flex w-full flex-wrap">
                <div className="w-1/2 px-2">
                  <h3 className="font-medium">Título</h3>
                  <p>{selectedMentorship.title}</p>
                </div>
                <div className="w-1/2 px-2">
                  <h3 className="font-medium">Fecha</h3>
                  <p>
                    {new Date(
                      Date.parse(
                        selectedMentorship.date_mentorship
                          ?.replace(/-/g, "/")
                          .replace("T", " ")
                      )
                    ).toLocaleString()}
                  </p>
                </div>
                <div className="w-full px-2">
                  <h3 className="font-medium">Descripción</h3>
                  <p>{selectedMentorship.description}</p>
                </div>
                <div className="w-full px-2">
                  <h3 className="font-medium">Contenidos</h3>
                  {selectedContents.map((c) => (
                    <p>{c.content_name}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
  )
}

export default MentorshipViewModal