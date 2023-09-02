import React, { useState } from "react";
// import "./CreateContact.css";
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
    <main className="ml-[150px] sm:m-0">
      <div className="max-w-[800px] h-screen overflow-hidden flex flex-col justify-center items-center gap-8 mx-auto my-0 ">
        <h1 className="text-[2.5rem] font-[500] mt-[-150px]">Create Contact</h1>
        <form
          onSubmit={(e) => handleFormSubmit(e)}
          className="flex flex-col w-[350px] gap-4 border p-5 rounded-[10px] border-solid border-[#999] "
        >
          <div className="  flex flex-col w-full justify-between items-center sm:flex-row">
            <label className="w-[30%]" htmlFor="first-name">
              First Name:
            </label>
            <input
              type="text"
              value={fName}
              onChange={(e) => setFName(e.target.value)}
              required
              className=" p-[5px] border-2 border-solid border-[black] rounded-md w-[60%]"
            />
          </div>
          <div className="flex flex-col w-full justify-between items-center sm:flex-row">
            <label htmlFor="last-name" className="w-[30%]">
              Last Name:
            </label>
            <input
              type="text"
              value={lName}
              onChange={(e) => setLName(e.target.value)}
              required
              className=" p-[5px] border-2 border-solid border-[black] rounded-md w-[60%]"
            />
          </div>
          <div className="flex items-center text-center gap-8">
            <label className="w-[30%]" htmlFor="status">
              Status:
            </label>

            <div className="flex flex-col items-center w-1/5">
              <div className="flex gap-4 w-full">
                <input
                  type="radio"
                  name="status"
                  value="Active"
                  checked={status === "Active"}
                  onChange={handleRadioChange}
                  required
                  className="accent-[black] w-[60%]"
                />
                <p>Active</p>
              </div>
              <div className="flex gap-4 w-full">
                <input
                  type="radio"
                  name="status"
                  value="Inactive"
                  checked={status === "Inactive"}
                  onChange={handleRadioChange}
                  required
                  className="accent-[black] w-[60%]"
                />
                <p>Inactive</p>
              </div>
            </div>
          </div>
          <button
            className="border bg-[#555] text-white px-5 py-2.5 rounded-[10px] border-solid border-[#999]"
            type="submit"
          >
            Save Contact
          </button>
        </form>
      </div>
    </main>
  );
};

export default CreateContact;
