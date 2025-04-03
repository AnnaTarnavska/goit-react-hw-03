import React from 'react';
import contacts from "./data/contacts.json"
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import "modern-normalize";
import './App.css'

function App() {

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        {/* <ContactForm /> */}
        <SearchBox />
        <ContactList contacts={contacts}/>
      </div>
    </>
  )
}

export default App;
