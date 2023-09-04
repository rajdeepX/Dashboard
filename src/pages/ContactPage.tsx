import { Link } from "react-router-dom";

import "./ContactPage.css";
import Contacts from "../components/Contacts";
import { useAppSelector } from "../app/hooks";

const ContactPage = () => {
  const contact = useAppSelector((state) => state.contact.contacts);
  console.log(contact);

  return (
    <main className=" ml-48">
      <div className=" flex flex-col w-[90%] gap-16 h-screen px-5 py-[50px]">
        <div className=" w-full text-center">
          <Link
            to={"/create-contact"}
            className=" bg-[#646cff] text-white px-5 py-2.5 rounded-[10px]"
          >
            Create Contact
          </Link>
        </div>
        {contact.length < 1 && (
          <div className="w-full text-center my-0 mx-auto font-[500] text-lg">
            <h1>
              No Contact Found <br />
              Please add contact from <br />
              Create Contact Button
            </h1>
          </div>
        )}
        <div className=" @apply grid gap-10 xl:grid-cols-[repeat(4,1fr)] w-full p-14 max-w-[900px] mx-auto my-0 sm:grid-cols-[repeat(1,1fr)] place-items-center md:grid-cols-[repeat(2,1fr)] lg:grid-cols-[repeat(3,1fr)]">
          {contact.length >= 1 &&
            contact.map((item) => {
              const { id, fName, lName, status } = item;
              return (
                <Contacts
                  key={id}
                  id={id}
                  fName={fName}
                  lName={lName}
                  status={status}
                />
              );
            })}
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
