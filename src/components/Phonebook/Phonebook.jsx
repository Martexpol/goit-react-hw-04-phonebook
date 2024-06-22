import { useState } from "react";
import styles from "./Phonebook.module.scss";
import { nanoid } from "nanoid";
import propTypes from "prop-types";

export default function Phonebook({ addContact, contacts }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleChange = (ev) => {
    const { name, value } = ev.currentTarget;
    if (name === "name") {
      setName(value);
    } else if (name === "number") {
      setNumber(value);
    }
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    const contactExists = contacts.some(
      (contact) =>
        contact.name === newContact.name ||
        contact.number === newContact.number,
    );
    if (contactExists) {
      window.alert(`${newContact.name} is already in contacts`);
      return;
    }
    addContact(newContact);
    setName("");
    setNumber("");
  };

  const nameId = nanoid();
  const numId = nanoid();
  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor={nameId} className={styles.label}>
          Name
        </label>
        <input
          id={nameId}
          className={styles.input}
          type="text"
          name="name"
          pattern="^[A-Za-ząćęłńóśźżĄĆĘŁŃÓŚŹŻ]+(?: [A-Za-ząćęłńóśźżĄĆĘŁŃÓŚŹŻ]+)+$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
        <label htmlFor={numId} className={styles.label}>
          Phone number
        </label>
        <input
          id={numId}
          className={styles.input}
          type="tel"
          name="number"
          pattern="^\+?[1-9]\d{1,14}$"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
        <button type="submit" className={styles.btn}>
          Add contact
        </button>
      </form>
    </div>
  );
}

Phonebook.propTypes = {
  addContact: propTypes.func.isRequired,
  contacts: propTypes.array.isRequired,
};
