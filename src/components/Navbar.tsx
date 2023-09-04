import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="@apply w-full bg-[rgb(70,70,70)] text-[#ffffeb] h-20 flex px-[50px] py-2.5 sm:w-[150px] sm:h-screen sm:fixed">
      <ul className="w-full flex justify-between items-center sm:flex sm:flex-col sm:justify-center sm:items-center sm:text-center sm:gap-20 sm:text-2xl">
        <li>
          <NavLink to={"/"}>
            <p className="link-text">Contacts</p>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/charts"}>
            <span className="link-text">Charts and Maps</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
