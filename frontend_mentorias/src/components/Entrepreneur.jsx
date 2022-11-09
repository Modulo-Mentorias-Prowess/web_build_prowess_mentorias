import React from "react";

const Entrepreneur = ({ entrepreneur, index }) => {
  return (
    <div className="flex justify-center mb-3">
      <div className="shadow-xl p-6 rounded-lg bg-white max-w-sm">
        <h2 className="font-black leading-tight ">{`${entrepreneur.names} ${entrepreneur.last_names}`}</h2>
        <div className="pl-4 flex flex-wrap">
          <div className="w-full ">
            <p className="font-medium leading-tight">Email</p>
            <p>{entrepreneur.email}</p>
          </div>
          <div className="w-full ">
            <p className="font-medium leading-tight">Teléfono</p>
            <p>{entrepreneur.phone}</p>
          </div>

          <div className="w-full ">
            <p className="font-medium leading-tight">Nombre</p>
            <h3>{entrepreneur.nameStore}</h3>
          </div>
          <div className="w-full ">
            <p className="font-medium leading-tight">Descripción</p>
            <p>{entrepreneur.descriptionStore}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Entrepreneur;
