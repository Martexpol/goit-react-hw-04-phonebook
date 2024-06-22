import styles from "./App.module.scss";
import Contacts from "./Contacts/Contacts";
import Phonebook from "./Phonebook/Phonebook";
import Filter from "./Filter/Filter";
import { useState, useEffect } from "react";
import propTypes from "prop-types";

function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem("contacts")) || [];
    setContacts(storedContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (contact) => {
    console.log("phonebook contacts: ", contacts);
    console.log("nowy contact: ", contact);
    setContacts((prevContacts) => [...prevContacts, contact]);
    console.log("phonebook updated contacts: ", contacts);
  };

  const handleDelete = (contactId) => {
    setContacts(contacts.filter((contact) => contact.id !== contactId));
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <>
      <div className={styles.main}>
        {" "}
        <h1 className={styles.mainHeader}>React Homework 3 - Phonebook</h1>
      </div>
      <div className={styles.container}>
        <h2>Phonebook</h2>
        <Phonebook addContact={addContact} contacts={contacts} />
      </div>
      <div className={styles.container}>
        <h2>Contacts</h2>
        <Filter filter={filter} onFilterChange={handleFilterChange} />
        <Contacts contacts={contacts} filter={filter} onDelete={handleDelete} />
      </div>
    </>
  );
}

export default App;
