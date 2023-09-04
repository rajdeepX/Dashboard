import React, { useState } from "react";
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
    <main className="w-full h-screen px-10 py-[30px] sm:pl-[150px]">
      <div className="p-5 md:w-3/5 md:mx-auto md:my-[30px] lg:w-[30%] lg:mx-auto lg:my-[30px]">
        <h1 className="text-center text-2xl px-0 py-5 sm:text-[2rem]">
          Create Contact
        </h1>
        <form
          onSubmit={(e) => handleFormSubmit(e)}
          className="bg-[grey] text-white px-5 py-2.5 rounded-[10px]"
        >
          <div className="flex flex-col gap-2 text-[1.2rem] mb-2.5 sm:text-2xl">
            <label className="" htmlFor="first-name">
              First Name:
            </label>
            <input
              type="text"
              value={fName}
              onChange={(e) => setFName(e.target.value)}
              required
              className="text-[#222] px-3 py-[7px] rounded-[7px]"
            />
          </div>
          <div className="flex flex-col gap-2 text-[1.2rem] mb-2.5 sm:text-2xl">
            <label htmlFor="last-name" className="">
              Last Name:
            </label>
            <input
              type="text"
              value={lName}
              onChange={(e) => setLName(e.target.value)}
              required
              className="text-[#222] px-3 py-[7px] rounded-[7px]"
            />
          </div>
          <div className="flex justify-between mb-[30px]">
            <label className="text-[1.2rem] sm:text-2xl" htmlFor="status">
              Status:
            </label>

            <div className="flex flex-col w-6/12">
              <div className="flex gap-4 items-center text-[1.2rem] sm:text-2xl">
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
              <div className="flex gap-4 items-center text-[1.2rem] sm:text-2xl">
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
          <button
            className="bg-[#4d4df5] w-full mb-2.5 mx-auto my-0 px-5 py-2.5 rounded-[10px] sm:text-xl"
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
