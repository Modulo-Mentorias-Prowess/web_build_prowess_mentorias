import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import {
  AiFillEye,
  AiFillDelete,
  AiFillEdit,
  AiOutlineClose,
} from "react-icons/ai";
import {IoIosAdd} from 'react-icons/io'
import { Link } from 'react-router-dom';
import Navbar from "../../components/Navbar";
import Modal from "react-modal";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});
  const openViewModal = () => {
    setViewModalOpen(true);
  };

  const closeViewModal = () => {
    setViewModalOpen(false);
  };

  const handleViewSelection = (p) => {
    setSelectedProduct(p);
    openViewModal();
  };
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

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="p-10">
      <div className='flex justify-between items-center mb-6'>
            <h1 className='font-bold text-4xl '>Productos</h1>
            <div>
              <Link
                to="add"
                className='flex justify-center items-center bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'
              >
                <IoIosAdd/>
                <p className='hidden md:block'>
                  Agregar producto 
                </p>
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
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Nombre
                </th>
                <th className="w-80 p-3 text-sm font-semibold tracking-wide text-left">
                  Descripción
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Precio ($)
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Emprendedor
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Emprendimiento
                </th>
                
                <th className="w-28 p-3 text-sm font-semibold tracking-wide text-left">
                  Acciones
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {products?.map((p, index) => (
                <tr
                  className={`${
                    index % 2 == 0 ? "bg-white" : "bg-gray-100"
                  } lg:max-h-full max-h-10`}
                >
                  <th className="whitespace-nowrap ">{index + 1}</th>
                  <td className="whitespace-nowrap p-3 text-sm text-gray-700">
                    {p.name}
                  </td>
                  <td className="p-3 text-sm text-gray-700">
                    {p.description}
                  </td>
                  <td className="whitespace-nowrap p-3 text-sm text-gray-700">
                    {p.price}
                  </td>
                  <td className="p-3 text-sm text-gray-700">
                    {p.full_name}
                  </td>
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
                    <button className="mr-3 hover:text-main-prowess hover:scale-125">
                      <AiFillEdit fontSize={20} />
                    </button>
                    <button className="hover:text-red-500 hover:scale-125">
                      <AiFillDelete fontSize={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/**
       * View Modal
       */}
      <Modal
        isOpen={viewModalOpen}
        onRequestClose={closeViewModal}
        contentLabel="Producto"
        className="w-fit h-fit bg-white  overflow-y-auto shadow-xl absolute p-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
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
    </div>
  );
};

export default Products;
