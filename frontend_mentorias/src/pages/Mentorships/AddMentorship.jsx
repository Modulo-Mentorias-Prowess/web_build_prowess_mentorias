import axios from "axios";
import React, { useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { IoArrowBackOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { v4 as uuidv4 } from "uuid";
import { AiOutlineClose } from "react-icons/ai";

const AddMentorship = () => {
  const navigate = useNavigate();
  const [mentorship, setMentorship] = useState({
    contents: []
  });
  const [entrepreneurs, setEntrepreneurs] = useState([]);
  const [managers, setManagers] = useState([]);
  const [contents, setContents] = useState([])
  const [selectedContents, setSelectedContents] = useState([])
  const [selectContent, setselectContent] = useState("")
  const [selectedEntreprenuer, setSelectedEntreprenuer] = useState(null);
  const [selectedManager, setSelectedManager] = useState(null)
  const [queryEntrepreneur, setQueryEntrepreneur] = useState("");
  const [queryManager, setQueryManager] = useState("")

  const handleEntrepreneurSelect = (e) => {
    setMentorship({ ...mentorship, entrepreneur: e });
    setQueryEntrepreneur("")
    setSelectedEntreprenuer(`${e.names} ${e.last_names} - ${e.nameStore}`);
  }
  const handleManagerSelect = (m) => {
    setMentorship({ ...mentorship, manager: m });
    setQueryManager("")
    setSelectedManager(`${m.names} ${m.last_names} - ${m.email}`);
  }

  const removeSelected = (e) => {
    e.preventDefault()
    setMentorship({...mentorship, entrepreneur: null})
    setSelectedEntreprenuer(null)
  }
  const removeSelectedManager = (e) => {
    e.preventDefault()
    setMentorship({...mentorship, manager: null})
    setSelectedManager(null)
  }

  const handleSearch = (e) => {
    setQueryEntrepreneur(e.target.value);
  };
  const handleSearchManager = (e) => {
    setQueryManager(e.target.value);
  };

  useEffect(() => {
    fetchSearch();
  }, [queryEntrepreneur]);

  useEffect(() => {
    fetchSearchManager();
  }, [queryManager]);
  useEffect(() => {
    fetchContents();
  }, []);


  const fetchContents = () =>{
    axios.get("http://localhost:3001/contents")
         .then((response)=>{
            setContents(response.data)
         })
         .catch((err)=>{
          alert("Hubo un error obteniendo los datos.")
         })
  }

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

  const handleSelect=(e)=>{

    let s = contents.filter((c)=>c.id == e.target.value)[0]
    setContents(contents.filter((c)=> c.id != s.id))


    setMentorship({...mentorship, contents: [...mentorship.contents, s]})
    setSelectedContents([...selectedContents, s])
    setselectContent("")
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = mentorship;
    data.id = uuidv4();
    console.log(data);

    // TODO: DATA VALIDATION AND UX
    if (
      !data.id ||
      !data.title ||
      !data.date_mentorship ||
      !data.description ||
      !data.entrepreneur ||
      !data.manager ||
      data.contents.length == 0 
    ) {
      return;
    }
    axios
      .post("http://localhost:3001/createMentorship", { mentorship: data })
      .then((response) => {
        navigate("/mentorships");
      })
      .catch((err) => {
        // TODO: Handle exceptions
        alert("Hubo un error al enviar los datos.");
      });
      
  };

  const deleteContent = (e,c) =>{
    e.preventDefault()
    const newContent = selectedContents.filter((i)=>i.id != c.id)
    setSelectedContents(newContent)
    setMentorship({...mentorship, contents: newContent})
    setContents([...contents, c])
  }

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
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                name="title"
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
                onChange={handleChange}
                type="text"
                placeholder="Descipción..."
              />
            </div>
            <div className="md:w-1/3 w-full p-2">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Fecha y Hora
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name="date_mentorship"
                onChange={handleChange}
                type="datetime-local"
                placeholder="$10..."
              />
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
                    className="ml-2"/>
                    </button>
                    </p>
                </div>
              )}
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name="search"
                value={queryManager}
                onChange={handleSearchManager}
                type="text"
                placeholder="Buscar..."
              />
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
                    className="ml-2"/>
                    </button>
                    </p>
                </div>
              )}
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name="search"
                value={queryEntrepreneur}
                onChange={handleSearch}
                type="text"
                placeholder="Buscar..."
              />
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
                    {
                        selectedContents.map((c)=>(

                            <p class="px-4 py-2 flex items-center    bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium rounded-full">
                            {c.name}
                            <button>

                            <AiOutlineClose 
                            onClick={(e)=>deleteContent(e,c)}
                            className="ml-2"/>
                            </button>
                            </p>
                        ))
                    }
                </div>
              )}
              <select className="w-full p-2" 
              onChange={handleSelect}
              value={selectContent}>
                <option value="" disabled>Seleccione una o mas...</option>
                {
                    contents?.map((c)=>(
                        <option value={c.id}>{c.name}</option>
                    ))
                }
              </select>

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
    </div>
  );
};

export default AddMentorship;
