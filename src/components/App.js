import React, { Component } from 'react';
import Form from './Form';
import Section from './Section';
import Contacts from './Contacts';
import './App.css';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';
import Filter from './Filter';

class App extends Component {
  state = {
    contacts: [
      { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  addContact = newContact => {
    const { contacts } = this.state;

    if (
      contacts.filter(({ name }) => name === newContact.name).length &&
      contacts.filter(({ number }) => number === newContact.number).length
    ) {
      Notify.failure('You have this contact in your book!');
      return;
    } else if (
      contacts.filter(({ name }) => name === newContact.name).length ||
      contacts.filter(({ number }) => number === newContact.number).length
    ) {
      Notify.warning('You have similar contact in your book!');
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
    Notify.success('New contact has been added to your book!');
  };

  render() {
    const { contacts } = this.state;
    return (
      <div className="app">
        <Section title={'Phonebook'}>
          <Form onSubmit={this.addContact} />
        </Section>

        <Section title={'Contacts'}>
          <h2 className="filter-title">Find contact by name</h2>
          <Filter />
          <Contacts contacts={contacts} />
        </Section>
      </div>
    );
  }
}

export default App;
