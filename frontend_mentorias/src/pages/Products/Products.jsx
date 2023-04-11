import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import {AiFillEye, AiFillDelete, AiFillEdit, AiOutlineClose} from 'react-icons/ai'
import Modal from 'react-modal';
import {IoIosAdd} from 'react-icons/io'
import { Link } from 'react-router-dom';
import Product from "../../components/Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false)
  const [deleteModalOpen, setDeleteModalOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState({});
  const [currentPage, setCurrentPage] = useState(0);
  const [search, setSearch] = useState("");
  const pageSize = 3;

  // TODO: must refactor to look like mentorship openModal and closeModal methods.

  const openViewModal = () => {
    setViewModalOpen(true);
  };

  const closeViewModal = () => {
    setViewModalOpen(false);
  };

  const openUpdateModal = (p) => {
    setSelectedProduct(p)
    setUpdateModalOpen(true);
  };

  const closeUpdateModal = () => {
    setUpdateModalOpen(false);
  };

  const openDeleteModal = (p) => {
    setSelectedProduct(p)
    setDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setDeleteModalOpen(false);
  };

  // REFACTOR TILL HERE

  const handleViewSelection = (p) => {
    setSelectedProduct(p);
    openViewModal();
  };

  const handleChange = (e) => {
    setSelectedProduct({...selectedProduct, [e.target.name]: e.target.value})
  }


  /**
   * Handles the deletion of the product on the database.
   */
  const handleDelete = () => {
    axios.delete(`http://localhost:3001/deleteProduct/${selectedProduct.id}`)
         .then((response)=>{
          setDeleteModalOpen(false)
          setProducts(products?.filter((p) => p.id != selectedProduct.id))
         })
          .catch((err)=>{
            // TODO: HANDLE EXCEPTION TYPES 400 & 500
            alert("Hubo un error al borrar el producto")
      
          })
  }


  /**
   * Updates the product from the database with the new values given by the user
   */
  const handleUpdate = (p) => {
    p.preventDefault()
    let data = {
      id: selectedProduct.id,
      name: selectedProduct.name,
      description: selectedProduct.description,
      price: parseFloat(selectedProduct.price)
    }

    // TODO: inform the user of missing inputs.
    if(!selectedProduct.name || !selectedProduct.price || !selectedProduct.description){
      return
    }

    axios.patch("http://localhost:3001/updateProduct", {product: data})
         .then((response)=>{
          setProducts([selectedProduct,  ...products?.filter((item) => item.id !== selectedProduct.id) ])
          closeUpdateModal()
        })
        .catch((err)=>{
          // TODO: handle error in http
          alert(err)
        })

  }

  const filterdProduct = () => {
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

  const handleSearch = (p) => {
    let val = p.target.value;
    setSearch(val);
    fetchSearchProduct();
  };

  const fetchSearchProduct = () => {
    if (search.length >= 3) {
      axios
        .get(`http://localhost:3001/searchProduct/${search}`)
        .then((data) => {
          setProducts(data.data);
        })
        .catch((err) => {
          alert("Hubo un error obteniendo los datos.");
        });
    } else {
      fetchProducts();
    }
  };

  const [display, setDisplay] = useState([]);
  useEffect(() => {
    setDisplay(products);
  }, [products]);

  /**
   * Gets all the products from the database.
   */
  const fetchProducts = () => {
    axios
      .get("http://localhost:3001/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => {
        alert("Hubo un error obteniendo los datos.");
      });
  };

  /**
   * Get all the products when component did mount.
   */
  useEffect(() => {
    fetchProducts();
  }, []);

  const totalPages = Math.ceil(display.length / pageSize) // Número de páginas

  return (
    <div id="main-app overflow-y-auto ">
      <Navbar />
      <div className="p-10">
        <div className="flex justify-between items-center mb-6">
          <h1 className="font-bold text-4xl ">Productos</h1>
          <div>
            <Link
              to="add"
              className="flex justify-center items-center bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            >
              <IoIosAdd />
              <p className="hidden md:block">Agregar producto</p>
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

        <div className="overflow-x-auto">
          <table className="w-full hidden md:block">
            <thead className="bg-gray-50 border-b-2 border-gray-200">
              <tr>
                <th className="w-10 p-3 text-sm font-semibold tracking-wide text-left">
                  #
                </th>
                <th className="w-80 p-3 text-sm font-semibold tracking-wide text-left">
                  Nombre
                </th>
                <th className="w-80 p-3 text-sm font-semibold tracking-wide text-left">
                  Descripción
                </th>
                <th className=" p-3 text-sm font-semibold tracking-wide text-left">
                  Precio ($)
                </th>
                <th className="w-80 p-3 text-sm font-semibold tracking-wide text-left">
                  Emprendedor
                </th>
                <th className="w-80 p-3 text-sm font-semibold tracking-wide text-left">
                  Emprendimiento
                </th>

                <th className="w-28 p-3 text-sm font-semibold tracking-wide text-left">
                  Acciones
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {filterdProduct()?.map((p, index) => (
                <tr
                  className={`${
                    index % 2 == 0 ? "bg-white" : "bg-gray-100"
                  } lg:max-h-full max-h-10`}
                >
                  <th className="whitespace-nowrap ">{currentPage + index + 1}</th>
                  <td className="whitespace-nowrap p-3 text-sm text-gray-700">
                    {p.name}
                  </td>
                  <td className="whitespace-nowrap p-3 text-sm text-gray-700">
                    {p.description}
                  </td>
                  <td className="whitespace-nowrap p-3 text-sm text-gray-700">
                    {p.price}
                  </td>
                  <td className="p-3 text-sm text-gray-700">{p.full_name}</td>
                  <td className="whitespace-nowrap p-3 text-sm text-gray-700">
                    {p.nameStore}
                  </td>
                  <td className="whitespace-nowrap p-3 text-sm text-gray-700">
                    <button
                      className="mr-3 hover:text-main-prowess hover:scale-125"
                      onClick={() => handleViewSelection(p)}
                    >
                      <AiFillEye fontSize={20} />
                    </button>
                    <button
                      onClick={() => openUpdateModal(p)}
                      className="mr-3 hover:text-main-prowess hover:scale-125"
                    >
                      <AiFillEdit fontSize={20} />
                    </button>
                    <button
                      onClick={() => openDeleteModal(p)}
                      className="hover:text-red-500 hover:scale-125"
                    >
                      <AiFillDelete fontSize={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="block md:hidden">
            {products?.map((p, index) => (
              <Product
                key={index}
                p={p}
                deleteFunction={openDeleteModal}
                editFunction={openUpdateModal}
                viewFunction={handleViewSelection}
              />
            ))}
          </div>
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

      {/**
       * View Modal
       */}
      <Modal
        isOpen={viewModalOpen}
        onRequestClose={closeViewModal}
        contentLabel="Producto"
        className="w-4/5 md:w-fit h-4/5 bg-white  overflow-y-auto shadow-xl absolute p-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="relative w-full h-full p-10">
          <div
            className="absolute top-1 right-1 cursor-pointer hover:scale-125 transition-all  ease-in-out"
            onClick={closeViewModal}
          >
            <AiOutlineClose />
          </div>

          <h1 className="font-bold text-3xl"> Visualizar producto</h1>
          <div className="pl-3 pb-4">
            <div className="flex w-full flex-col">
              <div className="w-full p-2">
                <h3 className="font-medium">Nombre</h3>
                <p>{selectedProduct.name}</p>
              </div>
              <div className="w-full p-2">
                <h3 className="font-medium">Descripcion</h3>
                <p>{selectedProduct.description}</p>
              </div>
              <div className="w-full p-2">
                <h3 className="font-medium">Precio ($)</h3>
                <p>{selectedProduct.price}</p>
              </div>

              <div className="w-full lg:1/2  p-2">
                <h3 className="font-medium">Emprendedor</h3>
                <p>{selectedProduct.full_name}</p>
              </div>
              <div className="w-full lg:1/2  p-2">
                <h3 className="font-medium">Emprendimiento</h3>
                <p>{selectedProduct.nameStore}</p>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={updateModalOpen}
        onRequestClose={closeUpdateModal}
        contentLabel="Producto"
        className="w-4/5 md:w-fit h-4/5 bg-white  overflow-y-auto shadow-xl absolute p-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div
          className="absolute top-1 right-1 cursor-pointer hover:scale-125 transition-all  ease-in-out"
          onClick={closeUpdateModal}
        >
          <AiOutlineClose fontSize={20} />
        </div>
        <div className="p-10 flex justify-center items-center">
          <form autoComplete="off" className="w-full flex flex-col">
            <div className="flex items-center mb-5">
              <h1 className=" font-bold text-4xl">Editar producto</h1>
            </div>
            <div className="flex w-full  flex-wrap">
              <div className="md:w-1/3 w-full p-2 ">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Nombre
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                  name="name"
                  value={selectedProduct.name}
                  onChange={handleChange}
                  placeholder="Nombre..."
                />
              </div>
              <div className="md:w-1/3 w-full p-2">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Descripción
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  name="description"
                  value={selectedProduct.description}
                  onChange={handleChange}
                  type="text"
                  placeholder="Descripción..."
                />
              </div>

              <div className="md:w-1/3 p-2 w-full">
                <label
                  className=" uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Precio ($)
                </label>
                <input
                  className="appearance-none  w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  name="price"
                  onChange={handleChange}
                  value={selectedProduct.price}
                  type="number"
                  placeholder="10.1"
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
                  value={`${selectedProduct.full_name} - ${selectedProduct.nameStore}`}
                  type="text"
                  disabled
                  placeholder="Emprendedor - Nombre emprendimiento"
                />
              </div>
            </div>

            <div className="w-full flex justify-end mt-3 p-2">
              <button
                onClick={handleUpdate}
                className="bg-transparent flex justify-center items-center hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              >
                Actualizar Producto
              </button>
            </div>
          </form>
        </div>
      </Modal>

      {/**
       * Delete Modal
       */}

      <Modal
        isOpen={deleteModalOpen}
        onRequestClose={closeDeleteModal}
        contentLabel="Producto"
        className="w-80 h-fit p-4 bg-white overflow-y-auto shadow-xl absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <p className="text-center mb-3">
          ¿Seguro que desea eliminar el producto{" "}
          {`${selectedProduct.name} de ${selectedProduct.full_name} - ${selectedProduct.nameStore}`}
          ?
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
  );
};

export default Products;
