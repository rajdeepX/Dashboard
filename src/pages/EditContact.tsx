import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
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

  const navigate = useNavigate();

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
    navigate("/");
  };

  return (
    <main className="w-full h-screen px-10 py-[30px] sm:pl-[150px]">
      <div className="p-5 md:w-3/5 md:mx-auto md:my-[30px] lg:w-[30%] lg:mx-auto lg:my-[30px]">
        <h1 className="text-center text-2xl px-0 py-5 sm:text-[2rem]">
          Edit Contact
        </h1>
        <form
          className="bg-[grey] text-white px-5 py-2.5 rounded-[10px]"
          onSubmit={(e) => handleFormEdit(e)}
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
          <div className="flex flex-col">
            <button className="bg-[#4d4df5] w-full  mb-2.5 px-5 py-2.5 rounded-[10px] sm:text-xl">
              Save Edited Contact
            </button>

            <Link to={"/"}>
              <button className="bg-[#555] w-full  mb-2.5 px-5 py-2.5 rounded-[10px] sm:text-xl">
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
