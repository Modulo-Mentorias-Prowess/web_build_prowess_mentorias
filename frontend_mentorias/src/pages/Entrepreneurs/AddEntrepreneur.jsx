import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { IoArrowBackOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { FiArrowRight } from "react-icons/fi";

function AddEntrepreneur() {
  const navigate = useNavigate();
  const [entrepreneurData, setEntrepreneurData] = useState({
    id: "",
    names: "",
    last_names: "",
    email: "",
    address: "",
    phone: "",
    nameStore: "",
    descriptionStore: "",
    googleMapsURL: "",
    sector: "",
    city: "",
    province: "",
    twitter: "",
    facebook: "",
    instagram: "",
    tiktok: "",
    type: "",
  });

  const handleChange = (e) => {
    setEntrepreneurData({
      ...entrepreneurData,
      [e.target.name]: e.target.value,
    });
  };

  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  /**
   * Creates a new entrepreneur in the database.
   * @param {Event} e: form submit event
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    let data = { entrepreneur: entrepreneurData };
    data.entrepreneur.id = uuidv4();

    if (!validateEmail(data.entrepreneur.email)) {
      alert("No es un email valido.");
      return;
    }

    axios
      .post("http://localhost:3001/createEntrepreneur", data)
      .then((response) => {
        navigate("/entrepreneurs");
      })
      .catch((err) => {
        //TODO: Handle errors
        //TODO: Handle errors
        //TODO: Handle errors
        alert("Hubo un error registrando al emprendedor.");
      });
  };

  const roles = [
    { name: "none", desc: "Seleccione una Fundación..." },
    { name: "fudelas", desc: "FUDELAS" },
    { name: "hias", desc: "HIAS" },
    { name: "privado", desc: "Privado" },
  ];

  return (
    <div>
      <Navbar />
      <div className="p-10 flex justify-center items-center">
        <form autoComplete="off" className="w-full md:w-3/4 flex flex-col">
          <div className="flex items-center mb-5">
            <Link
              to="/entrepreneurs"
              className="flex justify-center items-center hover:scale-105 hover:-translate-x-2 transition-all ease-in-out hover:text-main-prowess"
            >
              <IoArrowBackOutline fontSize={35} />
            </Link>
            <h1 className="ml-3 font-bold text-4xl">
              Agregar un nuevo emprendedor
            </h1>
          </div>
          <h3 className="font-medium text-xl">Datos del emprendedor</h3>
          <div className="flex w-full  flex-wrap">
            <div className="md:w-1/2 w-full p-2 ">
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
                onChange={handleChange}
                placeholder="Nombres..."
              />
            </div>
            <div className="md:w-1/2 w-full p-2">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Apellidos
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name="last_names"
                onChange={handleChange}
                type="text"
                placeholder="Apellidos..."
              />
            </div>

            <div className="md:w-1/2 p-2 w-full">
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
                type="email"
                placeholder="ejemplo@ejemplo.com"
              />
            </div>
            <div className="md:w-1/2 p-2 w-full">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Teléfono
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name="phone"
                onChange={handleChange}
                type="text"
                placeholder="0999999999"
              />
            </div>

            <h3 className="mt-3 font-medium text-xl">
              Datos del emprendimiento
            </h3>

            <div className="w-full flex justify-between flex-wrap">
              <div className="md:w-1/2 w-full p-2">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Nombre del emprendimiento
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  name="nameStore"
                  onChange={handleChange}
                  type="text"
                  placeholder="Emprendimiento..."
                />
              </div>
              {/* Implement the fundation of entrepreneurs */}
 
              <div className="md:w-1/2 w-full p-2">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Fundación
                </label>
                
                  <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  name="type"
                  onChange={handleChange}
                  type="text"
                  placeholder="Fundación (HIAS-FUDELAS-PRIVADO)"
                />
                  {
                  /* 
                  <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  name="type"
                  onChange={handleChange}
                  defaultValue="none"
                >
                  <option value={roles[0].name} disabled>
                    {roles[0].desc}
                  </option>
                  {roles.slice(1, 4).map((role) => (
                    <option value={role.name} key={role.name}>
                      {role.desc}
                    </option>
                  ))} 
                </select>*/}
              </div>

              <div className="md:w-1/2 w-full p-2">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Descripción del emprendimiento
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  name="descriptionStore"
                  onChange={handleChange}
                  type="text"
                  placeholder="Descripción del emprendimiento..."
                />
              </div>

              <div className="w-full p-2">
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
                  type="text"
                  placeholder="Av. Ejemplar OE4-76 y Calle Ejemplo OS6-35"
                />
              </div>
              <div className="w-full p-2">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  URL Google Maps
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  name="googleMapsURL"
                  onChange={handleChange}
                  type="text"
                  placeholder="https://google.maps.com/example "
                />
              </div>
              <div className="md:w-1/3 w-full p-2">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Sector
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  name="sector"
                  onChange={handleChange}
                  type="text"
                  placeholder="Sector..."
                />
              </div>
              <div className="md:w-1/3 w-full p-2">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Ciudad
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  name="city"
                  onChange={handleChange}
                  type="text"
                  placeholder="Ciudad..."
                />
              </div>
              <div className="md:w-1/3 w-full p-2">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Provincia
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  name="province"
                  onChange={handleChange}
                  type="text"
                  placeholder="Provincia..."
                />
              </div>
            </div>
            <h3 className="mt-3 font-medium text-xl">
              Datos de las redes sociales
            </h3>
            <div className="w-full flex justify-between flex-wrap">
              <div className="md:w-1/4 w-full p-2">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Twitter
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  name="twitter"
                  onChange={handleChange}
                  type="text"
                  placeholder="Twitter..."
                />
              </div>
              <div className="md:w-1/4 w-full p-2">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Facebook
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  name="facebook"
                  onChange={handleChange}
                  type="text"
                  placeholder="Facebook..."
                />
              </div>
              <div className="md:w-1/4 w-full p-2">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Instagram
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  name="instagram"
                  onChange={handleChange}
                  type="text"
                  placeholder="Instagram..."
                />
              </div>
              <div className="md:w-1/4 w-full p-2">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Tiktok
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  name="tiktok"
                  onChange={handleChange}
                  type="text"
                  placeholder="Tiktok..."
                />
              </div>
            </div>
          </div>
          <div className="w-full flex mt-3  ">
            <button
              onClick={handleSubmit}
              className="bg-transparent flex justify-center items-center hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            >
              Registrar Emprendedor <FiArrowRight fontSize={20} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddEntrepreneur;
