import axios from "axios";
import React, { useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { IoArrowBackOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { v4 as uuidv4 } from "uuid";
import { AiOutlineClose } from "react-icons/ai";
import  ERRORViewModal from  "../pruebamodal/modaldeprueba";
import  CONFIRMViewModal from  "../pruebamodal/Acept";

const AddMentorship = () => {
  // Use state hell, must simplify, maybe with objects????
  const navigate = useNavigate();
  const [mentorship, setMentorship] = useState({
    contents: [],
  });
  const [entrepreneurs, setEntrepreneurs] = useState([]);
  const [managers, setManagers] = useState([]);
  const [contents, setContents] = useState([]);
  const [selectedContents, setSelectedContents] = useState([]);
  const [selectContent, setselectContent] = useState("");
  const [selectedEntreprenuer, setSelectedEntreprenuer] = useState(null);
  const [selectedManager, setSelectedManager] = useState(null);
  const [queryEntrepreneur, setQueryEntrepreneur] = useState("");
  const [queryManager, setQueryManager] = useState("");
  const errorStyle = 'appearance-none block w-full bg-gray-200 text-gray-700 border border-red-800 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-red-500'
  const normalStyle = 'appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [errorType, setErrorType]= useState("");
  const [CONFIRMviewModalOpen, setCONFIRMViewModalOpen] = useState(false);

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
      navigate("/mentorships");
    }

  const [errors, setErrors] = useState({
    id: false,
    title: false,
    date_mentorship: false,
    description: false,
    entrepreneur: false,
    manager: false,
    contents: false
  })

  const validateData = (data) => {

    setErrors({
      id: !data.id,
      title: !data.title,
      date_mentorship: !data.date_mentorship,
      description: !data.description,
      entrepreneur: !data.entrepreneur,
      manager: !data.manager,
      contents: !data.contents
    })
    
    if (!Object.values(errors).every((value) => value === false)) {
      return true
    }

    return false
  }

  const handleLostFocus = () => {
    let data = mentorship
    //data.price = parseFloat(data.price)
    if(validateData(data)){
      return
    }
  }
  /**
   * Fetches the managers data from the database based on the query parameter.
   */
  // const fetchSearchManager = () => {
  //   if (queryManager.length >= 3) {
  //     axios
  //       .get(`http://localhost:3001/searchManager/${queryManager}`)
  //       .then((data) => {
  //         setManagers(data.data);
  //       })
  //       .catch((err) => {
  //         alert("Hubo un error obteniendo los datos.");
  //       });
  //   } else {
  //     setManagers([]);
  //   }
  // };

  /**
   * Fetches the entrepreneurs data from the database based on the query parameter.
   */
  //  const fetchSearch = () => {
  //    if (queryEntrepreneur.length >= 3) {
  //      axios
  //        .get(`http://localhost:3001/searchEntrepreneur/${queryEntrepreneur}`)
  //        .then((data) => {
  //          setEntrepreneurs(data.data);
  //        })
  //        .catch((err) => {
  //          alert("Hubo un error obteniendo los datos.");
  //        });
  //    } else {
  //      setEntrepreneurs([]);
  //    }
  //  };

  /**
   * Selects a given entrepreneur.
   * @param {Entrepreneur} e: entrepreneur data.
   */
  const handleEntrepreneurSelect = (e) => {
    setMentorship({ ...mentorship, entrepreneur: e });
    setQueryEntrepreneur("");
    setSelectedEntreprenuer(`${e.names} ${e.last_names} - ${e.nameStore}`);
  };

  /**
   * Selects a given manager.
   * @param {Manager} m: manager data.
   */
  const handleManagerSelect = (m) => {
    setMentorship({ ...mentorship, manager: m });
    setQueryManager("");
    setSelectedManager(`${m.names} ${m.last_names} - ${m.email}`);
  };

  /**
   * Removes selected entrepreneur.
   * @param {Event} e: click event.
   */
  const removeSelected = (e) => {
    e.preventDefault();
    setMentorship({ ...mentorship, entrepreneur: null });
    setSelectedEntreprenuer(null);
  };
  /**
   * Removes selected manager.
   * @param {Event} e: click event.
   */
  const removeSelectedManager = (e) => {
    e.preventDefault();
    setMentorship({ ...mentorship, manager: null });
    setSelectedManager(null);
  };

  /**
   * Changes the search parameter of the entrepreneurs.
   * @param {event} e: typing event.
   */
  const handleSearch = (e) => {
    setQueryEntrepreneur(e.target.value);
  };

  /**
   * Changes the search parameter of the managers.
   * @param {Event} e: typing event.
   */
  const handleSearchManager = (e) => {
    setQueryManager(e.target.value);
  };

  // Search the entrepreneurs every time their query changes
  useEffect(() => {
    const fetchSearch = () => {
      if (queryEntrepreneur.length >= 3) {
        axios
          .get(`http://localhost:3001/searchEntrepreneur/${queryEntrepreneur}`)
          .then((data) => {
            setEntrepreneurs(data.data);
          })
          .catch((err) => {
            alert("Hubo un error obteniendo los datos.");
          });
      } else {
        setEntrepreneurs([]);
      }
    };
    fetchSearch();
  }, 
  //[queryEntrepreneur]
  [queryEntrepreneur]
  );

  // Search the managers every time their query changes.
  useEffect(() => {
    const fetchSearchManager = () => {
      if (queryManager.length >= 3) {
        axios
          .get(`http://localhost:3001/searchManager/${queryManager}`)
          .then((data) => {
            setManagers(data.data);
          })
          .catch((err) => {
            alert("Hubo un error obteniendo los datos.");
          });
      } else {
        setManagers([]);
      }
    };
    fetchSearchManager();
  }, 
  //[queryManager]
  [queryManager]
  );

  //Component did mount fetch contents
  useEffect(() => {
    fetchContents();
  }, []);

  /**
   * Fetches contents from the database.
   */
  const fetchContents = () => {
    axios
      .get("http://localhost:3001/contents")
      .then((response) => {
        setContents(response.data);
      })
      .catch((err) => {
        //TODO: Handle code 500
        alert("Hubo un error obteniendo los datos.");
      });
  };

  
  
  /**
   * Adds the content selected to the selected contents
   * @param {Event} e: selection event.
   */
  const handleSelect = (e) => {
    let s = contents.filter((c) => c.id === e.target.value)[0];
    setContents(contents.filter((c) => c.id !== s.id));

    setMentorship({ ...mentorship, contents: [...mentorship.contents, s] });
    setSelectedContents([...selectedContents, s]);
    setselectContent("");
  };

  /**
   * Registers the mentorship into the database.
   * @param {Event} e: submit event
   * @returns if the data is invalid
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    let data = mentorship;
    data.id = uuidv4();
    console.log(data);

    // TODO: DATA VALIDATION AND UX
    // If user data incomplete, exit the function
    if (
      !data.id ||
      !data.title ||
      !data.date_mentorship ||
      !data.description ||
      !data.entrepreneur ||
      !data.manager ||
      data.contents.length  === 0
    ) {
      openModal(setViewModalOpen,`aun existen campos sin completar`)
      return;
    }
    openCONFIRMModal(setCONFIRMViewModalOpen); // Mostrar modal de éxito si todo está correcto

    axios
      .post("http://localhost:3001/createMentorship", { mentorship: data })
      .then((response) => {
        // If mentorship created, go to the list of mentorships
        openCONFIRMModal(setCONFIRMViewModalOpen)
      })
      .catch((err) => {
        // TODO: Handle exceptions 500 and 400.
        alert("Hubo un error al enviar los datos.");
        // openModal(setViewModalOpen)
      });
  };

  /**
   * Removes content from the selected contents and adds it to the select menu.
   * @param {Event} e: click event.
   * @param {Content} c: content data.
   */
  const deleteContent = (e, c) => {
    e.preventDefault();
    const newContent = selectedContents.filter((i) => i.id !== c.id);
    setSelectedContents(newContent);
    setMentorship({ ...mentorship, contents: newContent });
    setContents([...contents, c]);
  };

  /**
   * Changes new mentorship data.
   * @param {Event} e: change event.
   */
  const handleChange = (e) => {
    setMentorship({ ...mentorship, [e.target.name]: e.target.value });
  };



  return (
    <div>
      <Navbar />
      <div className="p-10 flex justify-center items-center">
        <form autoComplete="off" className="w-full md:w-3/4 flex flex-col">
          <div className="flex items-center mb-5">
            <Link
              to="/mentorships"
              className="flex justify-center items-center hover:scale-105 hover:-translate-x-2 transition-all ease-in-out hover:text-main-prowess"
            >
              <IoArrowBackOutline fontSize={35} />
            </Link>
            <h1 className="ml-3 font-bold text-4xl">
              Agregar una nueva mentoría
            </h1>
          </div>

          <div className="flex w-full  flex-wrap">
            <div className="md:w-1/3 w-full p-2 ">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Título
              </label>
              <input
                //className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                className={errors.title ? errorStyle : normalStyle}
                type="text"
                name="title"
                onChange={handleChange}
                onBlur={handleLostFocus}
                placeholder="Nombre..."
              />
              {
                  errors.title && (
                    <p className='text-red-600 italic'>Este campo es Obligatorio</p>
                  )
              }
            </div>
            <div className="md:w-1/3 w-full p-2">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Descripción
              </label>
              <input
                //className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                
                className={errors.description ? errorStyle : normalStyle}
                name="description"
                onChange={handleChange}
                onBlur={handleLostFocus}
                type="text"
                placeholder="Descipción..."
              />
              {
                  errors.description && (
                    <p className='text-red-600 italic'>Este campo es Obligatorio</p>
                  )
                }
            </div>
            <div className="md:w-1/3 w-full p-2">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Fecha y Hora
              </label>
              <input
                //className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                
                className={errors.date_mentorship ? errorStyle : normalStyle}
                name="date_mentorship"
                onChange={handleChange}
                onBlur={handleLostFocus}
                type="datetime-local"
              />
              {
                  errors.date_mentorship && (
                    <p className='text-red-600 italic'>Este campo es Obligatorio</p>
                  )
                }
            </div>

            <div className="p-2 w-full">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Encargado de la mentoría
              </label>
              {selectedManager && (
                <div className="flex items-center mb-2">
                  <p className="mr-3">Seleccionado:</p>
                  <p class="px-4 py-2 flex items-center    bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium rounded-full">
                    {selectedManager}
                    <button>
                      <AiOutlineClose
                        onClick={removeSelectedManager}
                        className="ml-2"
                      />
                    </button>
                  </p>
                </div>
              )}
              <input
                //className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                className={errors.manager ? errorStyle : normalStyle}
                name="search"
                value={queryManager}
                onChange={handleSearchManager}
                type="text"
                placeholder="Buscar..."
              />
              {
                  errors.manager && (
                    <p className='text-red-600 italic'>Ingrese un Encargado que se encuentre ya registrado</p>
                  )
                }
              <div
                className={`${
                  managers.length > 0 ? "block" : "hidden"
                } p-2 bg-gray-100 w-full max-h-36 overflow-y-auto`}
              >
                {managers.map((m, index) => (
                  <div
                    key={index}
                    onClick={() => handleManagerSelect(m)}
                    className="cursor-pointer text-sm hover:bg-gray-200"
                  >{`${m.names} ${m.last_names} - ${m.email}`}</div>
                ))}
              </div>
            </div>
            <div className="p-2 w-full">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Emprendedor
              </label>
              {selectedEntreprenuer && (
                <div className="flex items-center mb-2">
                  <p className="mr-3">Seleccionado:</p>
                  <p class="px-4 py-2 flex items-center    bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium rounded-full">
                    {selectedEntreprenuer}
                    <button>
                      <AiOutlineClose
                        onClick={removeSelected}
                        className="ml-2"
                      />
                    </button>
                  </p>
                </div>
              )}
              <input
                //className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                className={errors.entrepreneur ? errorStyle : normalStyle}
                name="search"
                value={queryEntrepreneur}
                onChange={handleSearch}
                onBlur={handleLostFocus}
                type="text"
                placeholder="Buscar..."
              />
              {
                  errors.entrepreneur && (
                    <p className='text-red-600 italic'>Ingrese un emprendedor que se encuentre ya registrado</p>
                  )
                }
              <div
                className={`${
                  entrepreneurs.length > 0 ? "block" : "hidden"
                } p-2 bg-gray-100 w-full max-h-36 overflow-y-auto`}
              >
                {entrepreneurs.map((entre, index) => (
                  <div
                    key={index}
                    onClick={() => handleEntrepreneurSelect(entre)}
                    className="cursor-pointer text-sm hover:bg-gray-200"
                  >{`${entre.names} ${entre.last_names} - ${entre.nameStore}`}</div>
                ))}
              </div>
              <div className="p-2 w-full">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Contenidos
                </label>
                {selectedContents.length > 0 && (
                  <div className="flex items-center mb-2">
                    <p className="mr-3">Seleccionado:</p>
                    {selectedContents.map((c) => (
                      <p class="px-4 py-2 flex items-center    bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium rounded-full">
                        {c.name}
                        <button>
                          <AiOutlineClose
                            onClick={(e) => deleteContent(e, c)}
                            className="ml-2"
                          />
                        </button>
                      </p>
                    ))}
                  </div>
                )}
                <select
                  //className="w-full p-2"
                  name='contents'
                  className={errors.contents ? errorStyle : normalStyle}
                  onChange={handleSelect}
                  onBlur={handleLostFocus}
                  value={selectContent}
                >
                  <option value='' disabled>
                    Seleccione una o mas...
                  </option>
                  {contents?.map((c) => (
                    <option value={c.id}>{c.name}</option>
                  ))}
                </select>
                {
                  errors.contents && (
                    <p className='text-red-600 italic'>Este campo es Obligatorio</p>
                  )
                }
              </div>
            </div>
          </div>

          <div className="w-full flex justify-end mt-3 p-2">
            <button
              onClick={handleSubmit}
              className="bg-transparent flex justify-center items-center hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            >
              Registrar Mentoría <FiArrowRight fontSize={20} />
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
};

export default AddMentorship;
