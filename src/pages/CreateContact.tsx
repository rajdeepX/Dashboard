import React, { useState } from "react";
import "./CreateContact.css";
import { addContact } from "../features/contactSlice";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

const CreateContact = () => {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [status, setStatus] = useState("");

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
    console.log(fName, lName, status);
  };

  // console.log("hello");

  return (
    <div className="create-form-container page-margin">
      <form onSubmit={(e) => handleFormSubmit(e)}>
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
                value="Active"
                checked={status === "Active"}
                onChange={handleRadioChange}
              />
              <p>Active</p>
            </div>
            <div className="radio-btn">
              <input
                type="radio"
                name="status"
                value="Inactive"
                checked={status === "Inactive"}
                onChange={handleRadioChange}
              />
              <p>Inactive</p>
            </div>
          </div>
        </div>
        <button className="create-btn" type="submit">
          Save Contact
        </button>
      </form>
    </div>
  );
};

export default CreateContact;
