import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { useDispatch } from "react-redux";
import { editContact } from "../features/contactSlice";
// import { nanoid } from "@reduxjs/toolkit";

const EditContact = () => {
  const { id } = useParams();
  const contact = useAppSelector((state) => state.contact.contacts);
  const currentContact = contact.find((item) => item.id === id);

  const [fName, setFName] = useState(currentContact?.fName!);
  const [lName, setLName] = useState(currentContact?.lName!);
  const [status, setStatus] = useState(currentContact?.status!);
  const dispatch = useDispatch();

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(e.target.value);
  };

  const handleFormEdit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      editContact({
        id: currentContact?.id!,
        fName,
        lName,
        status,
      })
    );
  };

  return (
    <div className="create-form-container page-margin">
      <h1>Edit Contact</h1>
      <form onSubmit={(e) => handleFormEdit(e)}>
        <div className="input-container">
          <label htmlFor="first-name">First Name:</label>
          <input
            type="text"
            value={fName}
            onChange={(e) => setFName(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="last-name">Last Name:</label>
          <input
            type="text"
            value={lName}
            onChange={(e) => setLName(e.target.value)}
          />
        </div>
        <div className="input-radio-container">
          <label htmlFor="status">Status:</label>

          <div className="input-radio-btn">
            <div className="radio-btn">
              <input
                type="radio"
                name="status"
                checked={status === "Active"}
                value="Active"
                onChange={handleRadioChange}
              />
              <p>Active</p>
            </div>
            <div className="radio-btn">
              <input
                type="radio"
                name="status"
                checked={status === "Inactive"}
                value="Inactive"
                onChange={handleRadioChange}
              />
              <p>Inactive</p>
            </div>
          </div>
        </div>
        <div className="edit-btn-container">
          <button className="create-btn">Save Edited Contact</button>

          <Link to={"/"}>
            <button className="create-btn">Cancel</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default EditContact;
