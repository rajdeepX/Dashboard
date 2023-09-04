import React from "react";
import { Link } from "react-router-dom";

// import "./Contacts.css";

import { useDispatch } from "react-redux";
import { deleteContact } from "../features/contactSlice";

type Contact = {
  id: string;
  fName: string;
  lName: string;
  status: string;
};

const Contacts = ({ id, fName, lName, status }: Contact) => {
  const dispatch = useDispatch();

  const handleDelete = (id: string) => {
    dispatch(deleteContact(id));
  };

  return (
    <div className="flex flex-col gap-4 bg-[#ddd] p-[7px] rounded-[7px]">
      <div className="flex flex-col gap-3 p-3">
        <h2 className="capitalize text-xl">{fName}</h2>
        <h2 className="capitalize text-xl">{lName}</h2>
        <h2 className="font-medium">{status}</h2>
      </div>
      <div className="flex justify-between">
        <Link to={`/edit-contact/${id}`}>
          <button className="bg-[rgb(126,189,33)] text-[black] px-[15px] py-[7px] rounded-[7px]">
            Edit
          </button>
        </Link>
        <button
          className="bg-[rgb(230,24,24)] text-white px-[15px] py-[7px] rounded-[7px]"
          onClick={() => handleDelete(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Contacts;
