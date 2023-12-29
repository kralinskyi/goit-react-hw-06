import React, { Component } from 'react';
import Form from './Form';
import Section from './Section';
import Contacts from './Contacts';
import './App.css';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [
      { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
  };

  addContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  render() {
    const { contacts } = this.state;
    return (
      <div className="app">
        <Section title={'Phonebook'}>
          <Form onSubmit={this.addContact} />
        </Section>

        <Section title={'Contacts'}>
          <Contacts contacts={contacts} />
        </Section>
      </div>
    );
  }
}

export default App;
