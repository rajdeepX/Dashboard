import React, { useState } from "react";
import "./CreateContact.css";
import { addContact } from "../features/contactSlice";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

const CreateContact = () => {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [status, setStatus] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(e.target.value);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      addContact({
        id: nanoid(),
        fName,
        lName,
        status,
      })
    );

    navigate("/");
  };

  return (
    <main className="create-contact">
      <div className="create-contact-container">
        <h1 className="create-contact-head">Create Contact</h1>
        <form
          onSubmit={(e) => handleFormSubmit(e)}
          className="create-contact-form"
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
          <button className="save-contact-btn" type="submit">
            Save Contact
          </button>
        </form>
      </div>
    </main>
  );
};

export default CreateContact;
