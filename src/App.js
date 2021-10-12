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

  componentDidMount() {
    const contactsFromStorage = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contactsFromStorage);

    if (parsedContacts) {
      console.log(parsedContacts);

      this.setState({ contacts: parsedContacts });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    const prevContacts = prevState.contacts;
    const contacts = this.state.contacts;

    if (prevContacts !== contacts) {
      localStorage.setItem("contacts", JSON.stringify(contacts));
    }
  }

  sameContactNameWarning = (name) => {
    alert(`${name} already exists`);
  };

  createContact = (name = "no name", number = "no number") => {
    if (this.state.contacts.some((contact) => contact.name === name)) {
      this.sameContactNameWarning(name);
      return;
    }
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

  deleteContact = (contactID) => {
    this.setState((currState) => ({
      contacts: currState.contacts.filter(
        (contact) => contact.id !== contactID
      ),
    }));
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
        <ContactList
          contactsToShow={contactsToShow}
          deleteMethod={this.deleteContact}
        />
      </section>
    );
  }
}

export default App;
