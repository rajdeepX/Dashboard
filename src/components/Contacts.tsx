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
    <div className="contact-container">
      <div className="contact-info">
        <h2>{fName}</h2>
        <h2>{lName}</h2>
        <h2>{status}</h2>
      </div>
      <div className="contact-edit">
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
