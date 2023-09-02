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
    <main className="ml-[150px] sm:m-0">
      <div className="max-w-[800px] h-screen overflow-hidden flex flex-col justify-center items-center gap-8 mx-auto my-0">
        <h1 className="text-[2.5rem] font-[500] mt-[-150px]">Edit Contact</h1>
        <form
          className="flex flex-col w-[350px] gap-4 border p-5 rounded-[10px] border-solid border-[#999]"
          onSubmit={(e) => handleFormEdit(e)}
        >
          <div className="flex flex-col w-full justify-between items-center sm:flex-row">
            <label htmlFor="first-name" className="w-[30%]">
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
            <label htmlFor="status" className="w-[30%]">
              Status:
            </label>

            <div className="flex flex-col items-center w-1/5">
              <div className="flex gap-4 w-full">
                <input
                  type="radio"
                  name="status"
                  checked={status === "Active"}
                  value="Active"
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
                  checked={status === "Inactive"}
                  value="Inactive"
                  onChange={handleRadioChange}
                  required
                  className="accent-[black] w-[60%]"
                />
                <p>Inactive</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <button className="border bg-[#555] text-white px-5 py-2.5 rounded-[10px] border-solid border-[#999]">
              Save Edited Contact
            </button>

            <Link to={"/"}>
              <button className="border bg-[#555] text-white px-5 py-2.5 rounded-[10px] border-solid border-[#999]">
                Cancel
              </button>
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
};

export default EditContact;
