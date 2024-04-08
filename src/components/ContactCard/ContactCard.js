const ContactCard = ({ id, name, number, deleteContact }) => {
  return (
    <li style={{ display: "flex", alignItems: "center" }}>
      <h3>{name}:</h3>
      <p>{number}</p>
      <button type="button" onClick={() => deleteContact(id)}>
        delete
      </button>
    </li>
  );
};

export default ContactCard;