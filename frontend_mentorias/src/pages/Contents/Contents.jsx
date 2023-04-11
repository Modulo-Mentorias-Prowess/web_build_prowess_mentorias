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
import Content from "../../components/Content";

const Contents = () => {
  const [contents, setContents] = useState([]);
  const [selectedContent, setSelectedContent] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [search, setSearch] = useState("");
  const pageSize = 3;

  const handleSelect = (c) => {
    setSelectedContent(c);
  };

  // TODO: must refactor to look like mentorship openModal and closeModal methods.
  const closeModal = () => {
    setModalOpen(false);
  };

  const openModal = (c) => {
    handleSelect(c);
    setModalOpen(true);
  };

  const openDeleteModal = (c) => {
    handleSelect(c);
    setDeleteOpen(true);
  };

  const closeDeleteModal = () => {
    setDeleteOpen(false);
  };
  const openUpdate = (c) => {
    handleSelect(c);
    setUpdateModal(true);
  };

  const closeUpdate = () => {
    setUpdateModal(false);
  };

  /**
   * Deletes content from the database, and from the client side table.
   */
  const handleDelete = () => {
    axios
      .delete(`http://localhost:3001/deleteContent/${selectedContent.id}`)
      .then((response) => {
        setDeleteOpen(false);
        setContents(contents?.filter((c) => c.id != selectedContent.id));
      })
      .catch((err) => {
        //TODO: Handle errors
        alert("Hubo un error eliminando al emprendedor.");
      });
  };

  const handleChange = (c) => {
    setSelectedContent({ ...selectedContent, [c.target.name]: c.target.value });
  };

  /**
   * Updates the manager in the database and updates it client side.
   * @param {Event} c: form submit event
   */
  const handleUpdate = (c) => {
    c.preventDefault();
    axios
      .patch(`http://localhost:3001/editContent/${selectedContent.id}`, {
        content: selectedContent,
      })
      .then((response) => {
        setContents([
          ...contents?.filter((item) => item.id !== selectedContent.id),
          selectedContent,
        ]);
        closeUpdate();
      })
      .catch((err) => {
        // TODO: HANDLE ERRORS
        alert("Hubo un error.");
        console.log(err);
      });
  };

  /* Number of contents to show in the table of Content */
  const filterdContent = () => {
    console.log(display.slice(currentPage, currentPage + pageSize));
    let current = display.slice(currentPage, currentPage + pageSize);
    return current;
  };

  const returnPage = () => {
    setCurrentPage(currentPage - pageSize);
  };

  const nextPage = () => {
    setCurrentPage(currentPage + pageSize);
  };

  const handleSearch = (c) => {
    let val = c.target.value;
    setSearch(val);
    fetchSearchContent();
  };

  const fetchSearchContent = () => {
    if (search.length >= 3) {
      axios
        .get(`http://localhost:3001/searchContent/${search}`)
        .then((data) => {
          setContents(data.data);
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
    setDisplay(contents);
  }, [contents]);

  /**
   * Gets all the entrepreneurs from the database
   * TODO: Get with pagination to not overload content nor server.
   */
  const fetchContents = () => {
    axios
      .get("http://localhost:3001/contents")
      .then((response) => {
        setContents(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        // TODO: Properly show error
        alert("Hubo un error obteniendo los datos.");
      });
  };

  /**
   * Loads contents on component did mount.
   */
  useEffect(() => {
    fetchContents();
  }, []);

  const totalPages = Math.ceil(display.length / pageSize) // Número de páginas

  return (
    <div className="main-app overflow-y-auto">
      <Navbar />
      <div className="p-10">
        <div className="flex justify-between items-center mb-6">
          <h1 className="font-bold text-4xl ">Contenidos</h1>
          <div>
            <Link
              to="add"
              className="flex justify-center items-center bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            >
              <IoIosAdd />
              <p className="hidden md:block">Agregar contenido</p>
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
            placeholder="Buscar Encargado"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full hidden md:block">
            <thead className="bg-gray-50 w-full border-b-2 border-gray-200">
              <tr className="w-full">
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  #
                </th>
                <th className="w-48 p-3 text-sm font-semibold tracking-wide text-left">
                  Nombre
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Descripción del contenido
                </th>
                <th className="w-28 p-3 text-sm font-semibold tracking-wide text-left">
                  Acciones
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {filterdContent()?.map((c, index) => (
                <tr
                  className={`${
                    index % 2 == 0 ? "bg-white" : "bg-gray-100"
                  } lg:max-h-full max-h-10`}
                >
                  <th className="whitespace-nowrap ">{currentPage + index + 1}</th>
                  <td className="p-3 text-sm text-gray-700">{c.name}</td>
                  <td className="p-3 text-sm text-gray-700">{c.description}</td>
                  <td className="whitespace-nowrap p-3 text-sm text-gray-700">
                    <button
                      className="mr-3 hover:text-main-prowess hover:scale-125"
                      onClick={() => openModal(c)}
                    >
                      <AiFillEye fontSize={20} />
                    </button>
                    <button
                      className="mr-3 hover:text-main-prowess hover:scale-125"
                      onClick={() => openUpdate(c)}
                    >
                      <AiFillEdit fontSize={20} />
                    </button>
                    <button
                      className="hover:text-red-500 hover:scale-125"
                      onClick={() => openDeleteModal(c)}
                    >
                      <AiFillDelete fontSize={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="block md:hidden">
            {contents?.map((c, index) => (
              <Content
                key={index}
                c={c}
                deleteFunction={openDeleteModal}
                editFunction={openUpdate}
                viewFunction={openModal}
              />
            ))}
          </div>
        </div>
        
        {/* Pagination */}
        <div className='w-full flex justify-center items-center'>
        <button
          className='bg-main-prowess text-white font-bold py-2 px-4 rounded disabled:bg-gray-400 mr-3 hover:bg-opacity-90 focus:outline-none'
          onClick={returnPage}
          disabled={currentPage - pageSize < 0}
        >
          Anterior
        </button>
        <p className="mr-3">{currentPage / pageSize + 1}/{totalPages}</p>
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
          contentLabel="Contenido"
          className="w-4/5 md:w-fit h-4/5 bg-white  overflow-y-auto shadow-xl absolute p-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <div className="relative w-fit h-full p-10">
            <div
              className="absolute top-1 right-1 cursor-pointer hover:scale-125 transition-all  ease-in-out"
              onClick={closeModal}
            >
              <AiOutlineClose />
            </div>

            <h1 className="font-bold text-3xl"> Visualizar contenido</h1>
            <div className="pl-3 pb-4">
              <div className="flex w-fit flex-col">
                <div className="w-full p-2">
                  <h3 className="font-medium">Nombre</h3>
                  <p>{selectedContent.name}</p>
                </div>
                <div className="w-full p-2">
                  <h3 className="font-medium">Descripcion</h3>
                  <p>{selectedContent.description}</p>
                </div>
              </div>
            </div>
          </div>
        </Modal>

        <Modal
          isOpen={updateModal}
          onRequestClose={closeUpdate}
          contentLabel="Contenido"
          className="w-fit h-4/5 bg-white  overflow-y-auto shadow-xl absolute p-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
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
                <h1 className=" font-bold text-4xl">Editar contenido</h1>
              </div>
              <h3 className="font-medium text-xl">Datos del Contenido</h3>
              <div className="flex w-full  flex-wrap">
                <div className="md:w-1/3 w-full p-2 ">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-last-name"
                  >
                    {" "}
                    Contenido
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="text"
                    name="name"
                    value={selectedContent.name}
                    onChange={handleChange}
                    placeholder="Contenido..."
                  />
                </div>

                <div className="flex w-full  flex-wrap">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-last-name"
                  >
                    Descripción
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    name="description"
                    onChange={handleChange}
                    value={selectedContent.description}
                    type="text"
                    placeholder="Descripción..."
                  />
                </div>
              </div>

              <div className="w-full flex justify-end mt-3 p-2">
                <button
                  onClick={handleUpdate}
                  className="bg-transparent flex justify-center items-center hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                >
                  Actualizar
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
            ¿Seguro que desea eliminar el contenido {selectedContent.name}?
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
export default Contents;
