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
    <div className="contacts-container">
      <div className="contact-info">
        <h2 className="capitalize text-xl">{fName}</h2>
        <h2 className="capitalize text-xl">{lName}</h2>
        <h2 className="font-medium">{status}</h2>
      </div>
      <div className="contact-btn-container">
        <Link to={`/edit-contact/${id}`}>
          <button className="edit-btn">Edit</button>
        </Link>
        <button className="delete-btn" onClick={() => handleDelete(id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Contacts;
