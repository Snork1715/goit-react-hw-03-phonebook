import React, { Component } from 'react';
import shortid from 'shortid';
import Form from './components/Form';
import ContactsList from './components/ContactsList';
import Filter from './components/Filter';
import './App.css';

class Phonebook extends Component {
    state = {
        contacts: [
            {
                id: 'id-1',
                name: 'Rosie Simpson',
                number: '459-12-56',
            },
            {
                id: 'id-2',
                name: 'Hermione Kline',
                number: '443-89-12',
            },
            {
                id: 'id-3',
                name: 'Eden Clements',
                number: '645-17-79',
            },
            {
                id: 'id-4',
                name: 'Annie Copeland',
                number: '227-91-26',
            },
        ],
        filter: '',
    };

    componentDidMount() {
        const localContacts = localStorage.getItem('contacts');
        const parsedContacts = JSON.parse(localContacts);

        if (parsedContacts) {
            this.setState({ contacts: parsedContacts });
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.contacts !== this.state.contacts) {
            localStorage.setItem(
                'contacts',
                JSON.stringify(this.state.contacts),
            );
        }
    }

    addContact = (name, number) => {
        const newContact = {
            id: shortid.generate(),
            name,
            number,
        };

        const dublicateContact = this.state.contacts.find(
            (contact) => contact.name === newContact.name,
        );

        if (dublicateContact) {
            alert(`Контакт ${dublicateContact.name} уже существует`);
        } else {
            this.setState((prevState) => ({
                contacts: [newContact, ...prevState.contacts],
            }));
        }
    };

    filterContacts = (event) => {
        const { name, value } = event.currentTarget;
        this.setState({ [name]: value });
    };

    deleteContact = (contactId) => {
        this.setState((prevState) => ({
            contacts: prevState.contacts.filter(
                (contact) => contact.id !== contactId,
            ),
        }));
    };

    render() {
        const normalizedFilter = this.state.filter.toLowerCase();

        const filteredContacts = this.state.contacts.filter(
            (contact) =>
                contact.name.toLowerCase().includes(normalizedFilter),
        );

        return (
            <div className="phonebook-warper">
                <div className="phonebook-form">
                    <h1>Phonebook</h1>
                    <Form onAdd={this.addContact} />
                </div>
                <div className="phonebook-contacts">
                    <h2>Contacts</h2>
                    <Filter
                        value={this.state.filter}
                        onChange={this.filterContacts}
                    />
                    <ContactsList
                        contacts={filteredContacts}
                        onDeleteContact={this.deleteContact}
                    />
                </div>
            </div>
        );
    }
}

export default Phonebook;
