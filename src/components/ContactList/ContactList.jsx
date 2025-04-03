import ContactItem from "../ContactItem/ContactItem";


const ContactList = ({ contacts }) => {
    return (
        <div>
            {contacts.map((contact, id) => (
                <ContactItem key={id} contact={contact} />
            ))}
        </div>
    )
};

export default ContactList;