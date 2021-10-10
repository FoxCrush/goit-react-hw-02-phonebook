import "./App.css";
import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

class App extends Component {
  state = {
    contacts: [],
    name: "",
  };
  createContact = (name) => {
    const contact = {
      name,
      id: uuidv4(),
    };
    this.setState((currState) => ({
      contacts: [...currState.contacts, contact],
    }));
  };

  addContactButtonHandler = (e) => {
    e.preventDefault();
    if (this.state.name.length > 0) {
      this.createContact(this.state.name);
    }

    this.setState({ name: "" });
  };
  onInputChangeHandler = (e) => {
    e.preventDefault();
    this.setState({ name: e.target.value });
  };
  deleteCobtact = () => {
    this.setState((currState) => ({}));
  };

  render() {
    const { contacts } = this.state;
    return (
      <section className="phonebookSection">
        <h1>Phonebook</h1>
        <div className="createContactContainer">
          <h3>Name</h3>
          <input
            value={this.state.name}
            onChange={this.onInputChangeHandler}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
          <button
            className="addContactButton"
            type="button"
            onClick={this.addContactButtonHandler}
          >
            Add contact
          </button>
        </div>
        <h2>Contacts</h2>
        <div className="contactListContainer">
          <ul>
            {contacts.map(({ id, name }) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
        </div>
      </section>
    );
  }
}

export default App;
