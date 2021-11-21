import React from 'react';
import ContactItem from '../ContactItem';
import './ContactsList.css';

const ContactsList = ({ contacts, onDeleteContact }) => {
    return (
        <ul className="phonebook-contacts_list">
            {contacts.map((contact) => (
                <ContactItem
                    key={contact.id}
                    id={contact.id}
                    name={contact.name}
                    number={contact.number}
                    onDelete={onDeleteContact}
                />
            ))}
        </ul>
    );
};

export default ContactsList;
