import styles from "./SingleContact.module.scss";
import propTypes from "prop-types";
import React, { useState, useEffect } from "react";

export default function SingleContact({ contact, onDelete }) {
  const [currentContact, setCurrentContact] = useState(contact);

  useEffect(() => {
    setCurrentContact(contact);
  }, [contact]);

  const handleDelete = () => {
    onDelete(contact.id);
  };

  return (
    <li key={currentContact.id} className={styles.contact}>
      <span className={styles.contactName}> {currentContact.name}:</span>
      <span className={styles.contactNumber}>{currentContact.number}</span>
      <button type="button" className={styles.deleteBtn} onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
}
SingleContact.propTypes = {
  contact: propTypes.shape({
    id: propTypes.number.isRequired,
    name: propTypes.string.isRequired,
    number: propTypes.string.isRequired,
  }).isRequired,
  onDelete: propTypes.func.isRequired,
};
