import { Link } from "react-router-dom";
import Contacts from "../components/Contacts";
import { useAppSelector } from "../app/hooks";

const ContactPage = () => {
  const contact = useAppSelector((state) => state.contact.contacts);
  console.log(contact);

  return (
    <main className="w-full h-screen px-5 py-[30px] sm:pl-[150px]">
      <div className="flex flex-col justify-center items-center gap-12">
        <div className="bg-[#4d4df5] text-white px-5 py-2.5 rounded-[10px]">
          <Link to={"/create-contact"} className="">
            Create Contact
          </Link>
        </div>
        {contact.length < 1 && (
          <div className="bg-[rgb(104,104,104)] text-white text-center p-5 rounded-[10px]">
            <h1>
              No Contact Found <br />
              Please add contact from <br />
              Create Contact Button
            </h1>
          </div>
        )}
        <div className="grid gap-4 w-full grid-cols-[repeat(2,1fr)] p-2.5 sm:grid-cols-[repeat(3,1fr)] md:grid-cols-[repeat(4,1fr)] lg:grid-cols-[repeat(5,1fr)]">
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
