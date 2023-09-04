import { useState } from "react";
// import { Link } from "react-router-dom";

import "./Nav.css";

import { useDispatch } from "react-redux";
import { deleteContact } from "../features/contactSlice";
import Modal from "./Modal";

type Contact = {
  id: string;
  fName: string;
  lName: string;
  status: string;
};

const Contacts = ({ id, fName, lName, status }: Contact) => {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  const handleDelete = (id: string) => {
    dispatch(deleteContact(id));
  };

  return (
    <div className="flex flex-col gap-4 bg-[#ddd] p-[7px] rounded-[7px]">
      <div className="p-3">
        <h2 className="capitalize text-xl text-center">{fName}</h2>
        {/* <h2 className="capitalize text-xl">{lName}</h2> */}
        {/* <h2 className="font-medium">{status}</h2> */}
      </div>
      <button
        onClick={() => setIsOpen(true)}
        className="px-[12px] py-[7px] bg-[#808080] text-white rounded-[7px]"
      >
        View Details
      </button>

      <Modal
        fName={fName}
        lName={lName}
        status={status}
        handleDelete={handleDelete}
        id={id}
        open={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
};

export default Contacts;
