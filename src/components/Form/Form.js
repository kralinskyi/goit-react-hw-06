import React, { Component } from 'react';
import { nanoid } from 'nanoid';

class Form extends Component {
  state = {
    contact: {
      name: '',
      id: nanoid(),
    },
  };

  handleChangeInput = e => {
    const { value } = e.currentTarget;
    this.setState({ contact: { name: value } });
  };

  handleSubmit = () => {
    this.props.contact = {
      name: this.state.name,
      id: this.state.id,
    };
  };

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        contact
        <label>
          <input
            type="text"
            name="name"
            required
            onChange={this.handleChangeInput}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default Form;
