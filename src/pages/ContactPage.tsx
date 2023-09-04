import { Link } from "react-router-dom";

import "./ContactPage.css";
import Contacts from "../components/Contacts";
import { useAppSelector } from "../app/hooks";

const ContactPage = () => {
  const contact = useAppSelector((state) => state.contact.contacts);
  console.log(contact);

  return (
    <main className="contact-page">
      <div className="contact-page-container">
        <div className="create-contact-btn">
          <Link to={"/create-contact"} className="">
            Create Contact
          </Link>
        </div>
        {contact.length < 1 && (
          <div className="no-contact-msg">
            <h1>
              No Contact Found <br />
              Please add contact from <br />
              Create Contact Button
            </h1>
          </div>
        )}
        <div className="contact-list">
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
