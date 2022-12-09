import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import axios from "axios";
import { IoIosAdd } from "react-icons/io";
import { Link } from "react-router-dom";
import MentorshipsTable from "../../components/MentorshipsTable";
import MentorshipViewModal from "../../components/MentorshipViewModal";
import MentorshipUpdateModal from "../../components/MentorshipUpdateModal";
import MentorshipDeleteModal from "../../components/MentorshipDeleteModal";
import { operation } from "../../utils/operations";

const Mentorships = () => {
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
  const closeModal = (operation) => {

    switch (operation) {
      case 0:
        setViewModalOpen(false);
        break;
      case 1:
        setUpdateModalOpen(false);
        break;
      case 2:
        setDeleteModal(false);
        break;
    
      default:
        break;
    }
  };

  /**
   * Handles the selection of a mentorship, also fetchs the contents
   * of such mentorship if asked.
   * @param {boolean} needContents: if contents of a mentorship are necessary
   * @param {function} controlState: set state function
   * @param {Mentorship} m: mentorship info
   */
  const handleSelect = (needContents,operation, m) => {
    setSelectedMentorship(m);
    if (needContents) {
      fetchContents(m.id);
    }
    switch (operation) {
      case 0:
        openModal(setViewModalOpen)
        break;
      case 1:
        openModal(setUpdateModalOpen)
        break;
      case 2:
        openModal(setDeleteModal);
        break;
    
      default:
        break;
    }
  };

  /**
   * Deletes the selected mentorship from the database.
   */
  const handleDelete = () => {
    axios
      .delete(`http://localhost:3001/deleteMentorship/${selectedMentorship.id}`)
      .then((_response) => {
        // Could do a handshake so it send the data when deleting
        closeModal(operation.DELETE);
        //Filter the mentorship to delete it without fetching from the API.
        setMentorships(
          mentorships?.filter((m) => m.id !== selectedMentorship.id)
        );
      })
      .catch((err) => {
        // TODO: HANDLE EXCEPTION TYPES 400 & 500
        alert("Hubo un error al borrar el contenido.");
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
        closeModal(operation.UPDATE);
      })
      .catch((err) => {
        // TODO: HANDLE EXCEPTION TYPES 400 & 500
        alert(err);
      });
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
              <p className="hidden md:block">
                Agregar Mentorías
              </p>
            </Link>
          </div>
        </div>
        <div className="overflow-x-auto">
          <MentorshipsTable mentorships={mentorships} handleSelect={handleSelect}/>
        </div>
      </div>
      
      <MentorshipViewModal
        closeModal={closeModal}
        selectedContents={selectedContents}
        selectedMentorship={selectedMentorship}
        viewModalOpen={viewModalOpen}
      />

      <MentorshipUpdateModal
      closeModal={closeModal}
      handleUpdate={handleUpdate}
      selectedContents={selectedContents}
      selectedMentorship={selectedMentorship}
      updateModalOpen={updateModalOpen}
      setSelectedMentorship={setSelectedMentorship}
      />

      <MentorshipDeleteModal
        closeModal={closeModal}
        deleteModal={deleteModal}
        selectedMentorship={selectedMentorship}
        handleDelete={handleDelete}
      />
      
    </div>
  );
};

export default Mentorships;
