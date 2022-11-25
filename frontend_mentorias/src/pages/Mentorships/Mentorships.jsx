import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import axios from "axios";
import { useState } from "react";
import {
  AiFillEye,
  AiFillDelete,
  AiFillEdit,
  AiOutlineClose,
} from "react-icons/ai";
import Modal from "react-modal";
import { IoIosAdd } from "react-icons/io";
import { Link } from "react-router-dom";

const Mentorships = () => {
  // This component is a mess, must refactor and simplify. Pain.
  const [mentorships, setMentorships] = useState([]);
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [selectedMentorship, setSelectedMentorship] = useState({});
  const [selectedContents, setSelectedContents] = useState([]);

  /**
   * Opens a modal given the set state function
   * @param {function} controlState
   */
  const openModal = (controlState) => {
    controlState(true);
  };

  /**
   * Opens a modal given the set state function
   * @param {function} controlState
   */
  const closeModal = (controlState) => {
    controlState(false);
  };

  /**
   * Handles the selection of a mentorship, also fetchs the contents
   * of such mentorship if asked.
   * @param {boolean} needContents: if contents of a mentorship are necessary
   * @param {function} controlState: set state function
   * @param {Mentorship} m: mentorship info
   */
  const handleSelect = (needContents, controlState, m) => {
    setSelectedMentorship(m);
    if (needContents) {
      fetchContents(m.id);
    }
    openModal(controlState);
  };

  /**
   * Patches the object in the database with the given information.
   * @param {event} e
   */
  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .patch(`http://localhost:3001/updateMentorship`, {
        mentorship: {
          id: selectedMentorship.id,
          id_entrepreneur: selectedMentorship.id_entrepreneur,
          id_manager: selectedMentorship.id_manager,
          title: selectedMentorship.title,
          description: selectedMentorship.description,
          date_mentorship: selectedMentorship.date_mentorship,
        },
      })
      .then((response) => {
        // Could do a handshake so it send the data when updating
        //Filter the mentorship to show the modified one without fetching from the API.
        setMentorships([
          selectedMentorship,
          ...mentorships?.filter((item) => item.id !== selectedMentorship.id),
        ]);
        closeModal(setUpdateModalOpen);
      })
      .catch((err) => {
        // TODO: HANDLE EXCEPTION TYPES 400 & 500
        alert(err);
      });
  };

  /**
   * Deletes the selected mentorship from the database.
   */
  const handleDelete = () => {
    axios
      .delete(`http://localhost:3001/deleteMentorship/${selectedMentorship.id}`)
      .then((_response) => {
        // Could do a handshake so it send the data when deleting
        closeModal(setDeleteModal);
        //Filter the mentorship to delete it without fetching from the API.
        setMentorships(
          mentorships?.filter((m) => m.id != selectedMentorship.id)
        );
      })
      .catch((err) => {
        // TODO: HANDLE EXCEPTION TYPES 400 & 500
        alert("Hubo un error al borrar el contenido.");
      });
  };

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
   * Given a mentorship id looks for the contents that this mentorship has.
   * @param {string} id: The mentorship id to look for it's contents
   */
  const fetchContents = (id) => {
    axios
      .get(`http://localhost:3001/getContentsMentorship/${id}`)
      .then((response) => {
        setSelectedContents(response.data);
      })
      .catch((err) => {
        alert("Hubo un error obteniendo los datos.");
      });
  };

  /**
   * Gets all the mentorships from the database.
   * TODO: pagination to not overload client.
   */
  const fetchMentorships = () => {
    axios
      .get("http://localhost:3001/mentorships")
      .then((response) => {
        setMentorships(response.data);
      })
      .catch((err) => {
        // TODO: HANDLE EXCEPTION TYPE 500
        alert("Hubo un error obteniendo los datos.");
      });
  };

  useEffect(() => {
    fetchMentorships();
  }, []);

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

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="p-10">
        <div className="flex justify-between items-center mb-6">
          <h1 className="font-bold text-4xl ">Mentorías</h1>
          <div>
            <Link
              to="add"
              className="flex justify-center items-center bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            >
              <IoIosAdd />
              Agregar Mentorías
            </Link>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b-2 border-gray-200">
              <tr>
                <th className="w-10 p-3 text-sm font-semibold tracking-wide text-left">
                  #
                </th>
                <th className="w-32 p-3 text-sm font-semibold tracking-wide text-left">
                  Encargado
                </th>
                <th className=" p-3 text-sm font-semibold tracking-wide text-left">
                  Emprendedor
                </th>
                <th className=" p-3 text-sm font-semibold tracking-wide text-left">
                  Emprendimiento
                </th>
                <th className=" p-3 text-sm font-semibold tracking-wide text-left">
                  Titulo
                </th>
                <th className=" p-3 text-sm font-semibold tracking-wide text-left">
                  Descripción
                </th>
                <th className=" p-3 text-sm font-semibold tracking-wide text-left">
                  Fecha
                </th>
                <th className="w-28 p-3 text-sm font-semibold tracking-wide text-left">
                  Acciones
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {mentorships?.map((c, index) => (
                <tr
                  className={`${
                    index % 2 == 0 ? "bg-white" : "bg-gray-100"
                  } lg:max-h-full max-h-10`}
                >
                  <th className="whitespace-nowrap ">{index + 1}</th>
                  <td className="  p-3 text-sm text-gray-700">{`${c.manager_names} ${c.manager_last_names}`}</td>
                  <td className="  p-3 text-sm text-gray-700">{`${c.entrepreneur_names} ${c.entrepreneur_last_names}`}</td>
                  <td className="  lg:whitespace-normal p-3 text-sm text-gray-700">
                    {c.nameStore}
                  </td>
                  <td className="  lg:whitespace-normal p-3 text-sm text-gray-700">
                    {c.title}
                  </td>
                  <td className="  lg:whitespace-normal p-3 text-sm text-gray-700">
                    {c.description}
                  </td>
                  <td className=" whitespace-nowrap p-3 text-sm text-gray-700">
                    {new Date(
                      Date.parse(
                        c.date_mentorship.replace(/-/g, "/").replace("T", " ")
                      )
                    ).toLocaleString()}
                  </td>
                  <td className="whitespace-nowrap p-3 text-sm text-gray-700">
                    <button
                      onClick={() => handleSelect(true, setViewModalOpen, c)}
                      className="mr-3 hover:text-main-prowess hover:scale-125"
                    >
                      <AiFillEye fontSize={20} />
                    </button>
                    <button
                      onClick={() => handleSelect(true, setUpdateModalOpen, c)}
                      className="mr-3 hover:text-main-prowess hover:scale-125"
                    >
                      <AiFillEdit fontSize={20} />
                    </button>
                    <button
                      onClick={() => handleSelect(false, setDeleteModal, c)}
                      className="hover:text-red-500 hover:scale-125"
                    >
                      <AiFillDelete fontSize={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Modal
        isOpen={viewModalOpen}
        onRequestClose={() => closeModal(setViewModalOpen)}
        contentLabel="Encargado"
        className="w-fit h-fit bg-white  overflow-y-auto shadow-xl absolute p-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="relative w-fit h-full p-10">
          <div
            className="absolute top-1 right-1 cursor-pointer hover:scale-125 transition-all  ease-in-out"
            onClick={() => closeModal(setViewModalOpen)}
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

      {/**
       * Edit Modal
       *
       * TODO: allow edit of entrepreneur, manager and contents
       * in a similar fashion to the AddMentorship component.
       */}

      <Modal
        isOpen={updateModalOpen}
        onRequestClose={() => closeModal(setUpdateModalOpen)}
        contentLabel="Producto"
        className="w-fit h-4/5 bg-white  overflow-y-auto shadow-xl absolute p-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div
          className="absolute top-1 right-1 cursor-pointer hover:scale-125 transition-all  ease-in-out"
          onClick={() => closeModal(setUpdateModalOpen)}
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

      {/**
       * Delete Modal
       */}

      <Modal
        isOpen={deleteModal}
        onRequestClose={() => closeModal(setDeleteModal)}
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
            onClick={() => closeModal(setDeleteModal)}
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
    </div>
  );
};

export default Mentorships;
