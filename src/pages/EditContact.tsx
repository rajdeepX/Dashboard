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
    <main className="create-contact">
      <div className="create-contact-container">
        <h1 className="create-contact-head">Edit Contact</h1>
        <form
          className="create-contact-form"
          onSubmit={(e) => handleFormEdit(e)}
        >
          <div className="create-first-name">
            <label className="" htmlFor="first-name">
              First Name:
            </label>
            <input
              type="text"
              value={fName}
              onChange={(e) => setFName(e.target.value)}
              required
              className="first-name-input"
            />
          </div>
          <div className="create-last-name">
            <label htmlFor="last-name" className="">
              Last Name:
            </label>
            <input
              type="text"
              value={lName}
              onChange={(e) => setLName(e.target.value)}
              required
              className="last-name-input"
            />
          </div>
          <div className="create-status">
            <label className="status-label" htmlFor="status">
              Status:
            </label>

            <div className="status-radio-container">
              <div className="status-radio">
                <input
                  type="radio"
                  name="status"
                  value="Active"
                  checked={status === "Active"}
                  onChange={handleRadioChange}
                  required
                  className="accent-[black]"
                />
                <p>Active</p>
              </div>
              <div className="status-radio">
                <input
                  type="radio"
                  name="status"
                  value="Inactive"
                  checked={status === "Inactive"}
                  onChange={handleRadioChange}
                  required
                  className="accent-[black]"
                />
                <p>Inactive</p>
              </div>
            </div>
          </div>
          <div className="edit-btn-container">
            <Link to={"/"}>
              <button className="edit-save">Save Edited Contact</button>
            </Link>

            <Link to={"/"}>
              <button className="cancel-save">Cancel</button>
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
};

export default EditContact;
