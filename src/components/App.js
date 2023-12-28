import React, { Component } from 'react';
import Form from './Form';
import Section from './Section';
import Contacts from './Contacts';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <Section title={'Phonebook'}>
          <Form onSubmit={this.handleSubmit} />
        </Section>

        <Section title={'Contacts'}>
          <Contacts contacts={this.state.contacts} />
        </Section>
      </div>
    );
  }
}

export default App;
