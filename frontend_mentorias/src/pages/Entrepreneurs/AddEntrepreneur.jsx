import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { IoArrowBackOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { FiArrowRight } from "react-icons/fi";
import  ERRORViewModal from  "../pruebamodal/modaldeprueba";
import  CONFIRMViewModal from  "../pruebamodal/Acept";


function AddEntrepreneur() {
  const errorStyle = 'appearance-none block w-full bg-gray-200 text-gray-700 border border-red-800 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-red-800'
  const normalStyle = 'appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [CONFIRMviewModalOpen, setCONFIRMViewModalOpen] = useState(false);
  const [errorType, setErrorType]= useState("");
  const navigate = useNavigate();
  //metodo cerrar ventana modal error
  const closeModal = () => {
    setViewModalOpen(false);
    setCONFIRMViewModalOpen(false);
  }

  //metodo abrir ventana modal error
  const openModal = (controlState,typeErr) => {
    controlState(true);
    setErrorType(typeErr);
  };

  const openCONFIRMModal = (controlState) => {
    controlState(true);
  };

  const closeCONFIRMModal = () => {
      setCONFIRMViewModalOpen(false);
      navigate("/entrepreneurs")
    }
  
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
  //constante asignar errores
  const [errors, setErrors] = useState({
    id: false,
    names: false,
    last_names: false,
    email: false,
    address: false,
    phone: false,
    nameStore: false,
    descriptionStore: false,
    googleMapsURL: false,
    sector: false,
    city: false,
    province: false,
    twitter: false,
    facebook: false,
    instagram: false,
    tiktok: false,
    type: false,
    
  })


  
  const handleChange = (e) => {
    
    
    setEntrepreneurData({...entrepreneurData,[e.target.name]: e.target.value});
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
    //console.log(`data: ${data}` )
    

    if (!validateEmail(data.entrepreneur.email)) {
      //alert("No es un email valido.");
      openModal(setViewModalOpen,'El email ingresado no es valido verifique que este escrito correctamente')
      return;
    }
    openCONFIRMModal(setCONFIRMViewModalOpen); // Mostrar modal de éxito si todo está correcto

    axios
      .post("http://localhost:3001/createEntrepreneur", data)
      .then((response) => {
        openCONFIRMModal(setCONFIRMViewModalOpen)
      })
      .catch((err) => {
        //TODO: Handle errors
        //TODO: Handle errors
        //TODO: Handle errors
        //alert("Hubo un error registrando al emprendedor.");
        openModal(setViewModalOpen,err)
      });
    };

  const roles = [
    { name: "none", desc: "Seleccione una Fundación..." },
    { name: "FUDELAS", desc: "FUDELAS" },
    { name: "HIAS", desc: "HIAS" },
    { name: "PRIVADO", desc: "PRIVADO" },
  ];


  //funcion usada en evento focus
  const validateData = (data) => {

    setErrors({

      id: !data.id,
      names: !data.names,
      last_names: !data.last_names,
      email: !data.email,
      address: !data.address,
      phone: !data.phone,
      nameStore: !data.nameStore,
      descriptionStore: !data.descriptionStore,
      googleMapsURL: !data.googleMapsURL,
      sector: !data.sector,
      city: !data.city,
      province: !data.province,
      twitter: !data.twitter,
      facebook: !data.facebook,
      instagram: !data.instagram,
      tiktok: !data.tiktok,
      type: !data.type,
    })
    
    if (!Object.values(errors).every((value) => value === false)) {
      return true
    }

    return false
  }

  const handleLostFocus = () => {
    let data = entrepreneurData
    
    if(validateData(data)){
      return
    }
  }

  //evento focus

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
                //className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                className={errors.names ? errorStyle : normalStyle}
                
                type="text"
                name="names"
                onChange={handleChange}
                onBlur={ handleLostFocus}
                placeholder="Nombres..."
              />
              {
                  errors.names && (
                    <p className='text-red-600 italic'>Este campo es Obligatorio</p>
                  )
              }
            </div>
            <div className="md:w-1/2 w-full p-2">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Apellidos
              </label>
              <input
              className={errors.last_names ? errorStyle : normalStyle}
                //className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name="last_names"
                onChange={handleChange}
                onBlur={handleLostFocus}
                type="text"
                placeholder="Apellidos..."
              />
              {
                  errors.last_names && (
                    <p className='text-red-600 italic'>Este campo es Obligatorio</p>
                  )
              }
            </div>

            <div className="md:w-1/2 p-2 w-full">
              <label
                className=" uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Email
              </label>
              <input
                //className="appearance-none  w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                className={errors.email ? errorStyle : normalStyle}
                name="email"
                onChange={handleChange}
                onBlur={ handleLostFocus}
                type="email"
                placeholder="ejemplo@ejemplo.com"
              />
              {
                  errors.email && (
                    <p className='text-red-600 italic'>Este campo es Obligatorio</p>
                  )
              }
            </div>
            <div className="md:w-1/2 p-2 w-full">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Teléfono
              </label>
              <input
                className={errors.phone ? errorStyle : normalStyle}
                //className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name="phone"
                onChange={handleChange}
                onBlur={handleLostFocus}
                type="text"
                placeholder="0999999999"
              />
              {
                  errors.phone && (
                    <p className='text-red-600 italic'>Este campo es Obligatorio</p>
                  )
              }
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
                  //className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  className={errors.nameStore ? errorStyle : normalStyle}
                  name="nameStore"
                  onChange={handleChange}
                  onBlur={handleLostFocus}
                  type="text"
                  placeholder="Emprendimiento..."
                />
                {
                  errors.nameStore && (
                    <p className='text-red-600 italic'>Este campo es Obligatorio</p>
                  )
                }

              </div>
              {/* Implement the fundation of entrepreneurs */}
 
              <div className="md:w-1/2 w-full p-2">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Fundación
                </label>

                  <select
                  //className="appearance-none block w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  className={errors.type ? errorStyle : normalStyle}
                  name="type"
                  onChange={handleChange}
                  onBlur={ handleLostFocus}
                  defaultValue="none"
                >
                  <option value={roles[0].name} >
                    {roles[0].desc}
                  </option>

                  {roles.slice(1, 4).map((role) => (
                    <option value={role.name} key={role.name}>
                      {role.desc}
                    </option>
                  ))} 
                </select>
                {
                  errors.type && (
                    <p className='text-red-600 italic'>Este campo es Obligatorio</p>
                  )
                }
              </div>

              <div className="w-full p-2">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Descripción del emprendimiento
                </label>
                <input
                  //className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  className={errors.descriptionStore ? errorStyle : normalStyle}
                  
                  name="descriptionStore"
                  onChange={handleChange}
                  onBlur={handleLostFocus}
                  type="text"
                  placeholder="Descripción del emprendimiento..."
                />
                {
                  errors.descriptionStore && (
                    <p className='text-red-600 italic'>Este campo es Obligatorio</p>
                  )
                }
              </div>

              <div className="w-full p-2">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Dirección
                </label>
                <input
                
                  //className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  className={errors.address ? errorStyle : normalStyle}
                  name="address"
                  onChange={handleChange}
                  onBlur={handleLostFocus}
                  type="text"
                  placeholder="Av. Ejemplar OE4-76 y Calle Ejemplo OS6-35"
                />
                {
                  errors.address && (
                    <p className='text-red-600 italic'>Este campo es Obligatorio</p>
                  )
                }
              </div>
              <div className="w-full p-2">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  URL Google Maps
                </label>
                <input
                  //className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  className={errors.googleMapsURL ? errorStyle : normalStyle}
                  name="googleMapsURL"
                  onChange={handleChange}
                  type="text"
                  placeholder="https://google.maps.com/example "
                />
                {
                  errors.googleMapsURL && (
                    <p className='text-red-600 italic'>Este campo es Obligatorio</p>
                  )
                }

              </div>
              <div className="md:w-1/3 w-full p-2">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Sector
                </label>
                <input
                  //className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  className={errors.sector ? errorStyle : normalStyle}
                  name="sector"
                  onChange={handleChange}
                  onBlur={handleLostFocus}
                  type="text"
                  placeholder="Sector..."
                />
                {
                  errors.sector && (
                    <p className='text-red-600 italic'>Este campo es Obligatorio</p>
                  )
                }
              </div>
              <div className="md:w-1/3 w-full p-2">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Ciudad
                </label>
                <input
                  //className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  className={errors.city ? errorStyle : normalStyle}
                  name="city"
                  onChange={handleChange}
                  onBlur={handleLostFocus}
                  type="text"
                  placeholder="Ciudad..."
                />
                {
                  errors.city && (
                    <p className='text-red-600 italic'>Este campo es Obligatorio</p>
                  )
                }
              </div>
              <div className="md:w-1/3 w-full p-2">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Provincia
                </label>
                <input
                  //className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  className={errors.province ? errorStyle : normalStyle}
                  name="province"
                  onChange={handleChange}
                  onBlur={handleLostFocus}
                  type="text"
                  placeholder="Provincia..."
                />
                {
                  errors.province && (
                    <p className='text-red-600 italic'>Este campo es Obligatorio</p>
                  )
                }
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
                  //className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  className={errors.twitter ? errorStyle : normalStyle}
                  name="twitter"
                  onChange={handleChange}
                  onBlur={handleLostFocus}
                  type="text"
                  placeholder="Twitter..."
                />
                {
                  errors.twitter && (
                    <p className='text-red-600 italic'>Este campo es Obligatorio</p>
                  )
                }
              </div>
              <div className="md:w-1/4 w-full p-2">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Facebook
                </label>
                <input
                  //className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                
                  className={errors.facebook ? errorStyle : normalStyle}
                  name="facebook"
                  onChange={handleChange}
                  onBlur={handleLostFocus}
                  type="text"
                  placeholder="Facebook..."
                />
                {
                  errors.facebook && (
                    <p className='text-red-600 italic'>Este campo es Obligatorio</p>
                  )
                }
              </div>
              <div className="md:w-1/4 w-full p-2">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Instagram
                </label>
                <input
                  //className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  className={errors.instagram ? errorStyle : normalStyle}
                  name="instagram"
                  onChange={handleChange}
                  onBlur={handleLostFocus}
                  type="text"
                  placeholder="Instagram..."
                />
                {
                  errors.instagram && (
                    <p className='text-red-600 italic'>Este campo es Obligatorio</p>
                  )
                }
              </div>
              <div className="md:w-1/4 w-full p-2">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Tiktok
                </label>
                <input
                  //className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  className={errors.tiktok ? errorStyle : normalStyle}
                  name="tiktok"
                  onChange={handleChange}
                  type="text"
                  placeholder="Tiktok..."
                />
                {
                  errors.tiktok && (
                    <p className='text-red-600 italic'>Este campo es Obligatorio</p>
                  )
                }
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
      <div>
        <ERRORViewModal
            closeModal={closeModal}
            viewModalOpen={viewModalOpen}
            errorType={errorType}
        />
        <CONFIRMViewModal
            closeModal={closeCONFIRMModal}
            viewModalOpen={CONFIRMviewModalOpen}
        />
      </div>
    </div>
  );
}



export default AddEntrepreneur;
