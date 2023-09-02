import { Link } from "react-router-dom";

// import "./ContactPage.css";
import Contacts from "../components/Contacts";
import { useAppSelector } from "../app/hooks";

const ContactPage = () => {
  const contact = useAppSelector((state) => state.contact.contacts);
  console.log(contact);

  return (
    <main className="@apply ml-48">
      <div className="@apply flex flex-col w-[90%] overflow-hidden gap-16 h-screen px-5 py-[50px]">
        <div className="  @apply w-full text-center">
          <Link
            to={"/create-contact"}
            className="@apply bg-[#646cff] text-white px-5 py-2.5 rounded-[10px]"
          >
            Create Contact
          </Link>
        </div>
        <div className=" @apply grid grid-cols-[repeat(4,1fr)] gap-10 w-full p-2.5">
          {contact.length >= 1 ? (
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
            })
          ) : (
            <div>
              <h1>No Contact Found</h1>
              <h1>Please add contact from</h1>
              <h1>Create Contact Button</h1>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
