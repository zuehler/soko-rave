import "../../styles/page-contact/contact.scss";
import { ContactSoko } from "../../components/contact/contactSoko/contactSoko.jsx";
import { ContactMembers } from "../../components/contact/contactMembers/contactMembers.jsx";

export const Contact = () => {
  return (
    <div className="contact">
      <h1>SOKO_RAVE | bitte folgen! </h1>
      <ContactSoko />
      <ContactMembers />
    </div>
  );
};
