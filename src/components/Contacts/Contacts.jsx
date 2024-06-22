import SingleContact from "../SingleContact/SingleContact";
import propTypes from "prop-types";
import { useFormContext } from "../FormContextProvider/FormContextProvider";

export default function Contacts({ contacts, filter, onDelete }) {
  console.log(contacts);
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );
  console.log(filteredContacts);
  return (
    <div>
      <ul>
        {filteredContacts.map((contact) => (
          <SingleContact
            key={contact.id}
            contact={contact}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </div>
  );
}

Contacts.propTypes = {
  contacts: propTypes.array.isRequired,
  filter: propTypes.string.isRequired,
  onDelete: propTypes.func.isRequired,
};
