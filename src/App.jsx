import { useState } from "react";
import { Formik, Form, Field } from "formik";
import "./App.css";
import "modern-normalize";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import initialContacts from "./components/initialContacts.json";

STORAGE_KEY = "contacts";

function App() {
  const [contacts, setContacts] = useState(initialContacts);
  const [searchedValue, setInputValue] = useState("");

  const handleSubmit = (contact) => {
    setContacts((prevContacts) => [...prevContacts, contact]);
  };

  const handleSearch = ({ currentTarget: { value } }) => {
    setInputValue(value);
  };

  const handleDeleteContact = (id) => {
    setContacts(contacts.slice().filter((contact) => contact.id !== id));
  };

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm onSubmitForm={handleSubmit} />
      <SearchBox onSearch={handleSearch} value={searchedValue} />
      <ContactList contacts={contacts} onDelete={handleDeleteContact} />
    </div>
  );
}

export default App;
