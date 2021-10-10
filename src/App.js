import "./App.css";
import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import AddContactForm from "components/AddContactForm";
import ContactList from "components/ContactList";
import Filter from "components/Filter";
class App extends Component {
  state = {
    contacts: [],
    filter: "",
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

  onFilterInputChange = (filter) => {
    this.setState({ filter });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  deleteContact = () => {
    this.setState((currState) => ({}));
  };

  render() {
    const { filter } = this.state;
    const contactsToShow = this.filterContacts();
    return (
      <section className="phonebookSection">
        <h1>Phonebook</h1>
        <AddContactForm createContact={this.createContact} />
        <h2>Contacts</h2>
        <Filter
          filterСondition={filter}
          onFilterInputChange={this.onFilterInputChange}
        />
        <ContactList contactsToShow={contactsToShow} />
      </section>
    );
  }
}

export default App;
