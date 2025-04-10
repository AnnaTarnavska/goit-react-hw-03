import React, { useState, useEffect } from 'react';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm';
import "modern-normalize";
import "./App.css";

function App() {

  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const [filter, setFilter] = useState('');

  const LOCAL_STORAGE_KEY = 'phonebook_list';

  useEffect(() => {
    const savedContacts = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedContacts) {
      setContacts(JSON.parse(savedContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  const handleDeleteContact = (contactId) => {
    console.log('Deleting contact with id:', contactId);
    setContacts((prevContacts) => prevContacts.filter(contact => contact.id !== contactId));
  };
 

  const filterContacts = contacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  );



  return (
    <>
      <div className='phoneBookForm'>
        <h1 className='title'>Phonebook</h1>
        <ContactForm onAddContact={handleAddContact} />
        <SearchBox filter={filter} setFilter={setFilter} />
        <ContactList contacts={filterContacts} onDeleteContact={handleDeleteContact} />
      </div>
    </>
  )
}

export default App;
