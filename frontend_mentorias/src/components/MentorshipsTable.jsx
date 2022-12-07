import React from 'react'
import {
    AiFillEye,
    AiFillDelete,
    AiFillEdit,
  } from "react-icons/ai";

const operation = {
    VIEW: 0,
    UPDATE: 1,
    DELETE: 2,
}
const MentorshipsTable = ({mentorships, handleSelect}) => {
  return (
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
                    index % 2 === 0 ? "bg-white" : "bg-gray-100"
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
                      onClick={() => handleSelect(true, operation.VIEW, c)}
                      className="mr-3 hover:text-main-prowess hover:scale-125"
                    >
                      <AiFillEye fontSize={20} />
                    </button>
                    <button
                      onClick={() => handleSelect(true, operation.UPDATE, c)}
                      className="mr-3 hover:text-main-prowess hover:scale-125"
                    >
                      <AiFillEdit fontSize={20} />
                    </button>
                    <button
                      onClick={() => handleSelect(false, operation.DELETE, c)}
                      className="hover:text-red-500 hover:scale-125"
                    >
                      <AiFillDelete fontSize={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
  )
}

export default MentorshipsTable