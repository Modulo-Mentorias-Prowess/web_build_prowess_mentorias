import React, { useEffect } from "react";
import Modal from "react-modal";
import axios from "axios";
import { useState } from "react";
import {
  AiFillEye,
  AiFillDelete,
  AiFillEdit,
  AiOutlineClose,
} from "react-icons/ai";
import Navbar from "../../components/Navbar";
import { IoIosAdd } from "react-icons/io";
import { Link } from "react-router-dom";
import Manager from "../../components/Manager";

const Managers = () => {
  const [managers, setManagers] = useState([]);
  const [selectedManager, setSelectedManager] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const handleSelect = (m) => {
    setSelectedManager(m);
  };
  const pageSize = 10;

  // TODO: must refactor to look like mentorship openModal and closeModal methods.
  const closeModal = () => {
    setModalOpen(false);
  };

  const openModal = (m) => {
    handleSelect(m);
    setModalOpen(true);
  };

  const openDeleteModal = (m) => {
    handleSelect(m);
    setDeleteOpen(true);
  };

  const closeDeleteModal = () => {
    setDeleteOpen(false);
  };
  const openUpdate = (m) => {
    handleSelect(m);
    setUpdateModal(true);
  };

  const closeUpdate = () => {
    setUpdateModal(false);
  };

  /**
   * Deletes the data of the selected manager from the database and updates the table
   * from the client side
   */
  const handleDelete = () => {
    axios
      .delete(`https://web-build-prowess-mentorias-vipa.onrender.com/deleteManager/${selectedManager.id}`)
      .then((response) => {
        setDeleteOpen(false);
        setManagers(managers?.filter((m) => m.id != selectedManager.id));
      })
      .catch((err) => {
        // TODO: HANDLE EXCEPTION TYPES 400 & 500
        alert("Hubo un error al borrar el contenido.");
      });
  };

  const handleChange = (e) => {
    setSelectedManager({ ...selectedManager, [e.target.name]: e.target.value });
  };

  /**
   * Updates the manager in the database and updates it client side.
   * @param {Event} e: form submit event
   */
  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .patch(`https://web-build-prowess-mentorias-vipa.onrender.com/editManager/${selectedManager.id}`, {
        manager: selectedManager,
      })
      .then((response) => {
        setManagers([
          ...managers?.filter((item) => item.id !== selectedManager.id),
          selectedManager,
        ]);
        closeUpdate();
      })
      .catch((err) => {
        alert("Hubo un error.");
      });
  };

  const [currentPage, setCurrentPage] = useState(0);
  const [search, setSearch] = useState("");

  const filterdManager = () => {
    //console.log(display.slice(currentPage, currentPage + pageSize));
    let current = display.slice(currentPage, currentPage + pageSize);
    return current;
  };
  const returPage = () => {
    setCurrentPage(currentPage - pageSize);
  };

  const nextPage = () => {
    setCurrentPage(currentPage + pageSize);
  };

  const handleSearch = (e) => {
    let val = e.target.value;
    setSearch(val);
    fetchSearchManager();
  };

  const fetchSearchManager = () => {
    if (search.length >= 3) {
      axios
        .get(`https://web-build-prowess-mentorias-vipa.onrender.com/searchManager/${search}`)
        .then((data) => {
          setManagers(data.data);
        })
        .catch((err) => {
          alert("Hubo un error obteniendo los datos.");
        });
    } else {
      fetchContents();
    }
  };

  const [display, setDisplay] = useState([]);
  useEffect(() => {
    setDisplay(managers);
  }, [managers]);

  /**
   * Gets all the managers from database.
   * TODO: fetch data with pagination to not overload client.
   */
  const fetchContents = () => {
    axios
      .get("https://web-build-prowess-mentorias-vipa.onrender.com/managers")
      .then((response) => {
        setManagers(response.data);
      })
      .catch((err) => {
        alert("Hubo un error obteniendo los datos.");
      });
  };

  /**
   * Loads managers on component did mount.
   */
  useEffect(() => {
    fetchContents();
  }, []);

  const totalPages = Math.ceil(display.length / pageSize) // Número de páginas

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="p-10">
        <div className="flex justify-between items-center mb-6">
          <h1 className="font-bold text-4xl ">Encargados</h1>
          <div>
            <Link
              to="add"
              className="flex justify-center items-center bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            >
              <IoIosAdd />
              <p className="hidden md:block">Agregar encargado</p>
            </Link>
          </div>
        </div>
        <div className="mb-2">
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
            name="names"
            value={search}
            onChange={handleSearch}
            placeholder="Buscar"
          />
        </div>
        <div className="overflow-x-auto w-full">
          <table className="w-full hidden md:block">
            <thead className="bg-gray-50 w-full border-b-2 border-gray-200">
              <tr className="w-full">
                <th className="w-10 p-3 text-sm font-semibold tracking-wide text-left">
                  #
                </th>
                <th className=" p-3 text-sm font-semibold tracking-wide text-left">
                  Nombre
                </th>
                <th className="w-80 p-3 text-sm font-semibold tracking-wide text-left">
                  Email
                </th>
                <th className="w-96 p-3 text-sm font-semibold tracking-wide text-left">
                  Dirección
                </th>
                <th className="w-28 p-3 text-sm font-semibold tracking-wide text-left">
                  Acciones
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {filterdManager()?.map((m, index) => (
                <tr className={`${index % 2 == 0 ? "bg-white" : "bg-gray-100"} lg:max-h-full max-h-10`}>
                  <th className="whitespace-nowrap ">{currentPage + index + 1}</th>
                  <td className="w-full whitespace-nowrap p-3 text-sm text-gray-700">{`${m.names} ${m.last_names}`}</td>
                  <td className="w-80 whitespace-nowrap p-3 text-sm text-gray-700">{m.email}</td>
                  <td className="w-80 p-3 whitespace-nowrap text-sm text-gray-700">{m.address}</td>
                  <td className="whitespace-nowrap p-3 text-sm text-gray-700">
                    <button
                      className="mr-3 hover:text-main-prowess hover:scale-125"
                      onClick={() => openModal(m)}
                    >
                      <AiFillEye fontSize={20} />
                    </button>
                    <button
                      className="mr-3 hover:text-main-prowess hover:scale-125"
                      onClick={() => openUpdate(m)}
                    >
                      <AiFillEdit fontSize={20} />
                    </button>
                    <button
                      className="hover:text-red-500 hover:scale-125"
                      onClick={() => openDeleteModal(m)}
                    >
                      <AiFillDelete fontSize={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="block md:hidden">
            {managers?.map((m, index) => (
              <Manager
                key={index}
                m={m}
                deleteFunction={openDeleteModal}
                editFunction={openUpdate}
                viewFunction={openModal}
              />
            ))}
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <button
          className='bg-main-prowess text-white font-bold py-2 px-4 rounded disabled:bg-gray-400 mr-3 hover:bg-opacity-90 focus:outline-none'
          onClick={returPage}
            disabled={currentPage - pageSize < 0}
          >
            Anterior
          </button>
          <p
          className="mr-3">{currentPage / pageSize + 1}/{totalPages}
          </p>
          <button
          className='bg-main-prowess text-white font-bold py-2 px-4 rounded disabled:bg-gray-400 mr-3 hover:bg-opacity-90 focus:outline-none'
          onClick={nextPage}
            disabled={currentPage + pageSize >= display.length}
          >
            Siguiente
          </button>
        </div>

        <Modal
          isOpen={modalOpen}
          onRequestClose={closeModal}
          contentLabel="Encargado"
          className="w-4/5 md:w-fit h-4/5 bg-white  overflow-y-auto shadow-xl absolute p-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <div className="relative w-fit h-full p-10">
            <div
              className="absolute top-1 right-1 cursor-pointer hover:scale-125 transition-all  ease-in-out"
              onClick={closeModal}
            >
              <AiOutlineClose />
            </div>

            <h1 className="font-bold text-3xl"> Visualizar encargado</h1>
            <div className="pl-3 pb-4">
              <div className="flex w-fit flex-col">
                <div className="w-full p-2">
                  <h3 className="font-medium">Nombre</h3>
                  <p>
                    {selectedManager.names + " " + selectedManager.last_names}
                  </p>
                </div>
                <div className="w-full p-2">
                  <h3 className="font-medium">Email</h3>
                  <p>{selectedManager.email}</p>
                </div>
                <div className="w-full  p-2">
                  <h3 className="font-medium">Dirección</h3>
                  <p>{selectedManager.address}</p>
                </div>
              </div>
            </div>
          </div>
        </Modal>

        <Modal
          isOpen={updateModal}
          onRequestClose={closeUpdate}
          contentLabel="Emprendedor"
          className="w-4/5 md:w-fit h-4/5 bg-white overflow-y-auto shadow-xl absolute p-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <div
            className="absolute top-1 right-1 cursor-pointer hover:scale-125 transition-all  ease-in-out"
            onClick={closeUpdate}
          >
            <AiOutlineClose fontSize={20} />
          </div>
          <div className="p-10 flex justify-center items-center">
            <form autoComplete="off" className="w-full flex flex-col">
              <div className="flex items-center mb-5">
                <h1 className=" font-bold text-4xl">Editar encargado</h1>
              </div>
              <div className="flex w-full  flex-wrap">
                <div className="md:w-1/3 w-full p-2 ">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-last-name"
                  >
                    Nombres
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="text"
                    name="names"
                    value={selectedManager.names}
                    onChange={handleChange}
                    placeholder="Nombres..."
                  />
                </div>
                <div className="md:w-1/3 w-full p-2">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-last-name"
                  >
                    Apellidos
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    name="last_names"
                    value={selectedManager.last_names}
                    onChange={handleChange}
                    type="text"
                    placeholder="Apellidos..."
                  />
                </div>

                <div className="md:w-1/3 p-2 w-full">
                  <label
                    className=" uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-last-name"
                  >
                    Email
                  </label>
                  <input
                    className="appearance-none  w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    name="email"
                    onChange={handleChange}
                    value={selectedManager.email}
                    type="email"
                    placeholder="ejemplo@espe.edu.ec"
                  />
                </div>
                <div className="p-2 w-full">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-last-name"
                  >
                    Dirección
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    name="address"
                    onChange={handleChange}
                    value={selectedManager.address}
                    type="text"
                    placeholder="Av. Ejemplo y Ejemplo Oe4-76"
                  />
                </div>
              </div>

              <div className="w-full flex justify-end mt-3 p-2">
                <button
                  onClick={handleUpdate}
                  className="bg-transparent flex justify-center items-center hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                >
                  Actualizar Encargado
                </button>
              </div>
            </form>
          </div>
        </Modal>

        <Modal
          isOpen={deleteOpen}
          onRequestClose={closeDeleteModal}
          contentLabel="Encargado"
          className="w-80 h-fit p-4 bg-white overflow-y-auto shadow-xl absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <p className="text-center mb-3">
            ¿Seguro que desea eliminar al encargado{" "}
            {selectedManager.names + " " + selectedManager.last_names}?
          </p>

          <div className="flex items-center justify-between">
            <button
              onClick={closeDeleteModal}
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
    </div>
  );
};

export default Managers;
