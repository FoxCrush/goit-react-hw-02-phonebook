import "./App.css";
import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

class App extends Component {
  state = {
    contacts: [],
    name: "",
    number: "",
  };

  createContact = (name = "no name", number = "no number") => {
    const contact = {
      name,
      number,
      id: uuidv4(),
    };
    this.setState((currState) => ({
      contacts: [...currState.contacts, contact],
    }));
  };

  addContactButtonHandler = () => {
    if (this.state.name.length > 0) {
      this.createContact(this.state.name, this.state.number);
    }

    this.setState({ name: "", number: "" });
  };

  onInputChangeHandler = (e) => {
    e.preventDefault();
    const type = e.target.name;
    this.setState({ [type]: e.target.value });
  };

  deleteCobtact = () => {
    this.setState((currState) => ({}));
  };

  render() {
    const { contacts, name, number } = this.state;
    return (
      <section className="phonebookSection">
        <h1>Phonebook</h1>
        <div className="createContactContainer">
          <h3>Name</h3>
          <input
            value={name}
            onChange={this.onInputChangeHandler}
            className="clientInputTextfield"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
          <h3>Number</h3>
          <input
            value={number}
            onChange={this.onInputChangeHandler}
            className="clientInputTextfield"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
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
            {contacts.map(({ id, name, number }) => (
              <li key={id}>
                {name}: {number}
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }
}

export default App;
