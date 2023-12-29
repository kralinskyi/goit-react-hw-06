import React, { Component } from 'react';
import { nanoid } from 'nanoid';

class Form extends Component {
  state = {
    name: '',
  };

  handleInput = e => {
    this.setState({ name: e.target.value });
  };

  resetForm = () => {
    this.setState({ name: '' });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name } = this.state;
    const id = nanoid();

    this.props.onSubmit({ id, name });
    this.resetForm();
  };

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        contact
        <label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            required
            onChange={this.handleInput}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default Form;
