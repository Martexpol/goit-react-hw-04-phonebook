import { createContext, useContext, useState } from "react";
import propTypes from "prop-types";

const FormContext = createContext();

export const useFormContext = () => useContext(FormContext);

export default function FormContextProvider({ children }) {
  const [contacts, setContacts] = useState([]);

  return (
    <FormContext.Provider value={{ contacts, setContacts }}>
      {children}
    </FormContext.Provider>
  );
}

FormContextProvider.propTypes = {
  children: propTypes.node.isRequired,
};
