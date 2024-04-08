import ContactCard from "../ContactCard";

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <>
      <h2>Contacts</h2>
      <ul>
        {contacts?.map((contact) => (
          <ContactCard
            key={contact.id}
            {...contact}
            deleteContact={deleteContact}
          />
        ))}
      </ul>
    </>
  );
};

export default ContactList;
