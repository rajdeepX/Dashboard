import React from "react";
import { Link } from "react-router-dom";

import "./Contacts.css";

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
    <div className="flex flex-col gap-[0.7rem] w-[150px] h-40 justify-center items-center text-center mb-[80px]">
      <div className="border-2 w-[190px] h-[156px] flex flex-col gap-4 p-5 rounded-[10px] border-solid border-[#a3a3a3]">
        <h2 className="capitalize text-xl">{fName}</h2>
        <h2 className="capitalize text-xl">{lName}</h2>
        <h2 className="@apply font-medium">{status}</h2>
      </div>
      <div className="flex flex-col gap-2">
        <Link to={`/edit-contact/${id}`}>
          <button className="bg-[#98d63b] text-white w-20 px-3 py-[7px] rounded-[10px] font-sans font-[500]">
            Edit
          </button>
        </Link>
        <button
          className="bg-[#f03333] text-white w-20 px-3 py-[7px] rounded-[10px] font-sans font-[500]"
          onClick={() => handleDelete(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Contacts;
