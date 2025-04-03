import { IoPersonSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import s from "./ContactItem.module.css";

const ContactItem = ({ contact }) => {
    const { name, number } = contact;
    
    return (
        <div className={s.contactbox}>
        <ul>
            <li><IoPersonSharp size="14"/>{name}</li>
            <li><FaPhoneAlt size="14"/> {number}</li>
        </ul>
            <button>Delite</button>
            </div>
    )
};

export default ContactItem;