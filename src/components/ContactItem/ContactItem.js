import React from 'react';
import './ContactItem.css';

const ContactItem = ({ name, id, number, onDelete }) => {
    return (
        <li className="contact-item">
            {name} {number}
            <button
                type="button"
                onClick={() => onDelete(id)}
                className="contact-item_button"
            >
                Удалить
            </button>
        </li>
    );
};

export default ContactItem;
