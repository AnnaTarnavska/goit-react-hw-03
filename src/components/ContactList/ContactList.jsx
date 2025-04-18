import React from "react";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";


const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <div className={s.contactListBox}>
            {contacts.map(contact => (
                <Contact key={contact.id} contact={contact} onDelete = {() => onDeleteContact(contact.id)} />
            ))}
        </div>
    )
};

export default ContactList;